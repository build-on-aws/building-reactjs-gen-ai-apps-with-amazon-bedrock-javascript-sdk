import merge from 'lodash/merge.js';
import '@aws-amplify/core/internals/utils';
import '../utils/setUserAgent/constants.mjs';
import { isEmpty } from '../utils/utils.mjs';

// Runs all validators given. Resolves if there are no error. Rejects otherwise.
const runValidators = async (formData, touchData, passwordSettings, validators) => {
    const errors = await Promise.all(validators.map((validator) => validator(formData, touchData, passwordSettings)));
    const mergedError = merge({}, ...errors);
    if (isEmpty(mergedError)) {
        // no errors were found
        return Promise.resolve();
    }
    else {
        return Promise.reject(mergedError);
    }
};

export { runValidators };
