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
  EnableEnhancedMonitoringInput,
  EnhancedMonitoringOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface EnableEnhancedMonitoringCommandInput
  extends EnableEnhancedMonitoringInput {}
export interface EnableEnhancedMonitoringCommandOutput
  extends EnhancedMonitoringOutput,
    __MetadataBearer {}
export declare class EnableEnhancedMonitoringCommand extends $Command<
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: EnableEnhancedMonitoringCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: EnableEnhancedMonitoringCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EnableEnhancedMonitoringCommandInput,
    EnableEnhancedMonitoringCommandOutput
  >;
  private serialize;
  private deserialize;
}
