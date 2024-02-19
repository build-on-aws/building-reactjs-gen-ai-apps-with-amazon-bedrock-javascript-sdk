import React__default from 'react';
import { authenticatorTextUtil } from '@aws-amplify/ui';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { Tabs } from '../../../primitives/Tabs/Tabs.mjs';
import { View } from '../../../primitives/View/View.mjs';
import { SignIn } from '../SignIn/SignIn.mjs';
import { SignUp } from '../SignUp/SignUp.mjs';
import { RouteContainer } from '../RouteContainer/RouteContainer.mjs';

const { getSignInTabText, getSignUpTabText } = authenticatorTextUtil;
const SignInSignUpTabs = ({ className, hideSignUp, variation, }) => {
    const { route, toSignIn, toSignUp } = useAuthenticator((context) => [
        context.route,
        context.toSignIn,
        context.toSignUp,
    ]);
    return (React__default.createElement(RouteContainer, { className: className, variation: variation }, hideSignUp ? (React__default.createElement(View, { "data-amplify-router-content": "" }, route === 'signIn' && React__default.createElement(SignIn, null))) : (React__default.createElement(Tabs.Container, { value: route, isLazy: true, onValueChange: () => (route === 'signIn' ? toSignUp() : toSignIn()) },
        React__default.createElement(Tabs.List, { spacing: "equal", indicatorPosition: "top" },
            React__default.createElement(Tabs.Item, { value: "signIn" }, getSignInTabText()),
            React__default.createElement(Tabs.Item, { value: "signUp" }, getSignUpTabText())),
        React__default.createElement(Tabs.Panel, { value: "signIn", "data-amplify-router-content": "" },
            React__default.createElement(SignIn, null)),
        React__default.createElement(Tabs.Panel, { value: "signUp", "data-amplify-router-content": "" },
            React__default.createElement(SignUp, null))))));
};

export { SignInSignUpTabs };
