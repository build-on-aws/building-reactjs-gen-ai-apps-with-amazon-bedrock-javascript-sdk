import { AuthEvent, SignUpContext } from '../types';
import { defaultServices } from '../defaultServices';
export type SignUpMachineOptions = {
    services?: Partial<typeof defaultServices>;
};
export declare function signUpActor({ services }: SignUpMachineOptions): import("xstate").StateMachine<SignUpContext, any, AuthEvent, {
    value: any;
    context: SignUpContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, AuthEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
