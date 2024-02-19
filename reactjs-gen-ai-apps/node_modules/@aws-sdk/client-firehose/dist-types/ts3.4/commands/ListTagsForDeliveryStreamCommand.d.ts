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
  ListTagsForDeliveryStreamInput,
  ListTagsForDeliveryStreamOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListTagsForDeliveryStreamCommandInput
  extends ListTagsForDeliveryStreamInput {}
export interface ListTagsForDeliveryStreamCommandOutput
  extends ListTagsForDeliveryStreamOutput,
    __MetadataBearer {}
export declare class ListTagsForDeliveryStreamCommand extends $Command<
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: ListTagsForDeliveryStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListTagsForDeliveryStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListTagsForDeliveryStreamCommandInput,
    ListTagsForDeliveryStreamCommandOutput
  >;
  private serialize;
  private deserialize;
}
