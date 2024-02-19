'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionStateMonitor = exports.CONNECTION_CHANGE = void 0;
const rxjs_1 = require("rxjs");
const PubSub_1 = require("../types/PubSub");
const ReachabilityMonitor_1 = require("./ReachabilityMonitor");
exports.CONNECTION_CHANGE = {
    KEEP_ALIVE_MISSED: { keepAliveState: 'unhealthy' },
    KEEP_ALIVE: { keepAliveState: 'healthy' },
    CONNECTION_ESTABLISHED: { connectionState: 'connected' },
    CONNECTION_FAILED: {
        intendedConnectionState: 'disconnected',
        connectionState: 'disconnected',
    },
    CLOSING_CONNECTION: { intendedConnectionState: 'disconnected' },
    OPENING_CONNECTION: {
        intendedConnectionState: 'connected',
        connectionState: 'connecting',
    },
    CLOSED: { connectionState: 'disconnected' },
    ONLINE: { networkState: 'connected' },
    OFFLINE: { networkState: 'disconnected' },
};
class ConnectionStateMonitor {
    constructor() {
        this._networkMonitoringSubscription = undefined;
        this._linkedConnectionState = {
            networkState: 'connected',
            connectionState: 'disconnected',
            intendedConnectionState: 'disconnected',
            keepAliveState: 'healthy',
        };
        // Attempt to update the state with the current actual network state
        this._initialNetworkStateSubscription = (0, ReachabilityMonitor_1.ReachabilityMonitor)().subscribe(({ online }) => {
            this.record(online ? exports.CONNECTION_CHANGE.ONLINE : exports.CONNECTION_CHANGE.OFFLINE);
            this._initialNetworkStateSubscription?.unsubscribe();
        });
        this._linkedConnectionStateObservable =
            new rxjs_1.Observable(connectionStateObserver => {
                connectionStateObserver.next(this._linkedConnectionState);
                this._linkedConnectionStateObserver = connectionStateObserver;
            });
    }
    /**
     * Turn network state monitoring on if it isn't on already
     */
    enableNetworkMonitoring() {
        // If no initial network state was discovered, stop trying
        this._initialNetworkStateSubscription?.unsubscribe();
        // Maintain the network state based on the reachability monitor
        if (this._networkMonitoringSubscription === undefined) {
            this._networkMonitoringSubscription = (0, ReachabilityMonitor_1.ReachabilityMonitor)().subscribe(({ online }) => {
                this.record(online ? exports.CONNECTION_CHANGE.ONLINE : exports.CONNECTION_CHANGE.OFFLINE);
            });
        }
    }
    /**
     * Turn network state monitoring off if it isn't off already
     */
    disableNetworkMonitoring() {
        this._networkMonitoringSubscription?.unsubscribe();
        this._networkMonitoringSubscription = undefined;
    }
    /**
     * Get the observable that allows us to monitor the connection state
     *
     * @returns {Observable<ConnectionState>} - The observable that emits ConnectionState updates
     */
    get connectionStateObservable() {
        let previous;
        // The linked state aggregates state changes to any of the network, connection,
        // intendedConnection and keepAliveHealth. Some states will change these independent
        // states without changing the overall connection state.
        // After translating from linked states to ConnectionState, then remove any duplicates
        return this._linkedConnectionStateObservable
            .pipe((0, rxjs_1.map)(value => {
            return this.connectionStatesTranslator(value);
        }))
            .pipe((0, rxjs_1.filter)(current => {
            const toInclude = current !== previous;
            previous = current;
            return toInclude;
        }));
    }
    /*
     * Updates local connection state and emits the full state to the observer.
     */
    record(statusUpdates) {
        // Maintain the network monitor
        if (statusUpdates.intendedConnectionState === 'connected') {
            this.enableNetworkMonitoring();
        }
        else if (statusUpdates.intendedConnectionState === 'disconnected') {
            this.disableNetworkMonitoring();
        }
        // Maintain the socket state
        const newSocketStatus = {
            ...this._linkedConnectionState,
            ...statusUpdates,
        };
        this._linkedConnectionState = { ...newSocketStatus };
        this._linkedConnectionStateObserver?.next(this._linkedConnectionState);
    }
    /*
     * Translate the ConnectionState structure into a specific ConnectionState string literal union
     */
    connectionStatesTranslator({ connectionState, networkState, intendedConnectionState, keepAliveState, }) {
        if (connectionState === 'connected' && networkState === 'disconnected')
            return PubSub_1.ConnectionState.ConnectedPendingNetwork;
        if (connectionState === 'connected' &&
            intendedConnectionState === 'disconnected')
            return PubSub_1.ConnectionState.ConnectedPendingDisconnect;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected' &&
            networkState === 'disconnected')
            return PubSub_1.ConnectionState.ConnectionDisruptedPendingNetwork;
        if (connectionState === 'disconnected' &&
            intendedConnectionState === 'connected')
            return PubSub_1.ConnectionState.ConnectionDisrupted;
        if (connectionState === 'connected' && keepAliveState === 'unhealthy')
            return PubSub_1.ConnectionState.ConnectedPendingKeepAlive;
        // All remaining states directly correspond to the connection state
        if (connectionState === 'connecting')
            return PubSub_1.ConnectionState.Connecting;
        if (connectionState === 'disconnected')
            return PubSub_1.ConnectionState.Disconnected;
        return PubSub_1.ConnectionState.Connected;
    }
}
exports.ConnectionStateMonitor = ConnectionStateMonitor;
//# sourceMappingURL=ConnectionStateMonitor.js.map
