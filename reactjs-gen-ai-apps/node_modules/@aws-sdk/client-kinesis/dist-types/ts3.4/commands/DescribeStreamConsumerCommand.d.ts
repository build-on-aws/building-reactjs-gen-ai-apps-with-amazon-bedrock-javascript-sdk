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
  DescribeStreamConsumerInput,
  DescribeStreamConsumerOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeStreamConsumerCommandInput
  extends DescribeStreamConsumerInput {}
export interface DescribeStreamConsumerCommandOutput
  extends DescribeStreamConsumerOutput,
    __MetadataBearer {}
export declare class DescribeStreamConsumerCommand extends $Command<
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: DescribeStreamConsumerCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeStreamConsumerCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStreamConsumerCommandInput,
    DescribeStreamConsumerCommandOutput
  >;
  private serialize;
  private deserialize;
}
