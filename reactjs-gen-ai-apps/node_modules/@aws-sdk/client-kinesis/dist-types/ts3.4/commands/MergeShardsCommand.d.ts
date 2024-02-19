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
import { MergeShardsInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface MergeShardsCommandInput extends MergeShardsInput {}
export interface MergeShardsCommandOutput extends __MetadataBearer {}
export declare class MergeShardsCommand extends $Command<
  MergeShardsCommandInput,
  MergeShardsCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: MergeShardsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: MergeShardsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<MergeShardsCommandInput, MergeShardsCommandOutput>;
  private serialize;
  private deserialize;
}
