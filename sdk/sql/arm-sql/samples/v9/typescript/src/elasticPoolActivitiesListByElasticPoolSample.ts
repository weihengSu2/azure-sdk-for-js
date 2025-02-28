/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Returns elastic pool activities.
 *
 * @summary Returns elastic pool activities.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/stable/2014-04-01-legacy/examples/ElasticPoolActivityList.json
 */
async function listElasticPoolActivity() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-4291";
  const serverName = "sqlcrudtest-6574";
  const elasticPoolName = "8749";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.elasticPoolActivities.listByElasticPool(
    resourceGroupName,
    serverName,
    elasticPoolName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listElasticPoolActivity().catch(console.error);
