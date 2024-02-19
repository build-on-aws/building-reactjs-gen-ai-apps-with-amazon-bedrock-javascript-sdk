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
  ListDeliveryStreamsInput,
  ListDeliveryStreamsOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface ListDeliveryStreamsCommandInput
  extends ListDeliveryStreamsInput {}
export interface ListDeliveryStreamsCommandOutput
  extends ListDeliveryStreamsOutput,
    __MetadataBearer {}
export declare class ListDeliveryStreamsCommand extends $Command<
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: ListDeliveryStreamsCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: ListDeliveryStreamsCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput>;
  private serialize;
  private deserialize;
}
