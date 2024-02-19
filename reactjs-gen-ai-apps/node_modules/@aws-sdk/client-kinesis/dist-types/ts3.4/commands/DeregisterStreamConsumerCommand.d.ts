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
import { DeregisterStreamConsumerInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeregisterStreamConsumerCommandInput
  extends DeregisterStreamConsumerInput {}
export interface DeregisterStreamConsumerCommandOutput
  extends __MetadataBearer {}
export declare class DeregisterStreamConsumerCommand extends $Command<
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: DeregisterStreamConsumerCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeregisterStreamConsumerCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeregisterStreamConsumerCommandInput,
    DeregisterStreamConsumerCommandOutput
  >;
  private serialize;
  private deserialize;
}
