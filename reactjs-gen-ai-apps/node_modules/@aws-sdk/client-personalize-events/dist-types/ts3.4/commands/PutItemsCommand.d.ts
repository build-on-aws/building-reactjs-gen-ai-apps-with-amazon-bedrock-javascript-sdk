import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { PutItemsRequest } from "../models/models_0";
import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
export { __MetadataBearer, $Command };
export interface PutItemsCommandInput extends PutItemsRequest {}
export interface PutItemsCommandOutput extends __MetadataBearer {}
export declare class PutItemsCommand extends $Command<
  PutItemsCommandInput,
  PutItemsCommandOutput,
  PersonalizeEventsClientResolvedConfig
> {
  readonly input: PutItemsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutItemsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutItemsCommandInput, PutItemsCommandOutput>;
  private serialize;
  private deserialize;
}
