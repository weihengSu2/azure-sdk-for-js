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
  EventSubscription,
  EventGridManagementClient
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopic() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    destination: {
      endpointType: "EventHub",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.EventHub/namespaces/ContosoNamespace/eventhubs/EH1"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic_AzureFunctionDestination.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopicAzureFunctionDestination() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    deadLetterDestination: {
      blobContainerName: "contosocontainer",
      endpointType: "StorageBlob",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg"
    },
    destination: {
      endpointType: "AzureFunction",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Web/sites/ContosoSite/funtions/ContosoFunc"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic_EventHubDestination.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopicEventHubDestination() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    deadLetterDestination: {
      blobContainerName: "contosocontainer",
      endpointType: "StorageBlob",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg"
    },
    destination: {
      endpointType: "EventHub",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.EventHub/namespaces/ContosoNamespace/eventhubs/EH1"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic_HybridConnectionDestination.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopicHybridConnectionDestination() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    deadLetterDestination: {
      blobContainerName: "contosocontainer",
      endpointType: "StorageBlob",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg"
    },
    destination: {
      endpointType: "HybridConnection",
      resourceId:
        "/subscriptions/d33c5f7a-02ea-40f4-bf52-07f17e84d6a8/resourceGroups/TestRG/providers/Microsoft.Relay/namespaces/ContosoNamespace/hybridConnections/HC1"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic_ServiceBusQueueDestination.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopicServiceBusQueueDestination() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    deadLetterDestination: {
      blobContainerName: "contosocontainer",
      endpointType: "StorageBlob",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg"
    },
    destination: {
      endpointType: "ServiceBusQueue",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.ServiceBus/namespaces/ContosoNamespace/queues/SBQ"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic_ServiceBusTopicDestination.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopicServiceBusTopicDestination() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    deadLetterDestination: {
      blobContainerName: "contosocontainer",
      endpointType: "StorageBlob",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg"
    },
    destination: {
      endpointType: "ServiceBusTopic",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.ServiceBus/namespaces/ContosoNamespace/topics/SBT"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic_StorageQueueDestination.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopicStorageQueueDestination() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    deadLetterDestination: {
      blobContainerName: "contosocontainer",
      endpointType: "StorageBlob",
      resourceId:
        "/subscriptions/55f3dcd4-cac7-43b4-990b-a139d62a1eb2/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg"
    },
    destination: {
      endpointType: "StorageQueue",
      queueName: "queue1",
      resourceId:
        "/subscriptions/d33c5f7a-02ea-40f4-bf52-07f17e84d6a8/resourceGroups/TestRG/providers/Microsoft.Storage/storageAccounts/contosostg"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForCustomTopic_WebhookDestination.json
 */
async function eventSubscriptionsCreateOrUpdateForCustomTopicWebhookDestination() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const eventSubscriptionInfo: EventSubscription = {
    destination: {
      endpointType: "WebHook",
      endpointUrl:
        "https://azurefunctionexample.azurewebsites.net/runtime/webhooks/EventGrid?functionName=EventGridTrigger1&code=PASSWORDCODE"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForResource.json
 */
async function eventSubscriptionsCreateOrUpdateForResource() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventHub/namespaces/examplenamespace1";
  const eventSubscriptionName = "examplesubscription10";
  const eventSubscriptionInfo: EventSubscription = {
    destination: {
      endpointType: "WebHook",
      endpointUrl: "https://requestb.in/15ksip71"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForResourceGroup.json
 */
async function eventSubscriptionsCreateOrUpdateForResourceGroup() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg";
  const eventSubscriptionName = "examplesubscription2";
  const eventSubscriptionInfo: EventSubscription = {
    destination: {
      endpointType: "WebHook",
      endpointUrl: "https://requestb.in/15ksip71"
    },
    filter: {
      isSubjectCaseSensitive: false,
      subjectBeginsWith: "ExamplePrefix",
      subjectEndsWith: "ExampleSuffix"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @summary Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/EventSubscriptions_CreateOrUpdateForSubscription.json
 */
async function eventSubscriptionsCreateOrUpdateForSubscription() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const eventSubscriptionName = "examplesubscription3";
  const eventSubscriptionInfo: EventSubscription = {
    destination: {
      endpointType: "WebHook",
      endpointUrl: "https://requestb.in/15ksip71"
    },
    filter: { isSubjectCaseSensitive: false }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.eventSubscriptions.beginCreateOrUpdateAndWait(
    scope,
    eventSubscriptionName,
    eventSubscriptionInfo
  );
  console.log(result);
}

async function main() {
  eventSubscriptionsCreateOrUpdateForCustomTopic();
  eventSubscriptionsCreateOrUpdateForCustomTopicAzureFunctionDestination();
  eventSubscriptionsCreateOrUpdateForCustomTopicEventHubDestination();
  eventSubscriptionsCreateOrUpdateForCustomTopicHybridConnectionDestination();
  eventSubscriptionsCreateOrUpdateForCustomTopicServiceBusQueueDestination();
  eventSubscriptionsCreateOrUpdateForCustomTopicServiceBusTopicDestination();
  eventSubscriptionsCreateOrUpdateForCustomTopicStorageQueueDestination();
  eventSubscriptionsCreateOrUpdateForCustomTopicWebhookDestination();
  eventSubscriptionsCreateOrUpdateForResource();
  eventSubscriptionsCreateOrUpdateForResourceGroup();
  eventSubscriptionsCreateOrUpdateForSubscription();
}

main().catch(console.error);
