import { AmplifyError } from '../../errors';
export declare class AmplifyServerContextError extends AmplifyError {
    constructor({ message, recoverySuggestion, underlyingError, }: {
        message: string;
        recoverySuggestion?: string;
        underlyingError?: Error;
    });
}
