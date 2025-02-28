/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CommunicationServiceManagementClient } from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the EmailService and its properties.
 *
 * @summary Get the EmailService and its properties.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2022-07-01-preview/examples/emailServices/get.json
 */
async function getEmailServiceResource() {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "12345";
  const resourceGroupName =
    process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const emailServiceName = "MyEmailServiceResource";
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.emailServices.get(
    resourceGroupName,
    emailServiceName
  );
  console.log(result);
}

async function main() {
  getEmailServiceResource();
}

main().catch(console.error);
