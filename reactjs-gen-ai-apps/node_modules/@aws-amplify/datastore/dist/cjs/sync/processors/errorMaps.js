'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.mapErrorToType = exports.getSyncErrorType = exports.getSubscriptionErrorType = exports.getMutationErrorType = exports.syncErrorMap = exports.subscriptionErrorMap = exports.mutationErrorMap = void 0;
const utils_1 = require("../utils");
const connectionTimeout = error => /^Connection failed: Connection Timeout/.test(error.message);
const serverError = error => (0, utils_1.resolveServiceErrorStatusCode)(error) >= 500;
exports.mutationErrorMap = {
    BadModel: () => false,
    BadRecord: error => {
        const { message } = error;
        return (/^Cannot return \w+ for [\w-_]+ type/.test(message) ||
            /^Variable '.+' has coerced Null value for NonNull type/.test(message)); // newly required field, out of date client
    },
    ConfigError: () => false,
    Transient: error => connectionTimeout(error) || serverError(error),
    Unauthorized: error => error.message === 'Unauthorized' ||
        (0, utils_1.resolveServiceErrorStatusCode)(error) === 401,
};
exports.subscriptionErrorMap = {
    BadModel: () => false,
    BadRecord: () => false,
    ConfigError: () => false,
    Transient: observableError => {
        const error = unwrapObservableError(observableError);
        return connectionTimeout(error) || serverError(error);
    },
    Unauthorized: observableError => {
        const error = unwrapObservableError(observableError);
        return /Connection failed.+Unauthorized/.test(error.message);
    },
};
exports.syncErrorMap = {
    BadModel: () => false,
    BadRecord: error => /^Cannot return \w+ for [\w-_]+ type/.test(error.message),
    ConfigError: () => false,
    Transient: error => connectionTimeout(error) || serverError(error),
    Unauthorized: error => error.errorType === 'Unauthorized',
};
/**
 * Get the first error reason of an observable.
 * Allows for error maps to be easily applied to observable errors
 *
 * @param observableError an error from ZenObservable subscribe error callback
 */
function unwrapObservableError(observableError) {
    const { errors: [error], } = (observableError);
    return error;
}
function getMutationErrorType(error) {
    return mapErrorToType(exports.mutationErrorMap, error);
}
exports.getMutationErrorType = getMutationErrorType;
function getSubscriptionErrorType(error) {
    return mapErrorToType(exports.subscriptionErrorMap, error);
}
exports.getSubscriptionErrorType = getSubscriptionErrorType;
function getSyncErrorType(error) {
    return mapErrorToType(exports.syncErrorMap, error);
}
exports.getSyncErrorType = getSyncErrorType;
/**
 * Categorizes an error with a broad error type, intended to make
 * customer error handling code simpler.
 * @param errorMap Error names and a list of patterns that indicate them (each pattern as a regex or function)
 * @param error The underying error to categorize.
 */
function mapErrorToType(errorMap, error) {
    const errorTypes = [...Object.keys(errorMap)];
    for (const errorType of errorTypes) {
        const matcher = errorMap[errorType];
        if (matcher?.(error)) {
            return errorType;
        }
    }
    return 'Unknown';
}
exports.mapErrorToType = mapErrorToType;
//# sourceMappingURL=errorMaps.js.map
