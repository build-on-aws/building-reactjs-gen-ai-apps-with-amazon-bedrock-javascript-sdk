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
import { PutRecordsInput, PutRecordsOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutRecordsCommandInput extends PutRecordsInput {}
export interface PutRecordsCommandOutput
  extends PutRecordsOutput,
    __MetadataBearer {}
export declare class PutRecordsCommand extends $Command<
  PutRecordsCommandInput,
  PutRecordsCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: PutRecordsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutRecordsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordsCommandInput, PutRecordsCommandOutput>;
  private serialize;
  private deserialize;
}
