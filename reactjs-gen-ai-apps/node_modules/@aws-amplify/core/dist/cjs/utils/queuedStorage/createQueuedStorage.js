'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQueuedStorage = void 0;
const constants_1 = require("./constants");
const getAddItemBytesSize_1 = require("./getAddItemBytesSize");
const createQueuedStorage = () => {
    let currentBytesSize = 0;
    let error;
    const openDBPromise = new Promise((resolve, reject) => {
        const { indexedDB } = window;
        const openRequest = indexedDB.open(constants_1.DATABASE_NAME, 1);
        openRequest.onupgradeneeded = () => {
            const db = openRequest.result;
            if (!db.objectStoreNames.contains(constants_1.STORE_NAME)) {
                db.createObjectStore(constants_1.STORE_NAME, {
                    keyPath: 'id',
                    autoIncrement: true,
                });
            }
        };
        openRequest.onsuccess = async () => {
            const db = openRequest.result;
            const transaction = db.transaction(constants_1.STORE_NAME, 'readonly');
            const request = transaction.objectStore(constants_1.STORE_NAME).getAll();
            await promisifyIDBRequest(request);
            for (const item of request.result) {
                currentBytesSize += item.bytesSize;
            }
            resolve(openRequest.result);
        };
        openRequest.onerror = () => {
            reject(openRequest.error);
        };
    }).catch(err => {
        error = err;
        return undefined;
    });
    const getDB = async () => {
        const db = await openDBPromise;
        if (!db) {
            throw error;
        }
        return db;
    };
    const getStore = async () => {
        const db = await getDB();
        const transaction = db.transaction(constants_1.STORE_NAME, 'readwrite');
        return transaction.objectStore(constants_1.STORE_NAME);
    };
    const _peek = async (n) => {
        const store = await getStore();
        const request = store.getAll(undefined, n);
        await promisifyIDBRequest(request);
        return request.result.map(item => item);
    };
    return {
        async add(item, { dequeueBeforeEnqueue } = { dequeueBeforeEnqueue: false }) {
            if (dequeueBeforeEnqueue) {
                const itemsToDelete = await this.peek(1);
                await this.delete(itemsToDelete);
            }
            const store = await getStore();
            const itemBytesSize = (0, getAddItemBytesSize_1.getAddItemBytesSize)(item);
            const queuedItem = {
                ...item,
                bytesSize: itemBytesSize,
            };
            const request = store.add(queuedItem);
            await promisifyIDBRequest(request);
            currentBytesSize += itemBytesSize;
        },
        async peek(n) {
            return _peek(n);
        },
        async peekAll() {
            return _peek();
        },
        async delete(items) {
            if (!items.length) {
                return;
            }
            const store = await getStore();
            // delete by range to improve performance
            const keyRangesToDelete = findRanges(items
                .map(item => item.id)
                .filter((id) => id !== undefined)).map(([lower, upper]) => IDBKeyRange.bound(lower, upper));
            await Promise.all(keyRangesToDelete.map(range => promisifyIDBRequest(store.delete(range))));
            for (const item of items) {
                currentBytesSize -= item.bytesSize;
            }
        },
        async clear() {
            const store = await getStore();
            await store.clear();
            currentBytesSize = 0;
        },
        isFull(maxBytesSizeInMiB) {
            return currentBytesSize >= maxBytesSizeInMiB * 1024 * 1024;
        },
    };
};
exports.createQueuedStorage = createQueuedStorage;
const promisifyIDBRequest = (request) => new Promise((resolve, reject) => {
    request.onsuccess = () => {
        resolve();
    };
    request.onerror = () => {
        reject(request.error);
    };
});
const findRanges = (input) => {
    const nums = input.concat().sort((a, b) => a - b);
    const result = [];
    let rangeLength = 1;
    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] - nums[i - 1] !== 1) {
            if (rangeLength === 1) {
                result.push([nums[i - rangeLength], nums[i - rangeLength]]);
            }
            else {
                result.push([nums[i - rangeLength], nums[i - 1]]);
            }
            rangeLength = 1;
        }
        else {
            rangeLength += 1;
        }
    }
    return result;
};
//# sourceMappingURL=createQueuedStorage.js.map
