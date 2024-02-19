import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  KinesisClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisClient";
import {
  ListStreamConsumersInput,
  ListStreamConsumersOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListStreamConsumersCommandInput
  extends ListStreamConsumersInput {}
export interface ListStreamConsumersCommandOutput
  extends ListStreamConsumersOutput,
    __MetadataBearer {}
export declare class ListStreamConsumersCommand extends $Command<
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: ListStreamConsumersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListStreamConsumersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput>;
  private serialize;
  private deserialize;
}
