import { AmplifyErrorParams } from '@aws-amplify/core/internals/utils';
import { RestApiError } from './RestApiError';
/**
 * Internal-only class for CanceledError.
 *
 * @internal
 */
export declare class CanceledError extends RestApiError {
    constructor(params?: Partial<AmplifyErrorParams>);
}
/**
 * Check if an error is caused by user calling `cancel()` in REST API.
 *
 * @note This function works **ONLY** for errors thrown by REST API. For GraphQL APIs, use `client.isCancelError(error)`
 *   instead. `client` is generated from  `generateClient()` API from `aws-amplify/api`.
 */
export declare const isCancelError: (error: unknown) => error is CanceledError;
