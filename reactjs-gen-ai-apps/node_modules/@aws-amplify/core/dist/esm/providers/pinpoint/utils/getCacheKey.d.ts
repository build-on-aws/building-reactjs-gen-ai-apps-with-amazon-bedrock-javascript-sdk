import { SupportedCategory } from '../types';
/**
 * Returns a unique cache key for a particular category/appId combination.
 *
 * @internal
 */
export declare const getCacheKey: (appId: string, category: SupportedCategory) => string;
