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
import { UpdateStreamModeInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface UpdateStreamModeCommandInput extends UpdateStreamModeInput {}
export interface UpdateStreamModeCommandOutput extends __MetadataBearer {}
export declare class UpdateStreamModeCommand extends $Command<
  UpdateStreamModeCommandInput,
  UpdateStreamModeCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: UpdateStreamModeCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: UpdateStreamModeCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateStreamModeCommandInput, UpdateStreamModeCommandOutput>;
  private serialize;
  private deserialize;
}
