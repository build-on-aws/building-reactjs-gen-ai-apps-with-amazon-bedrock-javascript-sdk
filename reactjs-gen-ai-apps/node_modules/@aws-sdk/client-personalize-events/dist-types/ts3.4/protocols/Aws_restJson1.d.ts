import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import {
  PutEventsCommandInput,
  PutEventsCommandOutput,
} from "../commands/PutEventsCommand";
import {
  PutItemsCommandInput,
  PutItemsCommandOutput,
} from "../commands/PutItemsCommand";
import {
  PutUsersCommandInput,
  PutUsersCommandOutput,
} from "../commands/PutUsersCommand";
export declare const se_PutEventsCommand: (
  input: PutEventsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutItemsCommand: (
  input: PutItemsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutUsersCommand: (
  input: PutUsersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_PutEventsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutEventsCommandOutput>;
export declare const de_PutItemsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutItemsCommandOutput>;
export declare const de_PutUsersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutUsersCommandOutput>;
