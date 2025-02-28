/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { QumuloStorage } = require("@azure/arm-liftrqumulo");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List the operations for the provider
 *
 * @summary List the operations for the provider
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/preview/2022-10-12-preview/examples/Operations_List_MaximumSet_Gen.json
 */
async function operationsListMaximumSetGen() {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List the operations for the provider
 *
 * @summary List the operations for the provider
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/preview/2022-10-12-preview/examples/Operations_List_MinimumSet_Gen.json
 */
async function operationsListMinimumSetGen() {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  operationsListMaximumSetGen();
  operationsListMinimumSetGen();
}

main().catch(console.error);
