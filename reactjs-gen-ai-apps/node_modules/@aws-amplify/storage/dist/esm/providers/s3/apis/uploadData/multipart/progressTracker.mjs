// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Track the progress from multiple concurrent uploads, and invoke the onProgress callback.
 *
 * @internal
 */
const getConcurrentUploadsProgressTracker = ({ size, onProgress, }) => {
    const transferredBytesPerListener = [];
    const getTransferredBytes = () => transferredBytesPerListener.reduce((acc, transferredBytes) => acc + transferredBytes, 0);
    return {
        getOnProgressListener: () => {
            transferredBytesPerListener.push(0);
            const listenerIndex = transferredBytesPerListener.length - 1;
            return (event) => {
                const { transferredBytes } = event;
                transferredBytesPerListener[listenerIndex] = transferredBytes;
                onProgress?.({
                    transferredBytes: getTransferredBytes(),
                    totalBytes: size,
                });
            };
        },
    };
};

export { getConcurrentUploadsProgressTracker };
//# sourceMappingURL=progressTracker.mjs.map
