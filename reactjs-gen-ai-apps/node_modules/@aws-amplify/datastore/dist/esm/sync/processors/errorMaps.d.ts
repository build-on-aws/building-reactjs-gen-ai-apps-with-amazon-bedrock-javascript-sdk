import { ErrorType } from '../../types';
export type ErrorMap = Partial<{
    [key in ErrorType]: (error: Error) => boolean;
}>;
export declare const mutationErrorMap: ErrorMap;
export declare const subscriptionErrorMap: ErrorMap;
export declare const syncErrorMap: ErrorMap;
export declare function getMutationErrorType(error: Error): ErrorType;
export declare function getSubscriptionErrorType(error: Error): ErrorType;
export declare function getSyncErrorType(error: Error): ErrorType;
/**
 * Categorizes an error with a broad error type, intended to make
 * customer error handling code simpler.
 * @param errorMap Error names and a list of patterns that indicate them (each pattern as a regex or function)
 * @param error The underying error to categorize.
 */
export declare function mapErrorToType(errorMap: ErrorMap, error: Error): ErrorType;
