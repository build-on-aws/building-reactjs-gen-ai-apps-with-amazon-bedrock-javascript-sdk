'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.RECONNECT_INTERVAL = exports.RECONNECT_DELAY = exports.DEFAULT_KEEP_ALIVE_ALERT_TIMEOUT = exports.DEFAULT_KEEP_ALIVE_TIMEOUT = exports.START_ACK_TIMEOUT = exports.CONNECTION_INIT_TIMEOUT = exports.AWS_APPSYNC_REALTIME_HEADERS = exports.SOCKET_STATUS = exports.SUBSCRIPTION_STATUS = exports.MESSAGE_TYPES = exports.CONNECTION_STATE_CHANGE = exports.NON_RETRYABLE_CODES = exports.MAX_DELAY_MS = exports.AMPLIFY_SYMBOL = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var utils_1 = require("@aws-amplify/core/internals/utils");
Object.defineProperty(exports, "AMPLIFY_SYMBOL", { enumerable: true, get: function () { return utils_1.AMPLIFY_SYMBOL; } });
exports.MAX_DELAY_MS = 5000;
exports.NON_RETRYABLE_CODES = [400, 401, 403];
exports.CONNECTION_STATE_CHANGE = 'ConnectionStateChange';
(function (MESSAGE_TYPES) {
    /**
     * Client -> Server message.
     * This message type is the first message after handshake and this will initialize AWS AppSync RealTime communication
     */
    MESSAGE_TYPES["GQL_CONNECTION_INIT"] = "connection_init";
    /**
     * Server -> Client message
     * This message type is in case there is an issue with AWS AppSync RealTime when establishing connection
     */
    MESSAGE_TYPES["GQL_CONNECTION_ERROR"] = "connection_error";
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_CONNECTION_INIT message
     */
    MESSAGE_TYPES["GQL_CONNECTION_ACK"] = "connection_ack";
    /**
     * Client -> Server message.
     * This message type is for register subscriptions with AWS AppSync RealTime
     */
    MESSAGE_TYPES["GQL_START"] = "start";
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_START message
     */
    MESSAGE_TYPES["GQL_START_ACK"] = "start_ack";
    /**
     * Server -> Client message.
     * This message type is for subscription message from AWS AppSync RealTime
     */
    MESSAGE_TYPES["GQL_DATA"] = "data";
    /**
     * Server -> Client message.
     * This message type helps the client to know is still receiving messages from AWS AppSync RealTime
     */
    MESSAGE_TYPES["GQL_CONNECTION_KEEP_ALIVE"] = "ka";
    /**
     * Client -> Server message.
     * This message type is for unregister subscriptions with AWS AppSync RealTime
     */
    MESSAGE_TYPES["GQL_STOP"] = "stop";
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_STOP message
     */
    MESSAGE_TYPES["GQL_COMPLETE"] = "complete";
    /**
     * Server -> Client message.
     * This message type is for sending error messages from AWS AppSync RealTime to the client
     */
    MESSAGE_TYPES["GQL_ERROR"] = "error";
})(exports.MESSAGE_TYPES || (exports.MESSAGE_TYPES = {}));
(function (SUBSCRIPTION_STATUS) {
    SUBSCRIPTION_STATUS[SUBSCRIPTION_STATUS["PENDING"] = 0] = "PENDING";
    SUBSCRIPTION_STATUS[SUBSCRIPTION_STATUS["CONNECTED"] = 1] = "CONNECTED";
    SUBSCRIPTION_STATUS[SUBSCRIPTION_STATUS["FAILED"] = 2] = "FAILED";
})(exports.SUBSCRIPTION_STATUS || (exports.SUBSCRIPTION_STATUS = {}));
(function (SOCKET_STATUS) {
    SOCKET_STATUS[SOCKET_STATUS["CLOSED"] = 0] = "CLOSED";
    SOCKET_STATUS[SOCKET_STATUS["READY"] = 1] = "READY";
    SOCKET_STATUS[SOCKET_STATUS["CONNECTING"] = 2] = "CONNECTING";
})(exports.SOCKET_STATUS || (exports.SOCKET_STATUS = {}));
exports.AWS_APPSYNC_REALTIME_HEADERS = {
    accept: 'application/json, text/javascript',
    'content-encoding': 'amz-1.0',
    'content-type': 'application/json; charset=UTF-8',
};
/**
 * Time in milleseconds to wait for GQL_CONNECTION_INIT message
 */
exports.CONNECTION_INIT_TIMEOUT = 15000;
/**
 * Time in milleseconds to wait for GQL_START_ACK message
 */
exports.START_ACK_TIMEOUT = 15000;
/**
 * Default Time in milleseconds to wait for GQL_CONNECTION_KEEP_ALIVE message
 */
exports.DEFAULT_KEEP_ALIVE_TIMEOUT = 5 * 60 * 1000;
/**
 * Default Time in milleseconds to alert for missed GQL_CONNECTION_KEEP_ALIVE message
 */
exports.DEFAULT_KEEP_ALIVE_ALERT_TIMEOUT = 65 * 1000;
/**
 * Default delay time in milleseconds between when reconnect is triggered vs when it is attempted
 */
exports.RECONNECT_DELAY = 5 * 1000;
/**
 * Default interval time in milleseconds between when reconnect is re-attempted
 */
exports.RECONNECT_INTERVAL = 60 * 1000;
//# sourceMappingURL=constants.js.map
