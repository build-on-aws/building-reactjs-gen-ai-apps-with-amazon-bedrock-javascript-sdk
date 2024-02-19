const SIGN_IN_STEP_MFA_CONFIRMATION = [
    'CONFIRM_SIGN_IN_WITH_SMS_CODE',
    'CONFIRM_SIGN_IN_WITH_TOTP_CODE',
];
// response next step guards
const shouldConfirmSignInWithNewPassword = (_, { data }) => data?.nextStep.signInStep ===
    'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED';
const shouldResetPasswordFromSignIn = (_, { data }) => data?.nextStep?.signInStep === 'RESET_PASSWORD';
const shouldConfirmSignUpFromSignIn = (_, { data }) => data?.nextStep.signInStep === 'CONFIRM_SIGN_UP';
const shouldAutoSignIn = (_, { data }) => data?.nextStep.signUpStep === 'COMPLETE_AUTO_SIGN_IN';
const hasCompletedSignIn = (_, { data }) => data?.nextStep.signInStep === 'DONE';
const hasCompletedSignUp = (_, { data }) => data?.nextStep.signUpStep === 'DONE';
const hasCompletedResetPassword = (_, { data }) => data?.nextStep.resetPasswordStep === 'DONE';
// actor done guards read `step` from actor exit event
const hasCompletedAttributeConfirmation = (_, { data }) => data?.step === 'CONFIRM_ATTRIBUTE_COMPLETE';
const isConfirmUserAttributeStep = (_, { data }) => data?.step === 'CONFIRM_ATTRIBUTE_WITH_CODE';
const isShouldConfirmUserAttributeStep = (_, { data }) => data?.step === 'SHOULD_CONFIRM_USER_ATTRIBUTE';
const isResetPasswordStep = (_, { data }) => data?.step === 'RESET_PASSWORD';
const isConfirmSignUpStep = (_, { data }) => data?.step === 'CONFIRM_SIGN_UP';
// actor entry guards read `step` from actor context
const shouldConfirmSignIn = ({ step }) => SIGN_IN_STEP_MFA_CONFIRMATION.includes(step);
const shouldSetupTotp = ({ step }) => step === 'CONTINUE_SIGN_IN_WITH_TOTP_SETUP';
const shouldResetPassword = ({ step }) => step === 'RESET_PASSWORD';
const shouldConfirmResetPassword = ({ step }) => step === 'CONFIRM_RESET_PASSWORD_WITH_CODE';
const shouldConfirmSignUp = ({ step }) => step === 'CONFIRM_SIGN_UP';
// miscellaneous guards
const shouldVerifyAttribute = (_, { data }) => {
    const { phone_number_verified, email_verified } = data;
    // email/phone_verified is returned as a string
    const emailNotVerified = email_verified === undefined || email_verified === 'false';
    const phoneNotVerified = phone_number_verified === undefined || phone_number_verified === 'false';
    // only request verification if both email and phone are not verified
    return emailNotVerified && phoneNotVerified;
};
/**
 * This guard covers an edge case that exists in the current state of the UI.
 * As of now, our ConfirmSignUp screen only supports showing an input for a
 * confirmation code. However, a Cognito UserPool can instead verify users
 * through a link that gets emailed to them. If a user verifies through the
 * link and then they click on the "Resend Code" button, they will get an error
 * saying that the user has already been confirmed. If we encounter that error,
 * we want to just funnel them through the rest of the flow. In the future, we will
 * want to update our UI to support both confirmation codes and links.
 *
 * https://github.com/aws-amplify/amplify-ui/issues/219
 */
const isUserAlreadyConfirmed = (_, { data }) => data.message === 'User is already confirmed.';
const GUARDS = {
    hasCompletedAttributeConfirmation,
    hasCompletedResetPassword,
    hasCompletedSignIn,
    hasCompletedSignUp,
    isConfirmSignUpStep,
    isConfirmUserAttributeStep,
    isResetPasswordStep,
    isShouldConfirmUserAttributeStep,
    isUserAlreadyConfirmed,
    shouldAutoSignIn,
    shouldConfirmResetPassword,
    shouldConfirmSignIn,
    shouldConfirmSignInWithNewPassword,
    shouldConfirmSignUp,
    shouldConfirmSignUpFromSignIn,
    shouldResetPassword,
    shouldResetPasswordFromSignIn,
    shouldSetupTotp,
    shouldVerifyAttribute,
};

export { GUARDS as default };
