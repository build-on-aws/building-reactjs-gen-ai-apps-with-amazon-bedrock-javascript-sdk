import { ErrorParser, HttpResponse } from '@aws-amplify/core/internals/aws-client-utils';
export declare const parseXmlError: ErrorParser;
export declare const parseXmlBody: (response: HttpResponse) => Promise<any>;
