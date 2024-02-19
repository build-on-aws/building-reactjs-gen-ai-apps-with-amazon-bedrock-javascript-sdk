import { SupportedCategory } from '../types';
/**
 * Writes an endpoint id to a long-lived cache.
 *
 * @internal
 */
export declare const cacheEndpointId: (appId: string, category: SupportedCategory, endpointId: string) => Promise<void>;
