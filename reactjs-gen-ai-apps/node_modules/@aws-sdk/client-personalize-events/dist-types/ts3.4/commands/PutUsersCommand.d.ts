import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import { PutUsersRequest } from "../models/models_0";
import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
export { __MetadataBearer, $Command };
export interface PutUsersCommandInput extends PutUsersRequest {}
export interface PutUsersCommandOutput extends __MetadataBearer {}
export declare class PutUsersCommand extends $Command<
  PutUsersCommandInput,
  PutUsersCommandOutput,
  PersonalizeEventsClientResolvedConfig
> {
  readonly input: PutUsersCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: PutUsersCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutUsersCommandInput, PutUsersCommandOutput>;
  private serialize;
  private deserialize;
}
