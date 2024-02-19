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
import { RemoveTagsFromStreamInput } from "../models/models_0";
export { __MetadataBearer, $Command };
export interface RemoveTagsFromStreamCommandInput
  extends RemoveTagsFromStreamInput {}
export interface RemoveTagsFromStreamCommandOutput extends __MetadataBearer {}
export declare class RemoveTagsFromStreamCommand extends $Command<
  RemoveTagsFromStreamCommandInput,
  RemoveTagsFromStreamCommandOutput,
  KinesisClientResolvedConfig
> {
  readonly input: RemoveTagsFromStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: RemoveTagsFromStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RemoveTagsFromStreamCommandInput,
    RemoveTagsFromStreamCommandOutput
  >;
  private serialize;
  private deserialize;
}
