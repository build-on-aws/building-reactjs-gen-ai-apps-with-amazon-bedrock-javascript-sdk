import { Paginator } from "@smithy/types";
import {
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "../commands/ListStreamConsumersCommand";
import { KinesisPaginationConfiguration } from "./Interfaces";
export declare function paginateListStreamConsumers(
  config: KinesisPaginationConfiguration,
  input: ListStreamConsumersCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamConsumersCommandOutput>;
