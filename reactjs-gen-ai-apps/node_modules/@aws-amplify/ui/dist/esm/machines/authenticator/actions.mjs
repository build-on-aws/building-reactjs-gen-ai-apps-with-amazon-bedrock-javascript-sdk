import { actions } from 'xstate';
import 'aws-amplify/utils';
import '@aws-amplify/core/internals/utils';
import '../../utils/setUserAgent/constants.mjs';
import '../../types/authenticator/user.mjs';
import '../../types/authenticator/attributes.mjs';
import { trimValues } from '../../helpers/authenticator/utils.mjs';
import '../../helpers/accountSettings/utils.mjs';
import 'aws-amplify';
import { sanitizePhoneNumber, getUsernameSignUp } from './utils.mjs';

const { assign } = actions;
const clearActorDoneData = assign({ actorDoneData: undefined });
const clearChallengeName = assign({ challengeName: undefined });
const clearMissingAttributes = assign({ missingAttributes: undefined });
const clearError = assign({ remoteError: undefined });
const clearFormValues = assign({ formValues: {} });
const clearTouched = assign({ touched: {} });
const clearUser = assign({ user: undefined });
const clearValidationError = assign({ validationError: {} });
/**
 * "set" actions
 */
const setTotpSecretCode = assign({
    totpSecretCode: (_, { data }) => {
        const { sharedSecret } = (data.nextStep?.totpSetupDetails ??
            {});
        return sharedSecret;
    },
});
const setSignInStep = assign({ step: 'SIGN_IN' });
const setShouldVerifyUserAttributeStep = assign({
    step: 'SHOULD_CONFIRM_USER_ATTRIBUTE',
});
const setConfirmAttributeCompleteStep = assign({
    step: 'CONFIRM_ATTRIBUTE_COMPLETE',
});
// map v6 `signInStep` to v5 `challengeName`
const setChallengeName = assign({
    challengeName: (_, { data }) => {
        const { signInStep } = data.nextStep;
        return signInStep === 'CONFIRM_SIGN_IN_WITH_SMS_CODE'
            ? 'SMS_MFA'
            : signInStep === 'CONFIRM_SIGN_IN_WITH_TOTP_CODE'
                ? 'SOFTWARE_TOKEN_MFA'
                : undefined;
    },
});
const setUsernameForgotPassword = assign({
    username: ({ formValues, loginMechanisms }) => {
        const loginMechanism = loginMechanisms[0];
        const { username, country_code } = formValues;
        if (loginMechanism === 'phone_number') {
            // forgot password `formValues` uses `username` for base phone number value
            // prefix `country_code` for full `username`
            return sanitizePhoneNumber(country_code, username);
        }
        // default username field for loginMechanism === 'email' is "username" for SignIn
        return username;
    },
});
const setUsernameSignUp = assign({ username: getUsernameSignUp });
const setUsernameSignIn = assign({
    username: ({ formValues, loginMechanisms }) => {
        const loginMechanism = loginMechanisms[0];
        const { username, country_code } = formValues;
        if (loginMechanism === 'phone_number') {
            // sign in `formValues` uses `username` for base phone number value
            // prefix `country_code` for full `username`
            return sanitizePhoneNumber(country_code, username);
        }
        // return `email` and `username`
        return username;
    },
});
const setNextSignInStep = assign({
    step: (_, { data }) => data.nextStep.signInStep === 'DONE'
        ? 'SIGN_IN_COMPLETE'
        : data.nextStep.signInStep,
});
const setNextSignUpStep = assign({
    step: (_, { data }) => data.nextStep.signUpStep === 'DONE'
        ? 'SIGN_UP_COMPLETE'
        : data.nextStep.signUpStep,
});
const setNextResetPasswordStep = assign({
    step: (_, { data }) => data.nextStep.resetPasswordStep === 'DONE'
        ? 'RESET_PASSWORD_COMPLETE'
        : data.nextStep.resetPasswordStep,
});
const setMissingAttributes = assign({
    missingAttributes: (_, { data }) => data.nextStep?.missingAttributes,
});
const setFieldErrors = assign({
    validationError: (_, { data }) => data,
});
const setRemoteError = assign({
    remoteError: (_, { data }) => {
        if (data.name === 'NoUserPoolError') {
            return `Configuration error (see console) – please contact the administrator`;
        }
        return data?.message || data;
    },
});
const setUser = assign({ user: (_, { data }) => data });
const resolveCodeDeliveryDetails = (details) => ({
    Destination: details.destination,
    DeliveryMedium: details.deliveryMedium,
    AttributeName: details.attributName,
});
const setCodeDeliveryDetails = assign({
    codeDeliveryDetails: (_, { data }) => {
        if (data
            ?.nextStep?.codeDeliveryDetails) {
            return resolveCodeDeliveryDetails(data
                .nextStep.codeDeliveryDetails);
        }
        return resolveCodeDeliveryDetails(data);
    },
});
const handleInput = assign({
    formValues: (context, { data }) => {
        const { name, value } = data;
        return { ...context['formValues'], [name]: value };
    },
});
const handleSubmit = assign({
    formValues: (context, { data }) => 
    // do not trim password
    trimValues({ ...context['formValues'], ...data }, 'password'),
});
const handleBlur = assign({
    touched: (context, { data }) => ({
        ...context['touched'],
        [data.name]: true,
    }),
});
const setUnverifiedUserAttributes = assign({
    unverifiedUserAttributes: (_, { data }) => {
        const { email, phone_number } = data;
        const unverifiedUserAttributes = {
            ...(email && { email }),
            ...(phone_number && { phone_number }),
        };
        return unverifiedUserAttributes;
    },
});
const clearSelectedUserAttribute = assign({ selectedUserAttribute: undefined });
const setSelectedUserAttribute = assign({
    selectedUserAttribute: (context) => context.formValues?.unverifiedAttr,
});
// Maps to unexposed `ConfirmSignUpSignUpStep`
const setConfirmSignUpSignUpStep = assign({ step: 'CONFIRM_SIGN_UP' });
const ACTIONS = {
    clearActorDoneData,
    clearChallengeName,
    clearError,
    clearFormValues,
    clearMissingAttributes,
    clearSelectedUserAttribute,
    clearTouched,
    clearUser,
    clearValidationError,
    handleBlur,
    handleInput,
    handleSubmit,
    setChallengeName,
    setCodeDeliveryDetails,
    setFieldErrors,
    setMissingAttributes,
    setNextResetPasswordStep,
    setNextSignInStep,
    setNextSignUpStep,
    setRemoteError,
    setConfirmAttributeCompleteStep,
    setConfirmSignUpSignUpStep,
    setShouldVerifyUserAttributeStep,
    setSelectedUserAttribute,
    setSignInStep,
    setTotpSecretCode,
    setUser,
    setUnverifiedUserAttributes,
    setUsernameForgotPassword,
    setUsernameSignIn,
    setUsernameSignUp,
};

export { ACTIONS as default };
