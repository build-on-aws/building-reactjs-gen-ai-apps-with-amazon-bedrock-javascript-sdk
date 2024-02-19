import { ResponseMetadata } from '@aws-sdk/types';
import { HttpResponse } from '../types/http';
export declare const parseMetadata: (response: HttpResponse) => ResponseMetadata;
