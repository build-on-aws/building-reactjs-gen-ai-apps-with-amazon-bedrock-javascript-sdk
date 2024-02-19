import React__default from 'react';
import { View } from '../../../primitives/View/View.mjs';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { useCustomComponents } from '../hooks/useCustomComponents/useCustomComponents.mjs';

// TODO replace usage of this util with the `isSignInOrSignUpRoute` util in v3.
// Currently `hasTabs` always returns `undefined` as the right condition always
// resolves to truthy. This prevents the "data-amplify-router-content" attribute
// from being applied below. Fixing it will cause consumer snapshot tests to break,
// so wait to update.
const hasTabs = (route) => {
    return route === 'signIn' || 'signUp';
};
function RouteContainer({ children, className, variation = 'default', }) {
    const { route } = useAuthenticator(({ route }) => [route]);
    const { 
    // @ts-ignore
    components: { Header, Footer }, } = useCustomComponents();
    return (React__default.createElement(View, { className: className, "data-amplify-authenticator": "", "data-variation": variation },
        React__default.createElement(View, { "data-amplify-container": "" },
            React__default.createElement(Header, null),
            React__default.createElement(View, { "data-amplify-router": "", "data-amplify-router-content": hasTabs(route) ? undefined : '' }, children),
            React__default.createElement(Footer, null))));
}

export { RouteContainer };
