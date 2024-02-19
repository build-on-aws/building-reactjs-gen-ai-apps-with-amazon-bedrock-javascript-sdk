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
  CreateDeliveryStreamInput,
  CreateDeliveryStreamOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface CreateDeliveryStreamCommandInput
  extends CreateDeliveryStreamInput {}
export interface CreateDeliveryStreamCommandOutput
  extends CreateDeliveryStreamOutput,
    __MetadataBearer {}
export declare class CreateDeliveryStreamCommand extends $Command<
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: CreateDeliveryStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: CreateDeliveryStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateDeliveryStreamCommandInput,
    CreateDeliveryStreamCommandOutput
  >;
  private serialize;
  private deserialize;
}
