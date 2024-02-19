import '../../../types/authenticator/user.mjs';
import { isAuthFieldsWithDefaults } from '../../../types/authenticator/attributes.mjs';
import { getActorContext } from '../actor.mjs';
import { defaultFormFieldOptions } from '../constants.mjs';
import { defaultFormFieldsGetters, getAliasDefaultFormField } from './defaults.mjs';
import { applyTranslation, sortFormFields } from './utils.mjs';

// Gets the default formFields for given route
const getDefaultFormFields = (route, state) => {
    const formFieldGetter = defaultFormFieldsGetters[route];
    return formFieldGetter(state);
};
// Gets custom formFields, and applies default values
const getCustomFormFields = (route, state) => {
    const customFormFields = getActorContext(state)?.formFields?.[route];
    if (!customFormFields || Object.keys(customFormFields).length === 0) {
        return {};
    }
    return Object.entries(customFormFields).reduce((acc, [fieldName, customOptions]) => {
        if ((route === 'signIn' || route === 'forgotPassword') &&
            fieldName === 'username') {
            // Unlike other screens, `signIn` and `forgotPassword` screens default login
            // alias field names to "username", even if it's a phone number or email.
            // In this case, we get the default formFieldOptions based on loginMechanism.
            const defaultOptions = getAliasDefaultFormField(state);
            // apply default to fill any gaps that are not present in customOptions
            const mergedOptions = { ...defaultOptions, ...customOptions };
            return { ...acc, [fieldName]: mergedOptions };
        }
        else if (isAuthFieldsWithDefaults(fieldName)) {
            // if this field is a known auth attribute that we have defaults for,
            // apply defaults to customOptions.
            const defaultOptions = defaultFormFieldOptions[fieldName];
            const mergedOptions = { ...defaultOptions, ...customOptions };
            return { ...acc, [fieldName]: mergedOptions };
        }
        else {
            // if this is not a known field, use customOptions as is.
            return { ...acc, [fieldName]: customOptions };
        }
    }, {});
};
const getFormFields = (route, state) => {
    const defaultFormFields = getDefaultFormFields(route, state);
    const customFormFields = getCustomFormFields(route, state);
    const formFields = { ...defaultFormFields, ...customFormFields };
    delete formFields['QR'];
    return applyTranslation(formFields);
};
const removeOrderKeys = (formFields) => formFields.map((field) => {
    const key = field[0];
    // Drop order key to prevent passing to form field UI components
    const values = { ...field[1], order: undefined };
    return [key, values];
});
/** Calls `getFormFields` above, then sorts it into an indexed array */
const getSortedFormFields = (route, state) => {
    const formFields = getFormFields(route, state);
    return removeOrderKeys(sortFormFields(formFields));
};

export { getCustomFormFields, getDefaultFormFields, getFormFields, getSortedFormFields, removeOrderKeys };
