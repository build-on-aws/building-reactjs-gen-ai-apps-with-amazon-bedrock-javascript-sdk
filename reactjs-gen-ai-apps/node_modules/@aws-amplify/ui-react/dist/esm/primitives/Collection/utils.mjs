import { strHasLength } from '../shared/utils.mjs';

/**
 * Slice a collection based on page index (starting at 1)
 */
const getItemsAtPage = (items, page, itemsPerPage) => {
    if (page < 1 || itemsPerPage < 1) {
        return [];
    }
    const startIndex = (page - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
};
/**
 * Recursively find a keyword within an object (case insensitive)
 */
const itemHasText = (item, text) => {
    if (strHasLength(item)) {
        return item.toLowerCase().includes(text.toLowerCase());
    }
    if (typeof item === 'object' && item !== null) {
        return Object.values(item).some((subItem) => itemHasText(subItem, text));
    }
    return false;
};
/**
 * Computes the amount of available pages
 */
const getPageCount = (totalItems, itemsPerPage) => Math.ceil(totalItems / itemsPerPage);

export { getItemsAtPage, getPageCount, itemHasText };
