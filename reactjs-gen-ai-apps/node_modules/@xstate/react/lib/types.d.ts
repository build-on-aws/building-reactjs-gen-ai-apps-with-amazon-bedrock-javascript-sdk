import { EventObject, StateConfig } from 'xstate';
export declare type MaybeLazy<T> = T | (() => T);
export declare type NoInfer<T> = [T][T extends any ? 0 : any];
export declare type Prop<T, K> = K extends keyof T ? T[K] : never;
export interface UseMachineOptions<TContext, TEvent extends EventObject> {
    /**
     * If provided, will be merged with machine's `context`.
     */
    context?: Partial<TContext>;
    /**
     * The state to rehydrate the machine to. The machine will
     * start at this state instead of its `initialState`.
     */
    state?: StateConfig<TContext, TEvent>;
}
//# sourceMappingURL=types.d.ts.map