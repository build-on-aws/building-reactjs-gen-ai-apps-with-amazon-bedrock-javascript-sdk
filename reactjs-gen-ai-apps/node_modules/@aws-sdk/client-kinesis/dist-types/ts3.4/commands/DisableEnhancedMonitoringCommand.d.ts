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
  DisableEnhancedMonitoringInput,
  EnhancedMonitoringOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DisableEnhancedMonitoringCommandInput
  extends DisableEnhancedMonitoringInput {}
export interface DisableEnhancedMonitoringCommandOutput
  extends EnhancedMonitoringOutput,
    __MetadataBearer {}
export declare class DisableEnhancedMonitoringCommand extends $Command<
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: DisableEnhancedMonitoringCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DisableEnhancedMonitoringCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DisableEnhancedMonitoringCommandInput,
    DisableEnhancedMonitoringCommandOutput
  >;
  private serialize;
  private deserialize;
}
