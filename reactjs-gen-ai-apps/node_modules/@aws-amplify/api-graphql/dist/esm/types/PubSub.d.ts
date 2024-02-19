import { Observer } from 'rxjs';
export interface SubscriptionObserver<T> {
    closed: boolean;
    next(value: T): void;
    error(errorValue: any): void;
    complete(): void;
}
export declare enum CONTROL_MSG {
    CONNECTION_CLOSED = "Connection closed",
    CONNECTION_FAILED = "Connection failed",
    REALTIME_SUBSCRIPTION_INIT_ERROR = "AppSync Realtime subscription init error",
    SUBSCRIPTION_ACK = "Subscription ack",
    TIMEOUT_DISCONNECT = "Timeout disconnect"
}
/** @enum {string} */
export declare enum ConnectionState {
    Connected = "Connected",
    ConnectedPendingNetwork = "ConnectedPendingNetwork",
    ConnectionDisrupted = "ConnectionDisrupted",
    ConnectionDisruptedPendingNetwork = "ConnectionDisruptedPendingNetwork",
    Connecting = "Connecting",
    ConnectedPendingDisconnect = "ConnectedPendingDisconnect",
    Disconnected = "Disconnected",
    ConnectedPendingKeepAlive = "ConnectedPendingKeepAlive"
}
export type PubSubContent = Record<string, unknown>;
export type PubSubContentObserver = Observer<PubSubContent>;
