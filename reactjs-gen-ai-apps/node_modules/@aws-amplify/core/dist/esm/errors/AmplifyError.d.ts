import { AmplifyErrorParams } from '../types/errors';
export declare class AmplifyError extends Error {
    underlyingError?: Error | unknown;
    recoverySuggestion?: string;
    /**
     *  Constructs an AmplifyError.
     *
     * @param message text that describes the main problem.
     * @param underlyingError the underlying cause of the error.
     * @param recoverySuggestion suggestion to recover from the error.
     *
     */
    constructor({ message, name, recoverySuggestion, underlyingError, }: AmplifyErrorParams);
}
