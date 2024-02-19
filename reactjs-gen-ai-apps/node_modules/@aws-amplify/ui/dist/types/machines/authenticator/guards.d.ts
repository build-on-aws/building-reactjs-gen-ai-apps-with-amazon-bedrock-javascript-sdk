import { MachineOptions } from 'xstate';
import { AuthActorContext, AuthEvent } from './types';
declare const GUARDS: MachineOptions<AuthActorContext, AuthEvent>['guards'];
export default GUARDS;
