/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates an admin rule.
 *
 * @summary Creates or updates an admin rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkManagerDefaultAdminRulePut.json
 */
async function createADefaultAdminRule() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestSecurityConfig";
  const ruleCollectionName = "testRuleCollection";
  const ruleName = "SampleDefaultAdminRule";
  const adminRule = {
    flag: "AllowVnetInbound",
    kind: "Default",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.adminRules.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    configurationName,
    ruleCollectionName,
    ruleName,
    adminRule
  );
  console.log(result);
}

createADefaultAdminRule().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates an admin rule.
 *
 * @summary Creates or updates an admin rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/NetworkManagerAdminRulePut.json
 */
async function createAnAdminRule() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "rg1";
  const networkManagerName = "testNetworkManager";
  const configurationName = "myTestSecurityConfig";
  const ruleCollectionName = "testRuleCollection";
  const ruleName = "SampleAdminRule";
  const adminRule = {
    description: "This is Sample Admin Rule",
    access: "Deny",
    destinationPortRanges: ["22"],
    destinations: [{ addressPrefix: "*", addressPrefixType: "IPPrefix" }],
    direction: "Inbound",
    kind: "Custom",
    priority: 1,
    sourcePortRanges: ["0-65535"],
    sources: [{ addressPrefix: "Internet", addressPrefixType: "ServiceTag" }],
    protocol: "Tcp",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.adminRules.createOrUpdate(
    resourceGroupName,
    networkManagerName,
    configurationName,
    ruleCollectionName,
    ruleName,
    adminRule
  );
  console.log(result);
}

createAnAdminRule().catch(console.error);
