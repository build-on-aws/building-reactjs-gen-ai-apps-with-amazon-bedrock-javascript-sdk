import { defaultServices } from '../defaultServices';
import { AuthEvent, ResetPasswordContext } from '../types';
export type ForgotPasswordMachineOptions = {
    services?: Partial<typeof defaultServices>;
};
export declare function forgotPasswordActor({ services, }: ForgotPasswordMachineOptions): import("xstate").StateMachine<ResetPasswordContext, any, AuthEvent, {
    value: any;
    context: ResetPasswordContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, AuthEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
