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
  StopDeliveryStreamEncryptionInput,
  StopDeliveryStreamEncryptionOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface StopDeliveryStreamEncryptionCommandInput
  extends StopDeliveryStreamEncryptionInput {}
export interface StopDeliveryStreamEncryptionCommandOutput
  extends StopDeliveryStreamEncryptionOutput,
    __MetadataBearer {}
export declare class StopDeliveryStreamEncryptionCommand extends $Command<
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: StopDeliveryStreamEncryptionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StopDeliveryStreamEncryptionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StopDeliveryStreamEncryptionCommandInput,
    StopDeliveryStreamEncryptionCommandOutput
  >;
  private serialize;
  private deserialize;
}
