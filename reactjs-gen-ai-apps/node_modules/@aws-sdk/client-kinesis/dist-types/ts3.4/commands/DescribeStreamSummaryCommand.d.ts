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
  DescribeStreamSummaryInput,
  DescribeStreamSummaryOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeStreamSummaryCommandInput
  extends DescribeStreamSummaryInput {}
export interface DescribeStreamSummaryCommandOutput
  extends DescribeStreamSummaryOutput,
    __MetadataBearer {}
export declare class DescribeStreamSummaryCommand extends $Command<
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: DescribeStreamSummaryCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeStreamSummaryCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStreamSummaryCommandInput,
    DescribeStreamSummaryCommandOutput
  >;
  private serialize;
  private deserialize;
}
