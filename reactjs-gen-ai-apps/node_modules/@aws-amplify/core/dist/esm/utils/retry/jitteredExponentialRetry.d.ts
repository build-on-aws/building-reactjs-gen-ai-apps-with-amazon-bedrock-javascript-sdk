/**
 * @private
 * Internal use of Amplify only
 */
export declare const jitteredExponentialRetry: <T>(functionToRetry: (...args: any[]) => T, args: any[], maxDelayMs?: number, onTerminate?: Promise<void>) => Promise<T>;
