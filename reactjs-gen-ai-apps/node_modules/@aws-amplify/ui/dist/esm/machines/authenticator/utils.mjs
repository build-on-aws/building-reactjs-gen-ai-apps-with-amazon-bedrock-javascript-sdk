import pickBy from 'lodash/pickBy.js';
import '@aws-amplify/core/internals/utils';
import '../../utils/setUserAgent/constants.mjs';
import { isString } from '../../utils/utils.mjs';

// default `autoSignIn` flag is `true`
const DEFAULT_AUTO_SIGN_IN = true;
const EMPTY_STRING = '';
const sanitizePhoneNumber = (dialCode, phoneNumber) => `${dialCode}${phoneNumber}`.replace(/[^A-Z0-9+]/gi, '');
const selectUserAttributes = (_, key) => {
    // Allowlist of Cognito User Pool Attributes (from OpenID Connect specification)
    // See: https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html
    switch (key) {
        case 'address':
        case 'birthdate':
        case 'email':
        case 'family_name':
        case 'gender':
        case 'given_name':
        case 'locale':
        case 'middle_name':
        case 'name':
        case 'nickname':
        case 'phone_number':
        case 'picture':
        case 'preferred_username':
        case 'profile':
        case 'updated_at':
        case 'website':
        case 'zoneinfo':
            return true;
        // Otherwise, it's a custom attribute
        default:
            return key.startsWith('custom:');
    }
};
const getUserAttributes = (formValues) => {
    const { phone_number, ...userAttributes } = pickBy(formValues, selectUserAttributes);
    // only include `phone_number` attribute in `userAttributes` if it has a value
    if (isString(phone_number) && phone_number !== EMPTY_STRING) {
        const { country_code } = formValues;
        return {
            ...userAttributes,
            phone_number: sanitizePhoneNumber(country_code, phone_number),
        };
    }
    return userAttributes;
};
const getSignUpInput = (username, formValues, loginMechanism) => {
    const { password, ...values } = formValues;
    const attributes = getUserAttributes(values);
    const options = {
        autoSignIn: DEFAULT_AUTO_SIGN_IN,
        userAttributes: {
            // use `username` value for `phone_number`
            ...(loginMechanism === 'phone_number'
                ? { ...attributes, phone_number: username }
                : attributes),
        },
    };
    return { username, password, options };
};
const getUsernameSignUp = ({ formValues, loginMechanisms, }) => {
    const loginMechanism = loginMechanisms[0];
    if (loginMechanism === 'phone_number') {
        const { country_code, phone_number } = formValues;
        return sanitizePhoneNumber(country_code, phone_number);
    }
    return formValues[loginMechanism];
};

export { getSignUpInput, getUserAttributes, getUsernameSignUp, sanitizePhoneNumber };
