import { DelayFunction } from '../../types';
/**
 * @private
 * Internal use of Amplify only
 */
export declare function retry<T>(functionToRetry: (...args: any[]) => T, args: any[], delayFn: DelayFunction, onTerminate?: Promise<void>): Promise<T>;
