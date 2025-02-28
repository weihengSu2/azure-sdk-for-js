/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridContainerServiceClient } from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List the Hybrid AKS storage object by resource group
 *
 * @summary List the Hybrid AKS storage object by resource group
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/ListStorageSpaceByResourceGroup.json
 */
async function listStorageSpaceByResourceGroup() {
  const subscriptionId = "a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b";
  const resourceGroupName = "test-arcappliance-resgrp";
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.storageSpacesOperations.listByResourceGroup(
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listStorageSpaceByResourceGroup().catch(console.error);
