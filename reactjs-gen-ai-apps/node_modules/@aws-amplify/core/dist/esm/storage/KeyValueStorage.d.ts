import { KeyValueStorageInterface } from '../types';
/**
 * @internal
 */
export declare class KeyValueStorage implements KeyValueStorageInterface {
    storage?: Storage;
    constructor(storage?: Storage);
    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    setItem(key: string, value: string): Promise<void>;
    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    getItem(key: string): Promise<string | null>;
    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    removeItem(key: string): Promise<void>;
    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    clear(): Promise<void>;
}
