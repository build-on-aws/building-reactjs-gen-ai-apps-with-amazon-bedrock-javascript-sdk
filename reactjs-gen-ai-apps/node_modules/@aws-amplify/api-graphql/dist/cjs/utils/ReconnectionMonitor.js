'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconnectionMonitor = exports.ReconnectEvent = void 0;
const constants_1 = require("../Providers/constants");
var ReconnectEvent;
(function (ReconnectEvent) {
    ReconnectEvent["START_RECONNECT"] = "START_RECONNECT";
    ReconnectEvent["HALT_RECONNECT"] = "HALT_RECONNECT";
})(ReconnectEvent = exports.ReconnectEvent || (exports.ReconnectEvent = {}));
/**
 * Captures the reconnect event logic used to determine when to reconnect to PubSub providers.
 *   Reconnnect attempts are delayed by 5 seconds to let the interface settle.
 *   Attempting to reconnect only once creates unrecoverable states when the network state isn't
 *   supported by the browser, so this keeps retrying every minute until halted.
 */
class ReconnectionMonitor {
    constructor() {
        this.reconnectObservers = [];
    }
    /**
     * Add reconnect observer to the list of observers to alert on reconnect
     */
    addObserver(reconnectObserver) {
        this.reconnectObservers.push(reconnectObserver);
    }
    /**
     * Given a reconnect event, start the appropriate behavior
     */
    record(event) {
        if (event === ReconnectEvent.START_RECONNECT) {
            // If the reconnection hasn't been started
            if (this.reconnectSetTimeoutId === undefined &&
                this.reconnectIntervalId === undefined) {
                this.reconnectSetTimeoutId = setTimeout(() => {
                    // Reconnect now
                    this._triggerReconnect();
                    // Retry reconnect every periodically until it works
                    this.reconnectIntervalId = setInterval(() => {
                        this._triggerReconnect();
                    }, constants_1.RECONNECT_INTERVAL);
                }, constants_1.RECONNECT_DELAY);
            }
        }
        if (event === ReconnectEvent.HALT_RECONNECT) {
            if (this.reconnectIntervalId) {
                clearInterval(this.reconnectIntervalId);
                this.reconnectIntervalId = undefined;
            }
            if (this.reconnectSetTimeoutId) {
                clearTimeout(this.reconnectSetTimeoutId);
                this.reconnectSetTimeoutId = undefined;
            }
        }
    }
    /**
     * Complete all reconnect observers
     */
    close() {
        this.reconnectObservers.forEach(reconnectObserver => {
            reconnectObserver.complete?.();
        });
    }
    _triggerReconnect() {
        this.reconnectObservers.forEach(reconnectObserver => {
            reconnectObserver.next?.();
        });
    }
}
exports.ReconnectionMonitor = ReconnectionMonitor;
//# sourceMappingURL=ReconnectionMonitor.js.map
