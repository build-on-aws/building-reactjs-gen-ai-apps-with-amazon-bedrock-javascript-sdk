import { Amplify } from 'aws-amplify';
import 'aws-amplify/utils';
import '@aws-amplify/core/internals/utils';
import '../../utils/setUserAgent/constants.mjs';
import '../../types/authenticator/user.mjs';
import '../../types/authenticator/attributes.mjs';
import { hasSpecialChars } from '../authenticator/utils.mjs';

// gets password requirement from Amplify.configure data
const getPasswordRequirement = () => {
    const config = Amplify.getConfig();
    const passwordSettings = config?.Auth?.Cognito
        .passwordFormat;
    if (!passwordSettings) {
        return null;
    }
    return {
        minLength: passwordSettings.minLength,
        needsLowerCase: passwordSettings.requireLowercase ?? false,
        needsUpperCase: passwordSettings.requireUppercase ?? false,
        needsNumber: passwordSettings.requireNumbers ?? false,
        needsSpecialChar: passwordSettings.requireSpecialCharacters ?? false,
    };
};
const getHasMinLength = (minLength) => ({
    validationMode: 'onTouched',
    validator: (field) => field.length >= minLength,
    message: `Password must have at least ${minLength} characters`,
});
const hasLowerCase = {
    validationMode: 'onTouched',
    validator: (field) => /[a-z]/.test(field),
    message: 'Password must have lower case letters',
};
const hasUpperCase = {
    validationMode: 'onTouched',
    validator: (field) => /[A-Z]/.test(field),
    message: 'Password must have upper case letters',
};
const hasNumber = {
    validationMode: 'onTouched',
    validator: (field) => /[0-9]/.test(field),
    message: 'Password must have numbers',
};
const hasSpecialChar = {
    validationMode: 'onTouched',
    validator: (field) => hasSpecialChars(field),
    message: 'Password must have special characters',
};
const getMatchesConfirmPassword = (password) => {
    return {
        validationMode: 'onTouched',
        validator: (confirmPassword) => password === confirmPassword,
        message: 'Your passwords must match',
    };
};
const getDefaultPasswordValidators = () => {
    const requirement = getPasswordRequirement();
    if (!requirement)
        return [];
    const validators = [];
    const { minLength, needsLowerCase, needsUpperCase, needsNumber, needsSpecialChar, } = requirement;
    if (minLength) {
        validators.push(getHasMinLength(minLength));
    }
    if (needsLowerCase) {
        validators.push(hasLowerCase);
    }
    if (needsUpperCase) {
        validators.push(hasUpperCase);
    }
    if (needsNumber) {
        validators.push(hasNumber);
    }
    if (needsSpecialChar) {
        validators.push(hasSpecialChar);
    }
    return validators;
};
const getDefaultConfirmPasswordValidators = (password) => {
    return [getMatchesConfirmPassword(password)];
};
/*
 * `shouldValidate` determines whether validator should be run, based on validation mode,
 * input event type, and whether it has been blurred yet.
 */
const shouldValidate = ({ validationMode, eventType, hasBlurred, }) => {
    switch (validationMode) {
        case 'onBlur': {
            // only run validator on blur event
            return eventType === 'blur';
        }
        case 'onChange': {
            // only run validator on change event
            return eventType === 'change';
        }
        case 'onTouched': {
            /**
             * run validator on first blur event, and then every subsequent
             * blur/change event.
             */
            return eventType === 'blur' || hasBlurred;
        }
    }
};
// `runFieldValidator` runs all validators, and returns error messages.
const runFieldValidators = ({ value, validators, eventType, hasBlurred, }) => {
    if (!value)
        return [];
    return validators.reduce((prevErrors, validatorSpec) => {
        const { validator, validationMode, message } = validatorSpec;
        if (shouldValidate({ validationMode, eventType, hasBlurred })) {
            const hasError = !validator(value);
            return hasError ? [...prevErrors, message] : prevErrors;
        }
        return prevErrors;
    }, []);
};

export { getDefaultConfirmPasswordValidators, getDefaultPasswordValidators, getHasMinLength, getMatchesConfirmPassword, getPasswordRequirement, hasLowerCase, hasNumber, hasSpecialChar, hasUpperCase, runFieldValidators, shouldValidate };
