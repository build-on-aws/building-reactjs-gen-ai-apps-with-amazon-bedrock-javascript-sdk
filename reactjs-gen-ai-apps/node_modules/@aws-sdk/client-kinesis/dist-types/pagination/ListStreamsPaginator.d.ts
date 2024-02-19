import { Paginator } from "@smithy/types";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KinesisPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListStreams(config: KinesisPaginationConfiguration, input: ListStreamsCommandInput, ...additionalArguments: any): Paginator<ListStreamsCommandOutput>;
