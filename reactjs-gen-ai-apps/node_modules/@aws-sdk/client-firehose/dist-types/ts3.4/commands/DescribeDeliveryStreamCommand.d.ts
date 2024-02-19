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
import {
  DescribeDeliveryStreamInput,
  DescribeDeliveryStreamOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DescribeDeliveryStreamCommandInput
  extends DescribeDeliveryStreamInput {}
export interface DescribeDeliveryStreamCommandOutput
  extends DescribeDeliveryStreamOutput,
    __MetadataBearer {}
export declare class DescribeDeliveryStreamCommand extends $Command<
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: DescribeDeliveryStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DescribeDeliveryStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDeliveryStreamCommandInput,
    DescribeDeliveryStreamCommandOutput
  >;
  private serialize;
  private deserialize;
}
