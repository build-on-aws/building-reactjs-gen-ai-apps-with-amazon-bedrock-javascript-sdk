import { LoginMechanism, PasswordSettings, SignUpAttribute, SocialProvider } from '../../types';
export interface LegacyConfig {
    aws_cognito_username_attributes?: string[];
    aws_cognito_signup_attributes?: string[];
    aws_cognito_verification_mechanisms?: string[];
    aws_cognito_social_providers?: string[];
    aws_cognito_password_protection_settings?: Record<string, any>;
}
export declare function getAuthenticatorConfig<T extends LegacyConfig>(config: T): {
    loginMechanisms: LoginMechanism[] | undefined;
    signUpAttributes: SignUpAttribute[] | undefined;
    socialProviders: SocialProvider[] | undefined;
    passwordSettings: PasswordSettings | undefined;
};
