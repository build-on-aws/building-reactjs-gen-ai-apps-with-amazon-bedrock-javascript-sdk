import { RetryOptions } from '../middleware/retry';
import { UserAgentOptions } from '../middleware/userAgent';
import { HttpRequest, HttpResponse } from '../types';
export declare const unauthenticatedHandler: (request: HttpRequest, options: UserAgentOptions & RetryOptions<HttpResponse> & import("../types").HttpTransferOptions) => Promise<HttpResponse>;
