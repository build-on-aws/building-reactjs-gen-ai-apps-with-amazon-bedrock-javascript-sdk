import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  FirehoseClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../FirehoseClient";
import { PutRecordBatchInput, PutRecordBatchOutput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface PutRecordBatchCommandInput extends PutRecordBatchInput {}
export interface PutRecordBatchCommandOutput
  extends PutRecordBatchOutput,
    __MetadataBearer {}
export declare class PutRecordBatchCommand extends $Command<
  PutRecordBatchCommandInput,
  PutRecordBatchCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: PutRecordBatchCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutRecordBatchCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordBatchCommandInput, PutRecordBatchCommandOutput>;
  private serialize;
  private deserialize;
}
