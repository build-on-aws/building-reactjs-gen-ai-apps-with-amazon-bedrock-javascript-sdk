/// <reference types="react" />
import { FederatedIdentityProviders, SocialProvider } from '@aws-amplify/ui';
export interface FederatedSignInButtonProps {
    icon?: SocialProvider;
    provider: FederatedIdentityProviders;
    text: string;
}
export declare const FederatedSignInButton: (props: FederatedSignInButtonProps) => JSX.Element;
