import * as Storage from 'aws-amplify/storage';
interface UseStorageURLParams {
    key: string;
    options?: Storage.GetUrlInput['options'];
    fallbackURL?: string;
    onStorageGetError?: (error: Error) => void;
}
export declare const useStorageURL: ({ key, options, fallbackURL, onStorageGetError, }: UseStorageURLParams) => string | undefined;
export {};
