import { Framework } from './types';
export declare const frameworkChangeObservers: (() => void)[];
export declare const detectFramework: () => Framework;
/**
 * @internal Setup observer callback that will be called everytime the framework changes
 */
export declare const observeFrameworkChanges: (fcn: () => void) => void;
export declare function clearCache(): void;
