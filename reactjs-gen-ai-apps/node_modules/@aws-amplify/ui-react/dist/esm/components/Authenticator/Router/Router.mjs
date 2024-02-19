import React__default, { useMemo } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { ConfirmSignUp } from '../ConfirmSignUp/ConfirmSignUp.mjs';
import { ForceNewPassword } from '../ForceNewPassword/ForceNewPassword.mjs';
import { SetupTotp } from '../SetupTotp/SetupTotp.mjs';
import '@aws-amplify/ui';
import '../../../primitives/TextField/TextField.mjs';
import '../../../primitives/Button/Button.mjs';
import '../../../primitives/Flex/Flex.mjs';
import '../../../primitives/Alert/Alert.mjs';
import { SignInSignUpTabs } from '../shared/SignInSignUpTabs.mjs';
import { ConfirmVerifyUser } from '../VerifyUser/ConfirmVerifyUser.mjs';
import { VerifyUser } from '../VerifyUser/VerifyUser.mjs';
import { ConfirmSignIn } from '../ConfirmSignIn/ConfirmSignIn.mjs';
import { ConfirmResetPassword } from '../ForgotPassword/ConfirmResetPassword.mjs';
import { ForgotPassword } from '../ForgotPassword/ForgotPassword.mjs';
import { isSignInOrSignUpRoute } from '../utils.mjs';

function RenderNothing() {
    // @ts-ignore
    return null;
}
const getRouteComponent = (route) => {
    switch (route) {
        case 'authenticated':
        case 'idle':
        case 'setup':
        case 'transition':
            return RenderNothing;
        case 'confirmSignUp':
            return ConfirmSignUp;
        case 'confirmSignIn':
            return ConfirmSignIn;
        case 'setupTotp':
            return SetupTotp;
        case 'signIn':
        case 'signUp':
            return SignInSignUpTabs;
        case 'forceNewPassword':
            return ForceNewPassword;
        case 'forgotPassword':
            return ForgotPassword;
        case 'confirmResetPassword':
            return ConfirmResetPassword;
        case 'verifyUser':
            return VerifyUser;
        case 'confirmVerifyUser':
            return ConfirmVerifyUser;
        default:
            // eslint-disable-next-line no-console
            console.warn(`Unhandled Authenticator route - please open an issue: ${route}`);
            return RenderNothing;
    }
};
function Router({ className, hideSignUp, variation, }) {
    const { route } = useAuthenticator(({ route }) => [route]);
    const RouterChildren = useMemo(() => getRouteComponent(route), [route]);
    return (React__default.createElement(RouterChildren, { className: className, 
        // @ts-ignore
        hideSignUp: isSignInOrSignUpRoute(route) ? hideSignUp : undefined, variation: variation }));
}

export { Router };
