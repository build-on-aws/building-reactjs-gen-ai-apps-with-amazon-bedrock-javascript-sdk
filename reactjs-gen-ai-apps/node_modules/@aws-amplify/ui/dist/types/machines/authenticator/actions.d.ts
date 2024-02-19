import { MachineOptions } from 'xstate';
import { AuthEvent, AuthActorContext } from './types';
declare const ACTIONS: MachineOptions<AuthActorContext, AuthEvent>['actions'];
export default ACTIONS;
