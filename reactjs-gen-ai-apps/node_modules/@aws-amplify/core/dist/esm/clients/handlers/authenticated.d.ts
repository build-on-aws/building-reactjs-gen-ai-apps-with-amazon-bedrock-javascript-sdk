import { RetryOptions } from '../middleware/retry';
import { SigningOptions } from '../middleware/signing';
import { UserAgentOptions } from '../middleware/userAgent';
import { HttpRequest, HttpResponse } from '../types';
export declare const authenticatedHandler: (request: HttpRequest, options: UserAgentOptions & RetryOptions<HttpResponse> & SigningOptions & import("../types").HttpTransferOptions) => Promise<HttpResponse>;
