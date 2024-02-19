import { AuthEvent, VerifyUserContext } from '../types';
export declare function verifyUserAttributesActor(): import("xstate").StateMachine<VerifyUserContext, any, AuthEvent, {
    value: any;
    context: VerifyUserContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, AuthEvent, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
