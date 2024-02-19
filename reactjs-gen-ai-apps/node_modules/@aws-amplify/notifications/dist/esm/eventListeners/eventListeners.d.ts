import { EventListenerRemover, EventType } from './types';
export declare const notifyEventListeners: (type: EventType, ...args: any[]) => void;
export declare const notifyEventListenersAndAwaitHandlers: (type: EventType, ...args: any[]) => Promise<void[]>;
export declare const addEventListener: <EventHandler extends Function>(type: EventType, handler: EventHandler) => EventListenerRemover;
