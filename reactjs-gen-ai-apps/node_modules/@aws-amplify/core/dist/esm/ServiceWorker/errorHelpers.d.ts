import { AssertionFunction } from '../types';
export declare enum ServiceWorkerErrorCode {
    UndefinedInstance = "UndefinedInstance",
    UndefinedRegistration = "UndefinedRegistration",
    Unavailable = "Unavailable"
}
export declare const assert: AssertionFunction<ServiceWorkerErrorCode>;
