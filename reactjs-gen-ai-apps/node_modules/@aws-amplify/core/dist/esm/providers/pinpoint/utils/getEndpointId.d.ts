import { SupportedCategory } from '../types';
/**
 * Returns an endpoint id from cache or `undefined` if not found.
 *
 * @internal
 */
export declare const getEndpointId: (appId: string, category: SupportedCategory) => Promise<string | undefined>;
