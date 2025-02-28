/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureDigitalTwinsManagementClient } from "@azure/arm-digitaltwins";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get all the DigitalTwinsInstances in a subscription.
 *
 * @summary Get all the DigitalTwinsInstances in a subscription.
 * x-ms-original-file: specification/digitaltwins/resource-manager/Microsoft.DigitalTwins/stable/2022-10-31/examples/DigitalTwinsList_example.json
 */
async function getDigitalTwinsInstanceResourcesBySubscription() {
  const subscriptionId = "50016170-c839-41ba-a724-51e9df440b9e";
  const credential = new DefaultAzureCredential();
  const client = new AzureDigitalTwinsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.digitalTwins.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

getDigitalTwinsInstanceResourcesBySubscription().catch(console.error);
