import {Wallet, TESTNET_NETWORK_URL, Provider} from "fuels";
import { DemoScript } from "../script-types";

const log = console.log;

const main = async () => {
  const provider = await Provider.create(TESTNET_NETWORK_URL);
  const wallet = Wallet.fromMnemonic('test test test test test test test test test test test junk');
  wallet.connect(provider)

  const { balances } = await wallet.getBalances();
  log(wallet.address, wallet.address.toB256(), balances);

  const demoScript = new DemoScript(wallet);
  const testContractId = '0x40accd653db8704e950d6bcecfe7d07a151ccfdf06e2056246fe6992e457a2e8'
  const testContractIdInput = {
    bits: testContractId
  }

  let assetETH = "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07";
  let myAsset = "0xa493b539503e55df4ea83ca13a2126196c8bddc72c306a1ada959a52404df258";
  // const assetInput = { bits: assetETH };
  const assetInput = { bits: myAsset };

  const { transactionId, waitForResult } = await demoScript.functions
    .main(testContractIdInput, assetInput)
    .call();

  log("script tx transactionId", `https://app.fuel.network/tx/${transactionId}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
