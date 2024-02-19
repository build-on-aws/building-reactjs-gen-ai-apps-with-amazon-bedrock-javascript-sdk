import { getActorState } from '../actor.mjs';
import { defaultFormFieldOptions } from '../constants.mjs';
import { isAuthFieldWithDefaults } from '../form.mjs';
import { getPrimaryAlias } from './utils.mjs';

/**
 * This file contains helpers that generate default formFields for each screen
 */
const DEFAULT_COUNTRY_CODE = '+1';
/** Helper function that gets the default formField for given field name */
const getDefaultFormField = (fieldName) => {
    let options = defaultFormFieldOptions[fieldName];
    const { type } = options;
    if (type === 'tel') {
        options = { ...options, dialCode: DEFAULT_COUNTRY_CODE };
    }
    return options;
};
// Helper function that returns default form field for configured primary alias
const getAliasDefaultFormField = (state) => {
    const primaryAlias = getPrimaryAlias(state);
    return {
        ...getDefaultFormField(primaryAlias),
        autocomplete: 'username',
    };
};
/** Reusable confirmation code form fields. */
const getConfirmationCodeFormFields = (state) => ({
    confirmation_code: {
        ...getDefaultFormField('confirmation_code'),
        label: 'Code *',
        placeholder: 'Code',
    },
});
const getSignInFormFields = (state) => ({
    username: { ...getAliasDefaultFormField(state) },
    password: {
        ...getDefaultFormField('password'),
        autocomplete: 'current-password',
    },
});
const getSignUpFormFields = (state) => {
    const { loginMechanisms, signUpAttributes } = state.context.config;
    const primaryAlias = getPrimaryAlias(state);
    /**
     * @migration signUp Fields created here
     */
    const fieldNames = Array.from(new Set([
        ...loginMechanisms,
        'password',
        'confirm_password',
        ...signUpAttributes,
    ]));
    const formField = {};
    for (const fieldName of fieldNames) {
        if (isAuthFieldWithDefaults(fieldName)) {
            const fieldAttrs = fieldName === primaryAlias
                ? getAliasDefaultFormField(state)
                : getDefaultFormField(fieldName);
            formField[fieldName] = { ...fieldAttrs };
        }
        else {
            // There's a `custom:*` attribute or one we don't already have an implementation for
            console.debug(`Authenticator does not have a default implementation for ${fieldName}. Customize SignUp FormFields to add your own.`);
        }
    }
    return formField;
};
const getConfirmSignUpFormFields = (state) => ({
    confirmation_code: {
        ...getDefaultFormField('confirmation_code'),
        placeholder: 'Enter your code',
    },
});
const getForgotPasswordFormFields = (state) => {
    const primaryAlias = getPrimaryAlias(state);
    const { label } = defaultFormFieldOptions[primaryAlias];
    return {
        username: {
            ...getAliasDefaultFormField(state),
            label: `Enter your ${label.toLowerCase()}`,
            placeholder: `Enter your ${label.toLowerCase()}`,
        },
    };
};
const getConfirmResetPasswordFormFields = (state) => ({
    ...getConfirmationCodeFormFields(),
    password: {
        ...getDefaultFormField('password'),
        label: 'New Password',
        placeholder: 'New Password',
    },
    confirm_password: {
        ...getDefaultFormField('confirm_password'),
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
    },
});
const getForceNewPasswordFormFields = (state) => {
    const actorState = getActorState(state);
    const { missingAttributes } = actorState.context;
    const fieldNames = Array.from(new Set([
        'password',
        'confirm_password',
        ...(missingAttributes ?? []),
    ]));
    const formField = {};
    for (const fieldName of fieldNames) {
        if (isAuthFieldWithDefaults(fieldName)) {
            formField[fieldName] = { ...getDefaultFormField(fieldName) };
        }
        else {
            // There's a `custom:*` attribute or one we don't already have an implementation for
            console.debug(`Authenticator does not have a default implementation for ${fieldName}. Customize ForceNewPassword FormFields to add your own.`);
        }
    }
    return formField;
};
/** Collect all the defaultFormFields getters */
const defaultFormFieldsGetters = {
    signIn: getSignInFormFields,
    signUp: getSignUpFormFields,
    confirmSignUp: getConfirmSignUpFormFields,
    confirmSignIn: getConfirmationCodeFormFields,
    forceNewPassword: getForceNewPasswordFormFields,
    forgotPassword: getForgotPasswordFormFields,
    confirmResetPassword: getConfirmResetPasswordFormFields,
    confirmVerifyUser: getConfirmationCodeFormFields,
    setupTotp: getConfirmationCodeFormFields,
};

export { DEFAULT_COUNTRY_CODE, defaultFormFieldsGetters, getAliasDefaultFormField };
