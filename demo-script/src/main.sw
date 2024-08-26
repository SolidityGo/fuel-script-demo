script;

abi Test {
    #[storage(read, write)]
    fn add_liquidity(a: AssetId, b: AssetId) -> u64;

    #[payable]
    #[storage(read, write)]
    fn deposit();
}

fn main(
    test_contract_id: ContractId,
    a: AssetId,
) {
    let test_contract = abi(Test, test_contract_id.into());

    // deposit second asset
    test_contract.deposit { gas: 70_000, coins: 11, asset_id: a.into()}();
}
