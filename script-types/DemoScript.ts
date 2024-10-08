/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.1
*/

import {
  Account,
  decompressBytecode,
  Script,
} from 'fuels';

export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;

export type DemoScriptInputs = [test_contract_id: ContractIdInput, a: AssetIdInput];
export type DemoScriptOutput = void;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "struct std::asset_id::AssetId",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "metadataTypeId": 1
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 2
    }
  ],
  "metadataTypes": [
    {
      "type": "b256",
      "metadataTypeId": 0
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "test_contract_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "a",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "main",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": null
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const bytecode = decompressBytecode('H4sIABYHzGYAA31WQW8bRRR+Tmzi0EMHKZasQYg9JMGXFiMaMAUpu7LN2t0aj5VWsdSuNlGDKCcsU6LeuoceekEKSIEcEMoRbmPHFjn62Bv+ARzMoVIi1SIHKiXqIXwzu44Xp6kvO5p58733vvfeN+ZHWXpANEX6N2u6p70YOz0l/lzQDxTLibwcrBfoTW/IFoXdygpHbvFDRvyZQcbxh1R/OZgSLwdxYHzAnT41b5KRGc73YCcvsHuPV/skbGk0S7AtXvNhK/Q9p9MTZcPQ6/Kcwjg626+2WFNgXUkRPzSAm53EvcJt4Dqy/2q/sV/DcxOYTOE3C/ha86ZbpJhrES1YjLaJ3v0pSWH+tMbzu8TtLeLOgNwKkY5huESiChy1rnbP9llliTwrS+AsyCHf6elvMd7jLxj9qPBODNoB/s/wc+OY4G/6dOwvUTrztwp/zlGMlQ3k3qkHuSeAvfeEH2aRH03m9yfPI7+VVlCDWrwn8q2GNzSugucZfN8XTusgyB1n9+R+08R6fR6YnYf6jgXO7b3f+CHiecYm8f/Q+FW5A94QS9wU+faxsp2wSyo72KQzQ22zr9f5jomap5t1rIsJH7FJvbZSvvuV/Mj15MfuHYl+a/dHdYF9FrEz8Af7dlqvrTnfzcsCbJLMipvM2qCUlehtmhRDDySQ09Tb7gNavEuUeWfb5xsN5NcuBZiPYb/tu4684VkGCYuSri3LClNYawrPF3YbnG194Q0bVW9IArV8Cr+IEzZ2e1evdTydYK32sQZvgZ0+28sEPTjJDf2lObTlYJxX9ywv3CvxA8X9uXv/hPeOIvdy43vdtLA7mdGZ8j1Rk1xwv5sTTicH3tEDKdidm5GrekbutXw9m+sFHxxcw+wvITZ2vtb0fYDbEsEsP8Ystwz0ajpTVr3aHui1tYC5a+XG+62no33U/BN3RV5HTT9VGKwc91PlBdoshfUsoZ61gr8oVD03iNdRT6edad5VGpHqseIG6XVxQc2zoXoCdap7wzXHG5o3EX8FNTQjNXwSqWF/tO9afhwc9oWzdxzEmUJee/VgFqA3f09ySjKsST2CdxDBSwDvAHwr3RrhNV6D90uI1xjjdWncY12cdfYjvvaBp/po1HO5C3puOcRVeY96J+iVADcD3NLFvUO/hzU+PtPrYH2pWXmrccWaX+GmPh+A688Q1w7Okgqb/0vQPGjaiQg1b/o00Dy6HNHYUPMGyDVOiyXsl1DjqkxDs6bVHr5x77nuBWiKfi+y0Ku0ehf015qHvipfwDphI329HPpajvi6H9Vz+BC6NtBV6IbCVtqd0ZjQbrcqE9AIJlak6Q2zSVExk81byK2SgK5By5SWWgUVg+JupPH3Ixq//IoYBM/DP/JFHpip/8/gd0Sfq3fUrRjk1oyYWzamxKrMwT803EyCi1ncg76Ic28c7l4P32Cm3mBd03zHD7kREW5GcT2KxLU15sYnXkV8K/Ih8k1naikz0PNCoMmKMxvv3h35hrsqZ6ChSewlWS1FqVrR3BTh7ArM7u3btHhLz66pZpfVNkyvhvfSVPo9p/qyhFmd9YYC/zHokuZVa4OaF7mm18WwPuU54i8MlcsWP8mOcnkU5jITyYWNe0pxgb7OS1JvfMgFi3AxM9mT0R6Jvt+RuuresvGPaePLxjfffo1s9W9m9z/9dDEUUAkAAA==');

export class DemoScript extends Script<DemoScriptInputs, DemoScriptOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
