import { CookieStorageData, KeyValueStorageInterface, SameSite } from '../types';
export declare class CookieStorage implements KeyValueStorageInterface {
    path: string;
    domain?: string;
    expires?: number;
    sameSite?: SameSite;
    secure?: boolean;
    constructor(data?: CookieStorageData);
    setItem(key: string, value: string): Promise<void>;
    getItem(key: string): Promise<string | null>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
    private getData;
}
