/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.1
*/

import { ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { DemoContract } from "./DemoContract";

const bytecode = decompressBytecode("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");

export class DemoContractFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, DemoContract.abi, accountOrProvider);
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<DemoContract>> {
    const factory = new DemoContractFactory(wallet);

    return factory.deploy({
      storageSlots: DemoContract.storageSlots,
      ...options,
    });
  }
}
