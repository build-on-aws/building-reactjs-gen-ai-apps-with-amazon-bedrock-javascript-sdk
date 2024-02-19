import { MachineImplementationsFrom, ServiceFrom, StateFrom, StateMachine } from '@xstate/fsm';
export declare function useMachine<TMachine extends StateMachine.AnyMachine>(stateMachine: TMachine, options?: MachineImplementationsFrom<TMachine>): [StateFrom<TMachine>, ServiceFrom<TMachine>['send'], ServiceFrom<TMachine>];
export declare function useService<TService extends StateMachine.AnyService>(service: TService): [StateFrom<TService>, TService['send'], TService];
//# sourceMappingURL=fsm.d.ts.map