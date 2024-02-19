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
  RegisterStreamConsumerInput,
  RegisterStreamConsumerOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface RegisterStreamConsumerCommandInput
  extends RegisterStreamConsumerInput {}
export interface RegisterStreamConsumerCommandOutput
  extends RegisterStreamConsumerOutput,
    __MetadataBearer {}
export declare class RegisterStreamConsumerCommand extends $Command<
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: RegisterStreamConsumerCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RegisterStreamConsumerCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RegisterStreamConsumerCommandInput,
    RegisterStreamConsumerCommandOutput
  >;
  private serialize;
  private deserialize;
}
