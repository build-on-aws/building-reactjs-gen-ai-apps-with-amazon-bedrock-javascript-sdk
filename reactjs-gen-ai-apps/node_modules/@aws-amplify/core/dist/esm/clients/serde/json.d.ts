import { ErrorParser, HttpResponse } from '../types';
/**
 * Utility functions for serializing and deserializing of JSON protocol in general(including: REST-JSON, JSON-RPC, etc.)
 */
/**
 * Error parser for AWS JSON protocol.
 */
export declare const parseJsonError: ErrorParser;
/**
 * Parse JSON response body to JavaScript object.
 */
export declare const parseJsonBody: (response: HttpResponse) => Promise<any>;
