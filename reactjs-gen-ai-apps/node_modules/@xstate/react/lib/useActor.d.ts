import { ActorRef, EventObject, Sender } from 'xstate';
export declare function isActorWithState<T extends ActorRef<any>>(actorRef: T): actorRef is T & {
    state: any;
};
declare type EmittedFromActorRef<TActor extends ActorRef<any, any>> = TActor extends ActorRef<any, infer TEmitted> ? TEmitted : never;
export declare function useActor<TActor extends ActorRef<any, any>>(actorRef: TActor, getSnapshot?: (actor: TActor) => EmittedFromActorRef<TActor>): [EmittedFromActorRef<TActor>, TActor['send']];
export declare function useActor<TEvent extends EventObject, TEmitted>(actorRef: ActorRef<TEvent, TEmitted>, getSnapshot?: (actor: ActorRef<TEvent, TEmitted>) => TEmitted): [TEmitted, Sender<TEvent>];
export {};
//# sourceMappingURL=useActor.d.ts.map