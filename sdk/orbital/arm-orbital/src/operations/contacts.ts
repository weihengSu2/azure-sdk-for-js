/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Contacts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureOrbital } from "../azureOrbital";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Contact,
  ContactsListNextOptionalParams,
  ContactsListOptionalParams,
  ContactsListResponse,
  ContactsGetOptionalParams,
  ContactsGetResponse,
  ContactsCreateOptionalParams,
  ContactsCreateResponse,
  ContactsDeleteOptionalParams,
  ContactsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Contacts operations. */
export class ContactsImpl implements Contacts {
  private readonly client: AzureOrbital;

  /**
   * Initialize a new instance of the class Contacts class.
   * @param client Reference to the service client
   */
  constructor(client: AzureOrbital) {
    this.client = client;
  }

  /**
   * Returns list of contacts by spacecraftName
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    spacecraftName: string,
    options?: ContactsListOptionalParams
  ): PagedAsyncIterableIterator<Contact> {
    const iter = this.listPagingAll(resourceGroupName, spacecraftName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          spacecraftName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    spacecraftName: string,
    options?: ContactsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Contact[]> {
    let result: ContactsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, spacecraftName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        spacecraftName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    spacecraftName: string,
    options?: ContactsListOptionalParams
  ): AsyncIterableIterator<Contact> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      spacecraftName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns list of contacts by spacecraftName
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    spacecraftName: string,
    options?: ContactsListOptionalParams
  ): Promise<ContactsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spacecraftName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the specified contact in a specified resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param contactName Contact Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    options?: ContactsGetOptionalParams
  ): Promise<ContactsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spacecraftName, contactName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a contact.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param contactName Contact Name
   * @param parameters The parameters to provide for the created contact.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    parameters: Contact,
    options?: ContactsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ContactsCreateResponse>,
      ContactsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ContactsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, spacecraftName, contactName, parameters, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a contact.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param contactName Contact Name
   * @param parameters The parameters to provide for the created contact.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    parameters: Contact,
    options?: ContactsCreateOptionalParams
  ): Promise<ContactsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      spacecraftName,
      contactName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a specified contact
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param contactName Contact Name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    options?: ContactsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, spacecraftName, contactName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a specified contact
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param contactName Contact Name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    spacecraftName: string,
    contactName: string,
    options?: ContactsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      spacecraftName,
      contactName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spacecraftName Spacecraft ID
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    spacecraftName: string,
    nextLink: string,
    options?: ContactsListNextOptionalParams
  ): Promise<ContactsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spacecraftName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContactListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skiptoken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts/{contactName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Contact
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName,
    Parameters.contactName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts/{contactName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Contact
    },
    201: {
      bodyMapper: Mappers.Contact
    },
    202: {
      bodyMapper: Mappers.Contact
    },
    204: {
      bodyMapper: Mappers.Contact
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName,
    Parameters.contactName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts/{contactName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName,
    Parameters.contactName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContactListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spacecraftName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
