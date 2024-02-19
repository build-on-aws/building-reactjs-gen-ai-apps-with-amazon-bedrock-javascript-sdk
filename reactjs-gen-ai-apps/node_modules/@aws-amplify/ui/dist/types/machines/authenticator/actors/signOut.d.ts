import { AuthEvent, SignOutContext } from '../types';
export declare const signOutActor: () => import("xstate").StateMachine<SignOutContext, any, AuthEvent, {
    value: any;
    context: SignOutContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, AuthEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
