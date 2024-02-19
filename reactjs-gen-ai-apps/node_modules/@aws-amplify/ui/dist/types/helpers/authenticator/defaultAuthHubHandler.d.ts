import { AuthInterpreter, AuthMachineHubHandler } from './types';
/**
 * Handles Amplify JS Auth hub events, by forwarding hub events as appropriate
 * xstate events.
 */
export declare const defaultAuthHubHandler: AuthMachineHubHandler;
/**
 * Listens to external auth Hub events and sends corresponding event to
 * the `service.send` of interest
 *
 * @param service - contains state machine `send` function
 * @param handler - auth event handler
 * @returns function that unsubscribes to the hub evenmt
 */
export declare const listenToAuthHub: (service: AuthInterpreter, handler?: AuthMachineHubHandler) => import("@aws-amplify/core/dist/esm/Hub/types").StopListenerCallback;
