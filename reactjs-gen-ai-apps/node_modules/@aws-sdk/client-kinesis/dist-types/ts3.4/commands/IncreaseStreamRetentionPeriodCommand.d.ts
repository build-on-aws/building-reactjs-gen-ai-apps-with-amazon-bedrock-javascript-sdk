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
import { IncreaseStreamRetentionPeriodInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface IncreaseStreamRetentionPeriodCommandInput
  extends IncreaseStreamRetentionPeriodInput {}
export interface IncreaseStreamRetentionPeriodCommandOutput
  extends __MetadataBearer {}
export declare class IncreaseStreamRetentionPeriodCommand extends $Command<
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: IncreaseStreamRetentionPeriodCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: IncreaseStreamRetentionPeriodCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    IncreaseStreamRetentionPeriodCommandInput,
    IncreaseStreamRetentionPeriodCommandOutput
  >;
  private serialize;
  private deserialize;
}
