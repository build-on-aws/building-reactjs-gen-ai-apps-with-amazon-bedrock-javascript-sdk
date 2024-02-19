/**
 * @internal
 */
export declare class InMemoryStorage implements Storage {
    storage: Map<string, string>;
    get length(): number;
    key(index: number): string | null;
    setItem(key: string, value: string): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
    clear(): void;
}
