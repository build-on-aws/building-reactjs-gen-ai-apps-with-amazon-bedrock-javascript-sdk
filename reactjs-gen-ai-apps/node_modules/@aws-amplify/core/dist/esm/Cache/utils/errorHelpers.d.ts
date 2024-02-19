import { AssertionFunction } from '../../types';
export declare enum CacheErrorCode {
    NoCacheItem = "NoCacheItem",
    NullNextNode = "NullNextNode",
    NullPreviousNode = "NullPreviousNode"
}
export declare const assert: AssertionFunction<CacheErrorCode>;
