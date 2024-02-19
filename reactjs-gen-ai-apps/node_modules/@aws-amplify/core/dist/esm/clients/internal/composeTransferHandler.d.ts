import { Middleware, TransferHandler, Request as RequestBase, Response as ResponseBase } from '../types';
/**
 * Compose a transfer handler with a core transfer handler and a list of middleware.
 * @param coreHandler Core transfer handler
 * @param middleware	List of middleware
 * @returns A transfer handler whose option type is the union of the core
 * 	transfer handler's option type and the middleware's option type.
 * @internal
 */
export declare const composeTransferHandler: <MiddlewareOptionsArr extends any[] = [], Request_1 extends RequestBase = RequestBase, Response_1 extends ResponseBase = ResponseBase, CoreHandler extends TransferHandler<Request_1, Response_1, any> = TransferHandler<Request_1, Response_1, {}>>(coreHandler: CoreHandler, middleware: OptionToMiddleware<Request_1, Response_1, MiddlewareOptionsArr>) => (request: Request_1, options: MergeNoConflictKeys<[...MiddlewareOptionsArr, InferOptionTypeFromTransferHandler<CoreHandler>]>) => Promise<Response_1>;
/**
 * Type to convert a middleware option type to a middleware type with the given
 * option type.
 */
type OptionToMiddleware<Request extends RequestBase, Response extends ResponseBase, Options extends any[]> = Options extends [] ? [] : Options extends [infer LastOption] ? [Middleware<Request, Response, LastOption>] : Options extends [infer FirstOption, ...infer RestOptions] ? [
    Middleware<Request, Response, FirstOption>,
    ...OptionToMiddleware<Request, Response, RestOptions>
] : never;
/**
 * Type to intersect multiple types if they have no conflict keys.
 */
type MergeNoConflictKeys<Options extends any[]> = Options extends [
    infer OnlyOption
] ? OnlyOption : Options extends [infer FirstOption, infer SecondOption] ? FirstOption & SecondOption : Options extends [infer FirstOption, ...infer RestOptions] ? FirstOption & MergeNoConflictKeys<RestOptions> : never;
/**
 * Type to infer the option type of a transfer handler type.
 */
type InferOptionTypeFromTransferHandler<T extends TransferHandler<any, any, any>> = Parameters<T>[1];
export {};
