import 'react';
import 'react-hook-form';
import '@aws-amplify/ui';
import '../../../components/FormCore/FormProvider.mjs';
import RenderNothing from '../../../components/RenderNothing/RenderNothing.mjs';
import { isComponentRouteKey } from '../utils.mjs';
import { MACHINE_PROP_KEYS, EVENT_HANDLER_KEY_MAP } from './constants.mjs';

// only select `route` from machine context
const routeSelector = ({ route }) => [route];
const createSelector = (selectorKeys) => (context) => {
    const dependencies = selectorKeys.map((key) => context[key]);
    // route should always be part of deps, so hook knows when route changes.
    return [...dependencies, context.route];
};
const getRouteMachineSelector = (route) => isComponentRouteKey(route)
    ? createSelector(MACHINE_PROP_KEYS[route])
    : routeSelector;
const isFormEventHandlerKey = (key) => ['updateBlur', 'updateForm', 'submitForm'].includes(key);
const convertEventHandlerKey = (key) => EVENT_HANDLER_KEY_MAP[key];
const getConvertedMachineProps = (route, context) => MACHINE_PROP_KEYS[route].reduce((acc, key) => ({
    ...acc,
    [isFormEventHandlerKey(key) ? convertEventHandlerKey(key) : key]: context[key],
}), {});
function resolveConfirmResetPasswordRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('confirmResetPassword', props),
        },
    };
}
function resolveConfirmSignInRoute(Component, props) {
    const { challengeName, ...machineProps } = getConvertedMachineProps('confirmSignIn', props);
    return { Component, props: { ...Component, ...machineProps, challengeName } };
}
function resolveConfirmSignUpRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('confirmSignUp', props),
        },
    };
}
function resolveConfirmVerifyUserRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('confirmVerifyUser', props),
        },
    };
}
function resolveForceNewPasswordRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('forceNewPassword', props),
        },
    };
}
function resolveForgotPasswordRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('forgotPassword', props),
        },
    };
}
function resolveSetupTotpRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('setupTotp', props),
        },
    };
}
function resolveSignInRoute(Component, props) {
    // default `hideSignUp` to false
    const hideSignUp = false;
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('signIn', props),
            hideSignUp,
        },
    };
}
function resolveSignUpRoute(Component, props) {
    return {
        Component,
        props: { ...Component, ...getConvertedMachineProps('signUp', props) },
    };
}
function resolveVerifyUserRoute(Component, props) {
    return {
        Component,
        props: {
            ...Component,
            ...getConvertedMachineProps('verifyUser', props),
        },
    };
}
function resolveDefault() {
    return {
        Component: RenderNothing,
        props: {},
    };
}

export { getRouteMachineSelector, resolveConfirmResetPasswordRoute, resolveConfirmSignInRoute, resolveConfirmSignUpRoute, resolveConfirmVerifyUserRoute, resolveDefault, resolveForceNewPasswordRoute, resolveForgotPasswordRoute, resolveSetupTotpRoute, resolveSignInRoute, resolveSignUpRoute, resolveVerifyUserRoute, routeSelector };
