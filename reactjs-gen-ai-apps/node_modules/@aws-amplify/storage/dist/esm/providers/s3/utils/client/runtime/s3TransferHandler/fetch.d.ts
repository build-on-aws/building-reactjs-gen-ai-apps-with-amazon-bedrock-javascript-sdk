import type { s3TransferHandler as s3BrowserTransferhandler } from './xhr';
/**
 * S3 transfer handler for node based on Node-fetch. On top of basic transfer handler, it also supports
 * x-amz-content-sha256 header. However, it does not support request&response process tracking like browser.
 *
 * @internal
 */
export declare const s3TransferHandler: typeof s3BrowserTransferhandler;
