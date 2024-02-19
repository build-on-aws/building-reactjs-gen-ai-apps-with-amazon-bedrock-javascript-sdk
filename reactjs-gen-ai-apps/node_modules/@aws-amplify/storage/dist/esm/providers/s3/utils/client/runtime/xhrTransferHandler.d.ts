import { HttpRequest, HttpResponse, TransferHandler } from '@aws-amplify/core/internals/aws-client-utils';
import { TransferProgressEvent } from '../../../../../types/common';
/**
 * @internal
 */
export interface XhrTransferHandlerOptions {
    responseType: 'text' | 'blob';
    abortSignal?: AbortSignal;
    onDownloadProgress?: (event: TransferProgressEvent) => void;
    onUploadProgress?: (event: TransferProgressEvent) => void;
}
/**
 * Base transfer handler implementation using XMLHttpRequest to support upload and download progress events.
 *
 * @param request - The request object.
 * @param options - The request options.
 * @returns A promise that will be resolved with the response object.
 *
 * @internal
 */
export declare const xhrTransferHandler: TransferHandler<HttpRequest, HttpResponse, XhrTransferHandlerOptions>;
