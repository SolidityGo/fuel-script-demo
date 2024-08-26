contract;

use std::{
    asset::{
        burn,
        mint,
        transfer,
    },
    auth::msg_sender,
    block::height,
    call_frames::msg_asset_id,
    constants::ZERO_B256,
    context::msg_amount,
    hash::Hash,
    math::*,
};

pub enum TransactionError {
    /// The desired amount is too high.
    DesiredAmountTooHigh: u64,
    /// The desired amount is too low.
    DesiredAmountTooLow: u64,
    /// The deposit amount was not greater than zero.
    ExpectedNonZeroDeposit: AssetId,
    /// The reserve amount is too low.
    InsufficientReserve: AssetId,
    /// The total liquidity is not greater than zero.
    NoLiquidityToRemove: (),
}


storage {
    /// Deposit amounts per (depositor, asset) that can be used to add liquidity or be withdrawn.
    deposits: StorageMap<(Identity, AssetId), u64> = StorageMap {},
}

abi Test {
    #[payable]
    #[storage(read, write)]
    fn deposit();
}

impl Test for Contract {
    #[payable]
    #[storage(read, write)]
    fn deposit() {
        let deposit_asset = msg_asset_id();
        let sender = msg_sender().unwrap();
        let amount = msg_amount();
        let new_balance = storage.deposits.get((sender, deposit_asset)).try_read().unwrap_or(0) + amount;

        storage.deposits.insert((sender, deposit_asset), new_balance);
    }
}
