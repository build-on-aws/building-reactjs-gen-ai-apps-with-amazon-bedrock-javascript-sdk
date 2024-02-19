'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionState = exports.CONTROL_MSG = void 0;
(function (CONTROL_MSG) {
    CONTROL_MSG["CONNECTION_CLOSED"] = "Connection closed";
    CONTROL_MSG["CONNECTION_FAILED"] = "Connection failed";
    CONTROL_MSG["REALTIME_SUBSCRIPTION_INIT_ERROR"] = "AppSync Realtime subscription init error";
    CONTROL_MSG["SUBSCRIPTION_ACK"] = "Subscription ack";
    CONTROL_MSG["TIMEOUT_DISCONNECT"] = "Timeout disconnect";
})(exports.CONTROL_MSG || (exports.CONTROL_MSG = {}));
(function (ConnectionState) {
    /*
     * The connection is alive and healthy
     */
    ConnectionState["Connected"] = "Connected";
    /*
     * The connection is alive, but the connection is offline
     */
    ConnectionState["ConnectedPendingNetwork"] = "ConnectedPendingNetwork";
    /*
     * The connection has been disconnected while in use
     */
    ConnectionState["ConnectionDisrupted"] = "ConnectionDisrupted";
    /*
     * The connection has been disconnected and the network is offline
     */
    ConnectionState["ConnectionDisruptedPendingNetwork"] = "ConnectionDisruptedPendingNetwork";
    /*
     * The connection is in the process of connecting
     */
    ConnectionState["Connecting"] = "Connecting";
    /*
     * The connection is not in use and is being disconnected
     */
    ConnectionState["ConnectedPendingDisconnect"] = "ConnectedPendingDisconnect";
    /*
     * The connection is not in use and has been disconnected
     */
    ConnectionState["Disconnected"] = "Disconnected";
    /*
     * The connection is alive, but a keep alive message has been missed
     */
    ConnectionState["ConnectedPendingKeepAlive"] = "ConnectedPendingKeepAlive";
})(exports.ConnectionState || (exports.ConnectionState = {}));
//# sourceMappingURL=PubSub.js.map
