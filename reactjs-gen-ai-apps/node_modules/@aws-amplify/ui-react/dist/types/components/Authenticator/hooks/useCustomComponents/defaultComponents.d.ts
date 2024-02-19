/// <reference types="react" />
interface Components {
    Footer?: () => JSX.Element | null;
    FormFields?: () => JSX.Element | null;
    Header?: () => JSX.Element | null;
}
export interface DefaultComponents extends Omit<Components, 'FormFields'> {
    ConfirmSignIn?: Omit<Components, 'FormFields'>;
    ConfirmSignUp?: Omit<Components, 'FormFields'>;
    ConfirmResetPassword?: Omit<Components, 'FormFields'>;
    ConfirmVerifyUser?: Omit<Components, 'FormFields'>;
    ForceNewPassword?: Components;
    ForgotPassword?: Omit<Components, 'FormFields'>;
    SetupTotp?: Omit<Components, 'FormFields'>;
    SignIn?: Omit<Components, 'FormFields'>;
    SignUp?: Components;
    VerifyUser?: Omit<Components, 'FormFields'>;
}
export declare const defaultComponents: DefaultComponents;
export {};
