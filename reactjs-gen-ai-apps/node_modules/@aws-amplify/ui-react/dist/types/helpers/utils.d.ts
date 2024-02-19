export declare const isDevelopment: () => boolean;
type ErrorWithMessage = {
    message: string;
};
export declare const isErrorWithMessage: (error: unknown) => error is ErrorWithMessage;
export declare const toErrorWithMessage: (maybeError: unknown) => ErrorWithMessage;
export declare const getErrorMessage: (error: unknown) => string;
export declare const getFormDataFromEvent: (event: React.FormEvent<HTMLFormElement>) => {
    [k: string]: FormDataEntryValue;
};
export {};
