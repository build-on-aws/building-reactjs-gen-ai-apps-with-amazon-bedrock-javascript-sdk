import * as React from 'react';
import { AuthenticatorMachineOptions, FormFieldComponents, FormFieldOptions } from '@aws-amplify/ui';
import { AuthUser } from 'aws-amplify/auth';
import { UseAuthenticator } from '@aws-amplify/ui-react-core';
import { ComponentsProviderProps } from './hooks/useCustomComponents';
import { RouterProps } from './Router';
export type SignOut = UseAuthenticator['signOut'];
export type AuthenticatorProps = Partial<Omit<AuthenticatorMachineOptions, 'formFields'> & ComponentsProviderProps & RouterProps & {
    children: React.ReactNode | ((props: {
        signOut?: SignOut;
        user?: AuthUser;
    }) => JSX.Element);
    formFields: {
        [key in FormFieldComponents]?: {
            [field_name: string]: ReactFormFieldOptions;
        };
    };
}>;
interface ReactFormFieldOptions extends FormFieldOptions {
    /** Desired HTML defaultValue type */
    defaultValue?: string;
    /** isReadOnly maps to readonly HTML type */
    isReadOnly?: boolean;
    /** Desired HTML pattern type */
    pattern?: string | undefined;
    /** Desired HTML minLength type */
    minLength?: number;
    /** Desired HTML maxLength type */
    maxLength?: number;
}
export declare function AuthenticatorInternal({ children, className, components: customComponents, formFields, hideSignUp, initialState, loginMechanisms, passwordSettings, signUpAttributes, services, socialProviders, variation, }: AuthenticatorProps): JSX.Element;
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator)
 */
export declare function Authenticator(props: AuthenticatorProps): JSX.Element;
export declare namespace Authenticator {
    var Provider: typeof import("@aws-amplify/ui-react-core").AuthenticatorProvider;
    var ForgotPassword: {
        ({ className, variation, }: import("./RouteContainer").RouteProps): JSX.Element;
        Header(): JSX.Element;
        Footer(): JSX.Element;
    };
    var SetupTotp: {
        ({ className, variation, }: import("./RouteContainer").RouteProps): JSX.Element;
        Header(): JSX.Element;
        Footer(): JSX.Element;
    };
    var SignIn: typeof import("./SignIn").SignIn;
    var SignUp: typeof import("./SignUp").SignUp;
    var ForceNewPassword: {
        ({ className, variation, }: import("./RouteContainer").RouteProps): JSX.Element;
        FormFields(): JSX.Element | null;
        Header(): JSX.Element | null;
        Footer(): JSX.Element | null;
    };
}
export {};
