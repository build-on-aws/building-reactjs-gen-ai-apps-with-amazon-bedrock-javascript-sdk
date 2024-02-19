/**
 * Slice a collection based on page index (starting at 1)
 */
export declare const getItemsAtPage: <T>(items: T[], page: number, itemsPerPage: number) => T[];
/**
 * Recursively find a keyword within an object (case insensitive)
 */
export declare const itemHasText: (item: unknown, text: string) => boolean;
/**
 * Computes the amount of available pages
 */
export declare const getPageCount: (totalItems: number, itemsPerPage: number) => number;
