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
import { StopStreamEncryptionInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface StopStreamEncryptionCommandInput
  extends StopStreamEncryptionInput {}
export interface StopStreamEncryptionCommandOutput extends __MetadataBearer {}
export declare class StopStreamEncryptionCommand extends $Command<
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: StopStreamEncryptionCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: StopStreamEncryptionCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StopStreamEncryptionCommandInput,
    StopStreamEncryptionCommandOutput
  >;
  private serialize;
  private deserialize;
}
