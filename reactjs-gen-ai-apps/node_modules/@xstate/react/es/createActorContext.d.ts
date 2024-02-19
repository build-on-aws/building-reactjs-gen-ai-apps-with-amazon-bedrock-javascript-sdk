import * as React from 'react';
import { ActorRefFrom, AnyStateMachine, AreAllImplementationsAssumedToBeProvided, EmittedFrom, InternalMachineOptions, InterpreterOptions, Observer, StateFrom } from 'xstate';
import { UseMachineOptions } from './useMachine';
export declare function createActorContext<TMachine extends AnyStateMachine>(machine: TMachine, interpreterOptions?: InterpreterOptions, observerOrListener?: Observer<StateFrom<TMachine>> | ((value: StateFrom<TMachine>) => void)): {
    useActor: () => [StateFrom<TMachine>, ActorRefFrom<TMachine>['send']];
    useSelector: <T>(selector: (snapshot: EmittedFrom<TMachine>) => T, compare?: (a: T, b: T) => boolean) => T;
    useActorRef: () => ActorRefFrom<TMachine>;
    Provider: (props: {
        children: React.ReactNode;
        machine?: TMachine | (() => TMachine);
    } & (AreAllImplementationsAssumedToBeProvided<TMachine['__TResolvedTypesMeta']> extends false ? {
        options: UseMachineOptions<TMachine['__TContext'], TMachine['__TEvent']> & InternalMachineOptions<TMachine['__TContext'], TMachine['__TEvent'], TMachine['__TResolvedTypesMeta'], true>;
    } : {
        options?: UseMachineOptions<TMachine['__TContext'], TMachine['__TEvent']> & InternalMachineOptions<TMachine['__TContext'], TMachine['__TEvent'], TMachine['__TResolvedTypesMeta']>;
    })) => React.ReactElement<any, any>;
};
//# sourceMappingURL=createActorContext.d.ts.map