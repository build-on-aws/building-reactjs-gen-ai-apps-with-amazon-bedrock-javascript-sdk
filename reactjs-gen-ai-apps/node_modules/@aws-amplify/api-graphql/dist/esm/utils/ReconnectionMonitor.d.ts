import { Observer } from 'rxjs';
export declare enum ReconnectEvent {
    START_RECONNECT = "START_RECONNECT",
    HALT_RECONNECT = "HALT_RECONNECT"
}
/**
 * Captures the reconnect event logic used to determine when to reconnect to PubSub providers.
 *   Reconnnect attempts are delayed by 5 seconds to let the interface settle.
 *   Attempting to reconnect only once creates unrecoverable states when the network state isn't
 *   supported by the browser, so this keeps retrying every minute until halted.
 */
export declare class ReconnectionMonitor {
    private reconnectObservers;
    private reconnectIntervalId?;
    private reconnectSetTimeoutId?;
    /**
     * Add reconnect observer to the list of observers to alert on reconnect
     */
    addObserver(reconnectObserver: Observer<void>): void;
    /**
     * Given a reconnect event, start the appropriate behavior
     */
    record(event: ReconnectEvent): void;
    /**
     * Complete all reconnect observers
     */
    close(): void;
    private _triggerReconnect;
}
