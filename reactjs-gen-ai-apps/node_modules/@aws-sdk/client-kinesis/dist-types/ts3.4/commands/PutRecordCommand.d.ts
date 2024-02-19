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
import { PutRecordInput, PutRecordOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutRecordCommandInput extends PutRecordInput {}
export interface PutRecordCommandOutput
  extends PutRecordOutput,
    __MetadataBearer {}
export declare class PutRecordCommand extends $Command<
  PutRecordCommandInput,
  PutRecordCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: PutRecordCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutRecordCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordCommandInput, PutRecordCommandOutput>;
  private serialize;
  private deserialize;
}
