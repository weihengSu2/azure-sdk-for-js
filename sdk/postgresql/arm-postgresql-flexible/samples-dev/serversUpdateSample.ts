/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ServerForUpdate,
  PostgreSQLManagementFlexibleServerClient
} from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @summary Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2022-12-01/examples/ServerUpdate.json
 */
async function serverUpdate() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "TestGroup";
  const serverName = "pgtestsvc4";
  const parameters: ServerForUpdate = {
    administratorLoginPassword: "newpassword",
    backup: { backupRetentionDays: 20 },
    createMode: "Update",
    sku: { name: "Standard_D8s_v3", tier: "GeneralPurpose" },
    storage: { storageSizeGB: 1024 }
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @summary Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2022-12-01/examples/ServerUpdateWithAadAuthEnabled.json
 */
async function serverUpdateWithAadAuthEnabled() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "TestGroup";
  const serverName = "pgtestsvc4";
  const parameters: ServerForUpdate = {
    administratorLoginPassword: "newpassword",
    authConfig: {
      activeDirectoryAuth: "Enabled",
      passwordAuth: "Enabled",
      tenantId: "tttttt-tttt-tttt-tttt-tttttttttttt"
    },
    backup: { backupRetentionDays: 20 },
    createMode: "Update",
    sku: { name: "Standard_D8s_v3", tier: "GeneralPurpose" },
    storage: { storageSizeGB: 1024 }
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @summary Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2022-12-01/examples/ServerUpdateWithCustomerMaintenanceWindow.json
 */
async function serverUpdateWithCustomerMaintenanceWindow() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const serverName = "pgtestsvc4";
  const parameters: ServerForUpdate = {
    createMode: "Update",
    maintenanceWindow: {
      customWindow: "Enabled",
      dayOfWeek: 0,
      startHour: 8,
      startMinute: 0
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @summary Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2022-12-01/examples/ServerUpdateWithDataEncryptionEnabled.json
 */
async function serverUpdateWithDataEncryptionEnabled() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "TestGroup";
  const serverName = "pgtestsvc4";
  const parameters: ServerForUpdate = {
    administratorLoginPassword: "newpassword",
    backup: { backupRetentionDays: 20 },
    createMode: "Update",
    dataEncryption: {
      type: "AzureKeyVault",
      primaryKeyURI:
        "https://test-kv.vault.azure.net/keys/test-key1/77f57315bab34b0189daa113fbc78787",
      primaryUserAssignedIdentityId:
        "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-usermanagedidentity"
    },
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/ffffffffFfffFfffFfffFfffffffffff/resourceGroups/testresourcegroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/testUsermanagedidentity": {}
      }
    },
    sku: { name: "Standard_D8s_v3", tier: "GeneralPurpose" },
    storage: { storageSizeGB: 1024 }
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 *
 * @summary Updates an existing server. The request body can contain one to many of the properties present in the normal server definition.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2022-12-01/examples/ServerUpdateWithMajorVersionUpgrade.json
 */
async function serverUpdateWithMajorVersionUpgrade() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const serverName = "pgtestsvc4";
  const parameters: ServerForUpdate = { createMode: "Update", version: "14" };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const result = await client.servers.beginUpdateAndWait(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

async function main() {
  serverUpdate();
  serverUpdateWithAadAuthEnabled();
  serverUpdateWithCustomerMaintenanceWindow();
  serverUpdateWithDataEncryptionEnabled();
  serverUpdateWithMajorVersionUpgrade();
}

main().catch(console.error);
