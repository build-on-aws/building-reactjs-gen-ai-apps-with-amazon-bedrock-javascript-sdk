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
  StartDeliveryStreamEncryptionInput,
  StartDeliveryStreamEncryptionOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface StartDeliveryStreamEncryptionCommandInput
  extends StartDeliveryStreamEncryptionInput {}
export interface StartDeliveryStreamEncryptionCommandOutput
  extends StartDeliveryStreamEncryptionOutput,
    __MetadataBearer {}
export declare class StartDeliveryStreamEncryptionCommand extends $Command<
  StartDeliveryStreamEncryptionCommandInput,
  StartDeliveryStreamEncryptionCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: StartDeliveryStreamEncryptionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StartDeliveryStreamEncryptionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartDeliveryStreamEncryptionCommandInput,
    StartDeliveryStreamEncryptionCommandOutput
  >;
  private serialize;
  private deserialize;
}
