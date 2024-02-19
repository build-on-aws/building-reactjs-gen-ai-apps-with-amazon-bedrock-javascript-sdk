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
  SubscribeToShardInput,
  SubscribeToShardOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface SubscribeToShardCommandInput extends SubscribeToShardInput {}
export interface SubscribeToShardCommandOutput
  extends SubscribeToShardOutput,
    __MetadataBearer {}
export declare class SubscribeToShardCommand extends $Command<
  SubscribeToShardCommandInput,
  SubscribeToShardCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: SubscribeToShardCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SubscribeToShardCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeToShardCommandInput, SubscribeToShardCommandOutput>;
  private serialize;
  private deserialize;
}
