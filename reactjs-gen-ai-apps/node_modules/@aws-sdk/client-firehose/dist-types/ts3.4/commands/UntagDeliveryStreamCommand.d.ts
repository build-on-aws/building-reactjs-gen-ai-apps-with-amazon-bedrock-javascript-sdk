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
  UntagDeliveryStreamInput,
  UntagDeliveryStreamOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UntagDeliveryStreamCommandInput
  extends UntagDeliveryStreamInput {}
export interface UntagDeliveryStreamCommandOutput
  extends UntagDeliveryStreamOutput,
    __MetadataBearer {}
export declare class UntagDeliveryStreamCommand extends $Command<
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: UntagDeliveryStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UntagDeliveryStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput>;
  private serialize;
  private deserialize;
}
