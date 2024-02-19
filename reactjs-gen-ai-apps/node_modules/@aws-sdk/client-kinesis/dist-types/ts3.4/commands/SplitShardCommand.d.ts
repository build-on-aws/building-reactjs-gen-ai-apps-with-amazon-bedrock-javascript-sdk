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
import { SplitShardInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface SplitShardCommandInput extends SplitShardInput {}
export interface SplitShardCommandOutput extends __MetadataBearer {}
export declare class SplitShardCommand extends $Command<
  SplitShardCommandInput,
  SplitShardCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: SplitShardCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: SplitShardCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SplitShardCommandInput, SplitShardCommandOutput>;
  private serialize;
  private deserialize;
}
