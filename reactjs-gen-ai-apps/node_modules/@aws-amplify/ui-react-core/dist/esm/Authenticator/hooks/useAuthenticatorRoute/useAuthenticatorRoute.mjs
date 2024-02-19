import { useMemo } from 'react';
import useAuthenticator from '../useAuthenticator/useAuthenticator.mjs';
import { getRouteMachineSelector, resolveDefault, resolveVerifyUserRoute, resolveSignUpRoute, resolveSignInRoute, resolveSetupTotpRoute, resolveForgotPasswordRoute, resolveForceNewPasswordRoute, resolveConfirmVerifyUserRoute, resolveConfirmSignUpRoute, resolveConfirmSignInRoute, resolveConfirmResetPasswordRoute, routeSelector } from './utils.mjs';

function useAuthenticatorRoute({ components, }) {
    const { route } = useAuthenticator(routeSelector);
    const routeMachineSelector = useMemo(() => getRouteMachineSelector(route), [route]);
    // `useAuthenticator` exposes both state machine (example: `toSignIn`) and non-state machine
    // props (example: `getTotpSecretCode`). `routeSelector` specifies which state machine props
    // should be returned for a specific route.
    // Only state machine props specified by the current `routeSelector` will have their current value
    // returned by `useAuthenticator`, non-machine props returned will always be the current value
    const routeSelectorProps = useAuthenticator(routeMachineSelector);
    const { ConfirmResetPassword, ConfirmSignIn, ConfirmSignUp, ConfirmVerifyUser, ForceNewPassword, ForgotPassword, SetupTotp, SignIn, SignUp, VerifyUser, } = components;
    switch (route) {
        case 'confirmResetPassword': {
            return resolveConfirmResetPasswordRoute(ConfirmResetPassword, routeSelectorProps);
        }
        case 'confirmSignIn': {
            return resolveConfirmSignInRoute(ConfirmSignIn, routeSelectorProps);
        }
        case 'confirmSignUp': {
            return resolveConfirmSignUpRoute(ConfirmSignUp, routeSelectorProps);
        }
        case 'confirmVerifyUser': {
            return resolveConfirmVerifyUserRoute(ConfirmVerifyUser, routeSelectorProps);
        }
        case 'forceNewPassword': {
            return resolveForceNewPasswordRoute(ForceNewPassword, routeSelectorProps);
        }
        case 'forgotPassword': {
            return resolveForgotPasswordRoute(ForgotPassword, routeSelectorProps);
        }
        case 'setupTotp': {
            return resolveSetupTotpRoute(SetupTotp, routeSelectorProps);
        }
        case 'signIn': {
            return resolveSignInRoute(SignIn, routeSelectorProps);
        }
        case 'signUp': {
            return resolveSignUpRoute(SignUp, routeSelectorProps);
        }
        case 'verifyUser': {
            return resolveVerifyUserRoute(VerifyUser, routeSelectorProps);
        }
        default: {
            return resolveDefault();
        }
    }
}

export { useAuthenticatorRoute as default };
