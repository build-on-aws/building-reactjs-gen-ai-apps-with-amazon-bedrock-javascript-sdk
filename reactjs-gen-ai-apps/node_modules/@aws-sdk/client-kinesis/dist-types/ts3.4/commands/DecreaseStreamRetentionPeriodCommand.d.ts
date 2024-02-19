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
import { DecreaseStreamRetentionPeriodInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DecreaseStreamRetentionPeriodCommandInput
  extends DecreaseStreamRetentionPeriodInput {}
export interface DecreaseStreamRetentionPeriodCommandOutput
  extends __MetadataBearer {}
export declare class DecreaseStreamRetentionPeriodCommand extends $Command<
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: DecreaseStreamRetentionPeriodCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DecreaseStreamRetentionPeriodCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DecreaseStreamRetentionPeriodCommandInput,
    DecreaseStreamRetentionPeriodCommandOutput
  >;
  private serialize;
  private deserialize;
}
