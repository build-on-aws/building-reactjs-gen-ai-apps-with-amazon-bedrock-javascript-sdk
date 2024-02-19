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
  DeleteDeliveryStreamInput,
  DeleteDeliveryStreamOutput,
} from "../models/models_0";
export { __MetadataBearer, $Command };
export interface DeleteDeliveryStreamCommandInput
  extends DeleteDeliveryStreamInput {}
export interface DeleteDeliveryStreamCommandOutput
  extends DeleteDeliveryStreamOutput,
    __MetadataBearer {}
export declare class DeleteDeliveryStreamCommand extends $Command<
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  readonly input: DeleteDeliveryStreamCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: DeleteDeliveryStreamCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteDeliveryStreamCommandInput,
    DeleteDeliveryStreamCommandOutput
  >;
  private serialize;
  private deserialize;
}
