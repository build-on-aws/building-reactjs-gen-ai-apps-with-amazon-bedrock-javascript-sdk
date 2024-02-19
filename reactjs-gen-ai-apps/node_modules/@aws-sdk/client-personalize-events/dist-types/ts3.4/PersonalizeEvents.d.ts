import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
import {
  PutEventsCommandInput,
  PutEventsCommandOutput,
} from "./commands/PutEventsCommand";
import {
  PutItemsCommandInput,
  PutItemsCommandOutput,
} from "./commands/PutItemsCommand";
import {
  PutUsersCommandInput,
  PutUsersCommandOutput,
} from "./commands/PutUsersCommand";
import { PersonalizeEventsClient } from "./PersonalizeEventsClient";
export interface PersonalizeEvents {
  putEvents(
    args: PutEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEventsCommandOutput>;
  putEvents(
    args: PutEventsCommandInput,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putEvents(
    args: PutEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEventsCommandOutput) => void
  ): void;
  putItems(
    args: PutItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutItemsCommandOutput>;
  putItems(
    args: PutItemsCommandInput,
    cb: (err: any, data?: PutItemsCommandOutput) => void
  ): void;
  putItems(
    args: PutItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutItemsCommandOutput) => void
  ): void;
  putUsers(
    args: PutUsersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUsersCommandOutput>;
  putUsers(
    args: PutUsersCommandInput,
    cb: (err: any, data?: PutUsersCommandOutput) => void
  ): void;
  putUsers(
    args: PutUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUsersCommandOutput) => void
  ): void;
}
export declare class PersonalizeEvents
  extends PersonalizeEventsClient
  implements PersonalizeEvents {}
