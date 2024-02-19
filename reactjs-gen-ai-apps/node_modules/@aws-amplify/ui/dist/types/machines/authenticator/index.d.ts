import { AuthEvent, AuthContext } from './types';
export type AuthenticatorMachineOptions = AuthContext['config'] & {
    services?: AuthContext['services'];
};
export declare function createAuthenticatorMachine(options?: AuthenticatorMachineOptions & {
    useNextWaitConfig?: boolean;
}): import("xstate").StateMachine<AuthContext, any, AuthEvent, {
    value: any;
    context: AuthContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, AuthEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
