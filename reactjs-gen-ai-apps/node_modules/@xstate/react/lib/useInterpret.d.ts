import { AnyInterpreter, AnyStateMachine, AreAllImplementationsAssumedToBeProvided, InternalMachineOptions, InterpreterFrom, InterpreterOptions, MachineOptions, Observer, StateFrom } from 'xstate';
import { MaybeLazy } from './types';
import { UseMachineOptions } from './useMachine';
export declare function useIdleInterpreter(getMachine: MaybeLazy<AnyStateMachine>, options: Partial<InterpreterOptions> & Partial<UseMachineOptions<unknown, never>> & Partial<MachineOptions<unknown, never>>): AnyInterpreter;
declare type RestParams<TMachine extends AnyStateMachine> = AreAllImplementationsAssumedToBeProvided<TMachine['__TResolvedTypesMeta']> extends false ? [
    options: InterpreterOptions & UseMachineOptions<TMachine['__TContext'], TMachine['__TEvent']> & InternalMachineOptions<TMachine['__TContext'], TMachine['__TEvent'], TMachine['__TResolvedTypesMeta'], true>,
    observerOrListener?: Observer<StateFrom<TMachine>> | ((value: StateFrom<TMachine>) => void)
] : [
    options?: InterpreterOptions & UseMachineOptions<TMachine['__TContext'], TMachine['__TEvent']> & InternalMachineOptions<TMachine['__TContext'], TMachine['__TEvent'], TMachine['__TResolvedTypesMeta']>,
    observerOrListener?: Observer<StateFrom<TMachine>> | ((value: StateFrom<TMachine>) => void)
];
export declare function useInterpret<TMachine extends AnyStateMachine>(getMachine: MaybeLazy<TMachine>, ...[options, observerOrListener]: RestParams<TMachine>): InterpreterFrom<TMachine>;
export {};
//# sourceMappingURL=useInterpret.d.ts.map