export { AMPLIFY_SYMBOL } from '@aws-amplify/core/internals/utils';
export declare const MAX_DELAY_MS = 5000;
export declare const NON_RETRYABLE_CODES: number[];
export declare const CONNECTION_STATE_CHANGE = "ConnectionStateChange";
export declare enum MESSAGE_TYPES {
    /**
     * Client -> Server message.
     * This message type is the first message after handshake and this will initialize AWS AppSync RealTime communication
     */
    GQL_CONNECTION_INIT = "connection_init",
    /**
     * Server -> Client message
     * This message type is in case there is an issue with AWS AppSync RealTime when establishing connection
     */
    GQL_CONNECTION_ERROR = "connection_error",
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_CONNECTION_INIT message
     */
    GQL_CONNECTION_ACK = "connection_ack",
    /**
     * Client -> Server message.
     * This message type is for register subscriptions with AWS AppSync RealTime
     */
    GQL_START = "start",
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_START message
     */
    GQL_START_ACK = "start_ack",
    /**
     * Server -> Client message.
     * This message type is for subscription message from AWS AppSync RealTime
     */
    GQL_DATA = "data",
    /**
     * Server -> Client message.
     * This message type helps the client to know is still receiving messages from AWS AppSync RealTime
     */
    GQL_CONNECTION_KEEP_ALIVE = "ka",
    /**
     * Client -> Server message.
     * This message type is for unregister subscriptions with AWS AppSync RealTime
     */
    GQL_STOP = "stop",
    /**
     * Server -> Client message.
     * This message type is for the ack response from AWS AppSync RealTime for GQL_STOP message
     */
    GQL_COMPLETE = "complete",
    /**
     * Server -> Client message.
     * This message type is for sending error messages from AWS AppSync RealTime to the client
     */
    GQL_ERROR = "error"
}
export declare enum SUBSCRIPTION_STATUS {
    PENDING = 0,
    CONNECTED = 1,
    FAILED = 2
}
export declare enum SOCKET_STATUS {
    CLOSED = 0,
    READY = 1,
    CONNECTING = 2
}
export declare const AWS_APPSYNC_REALTIME_HEADERS: {
    accept: string;
    'content-encoding': string;
    'content-type': string;
};
/**
 * Time in milleseconds to wait for GQL_CONNECTION_INIT message
 */
export declare const CONNECTION_INIT_TIMEOUT = 15000;
/**
 * Time in milleseconds to wait for GQL_START_ACK message
 */
export declare const START_ACK_TIMEOUT = 15000;
/**
 * Default Time in milleseconds to wait for GQL_CONNECTION_KEEP_ALIVE message
 */
export declare const DEFAULT_KEEP_ALIVE_TIMEOUT: number;
/**
 * Default Time in milleseconds to alert for missed GQL_CONNECTION_KEEP_ALIVE message
 */
export declare const DEFAULT_KEEP_ALIVE_ALERT_TIMEOUT: number;
/**
 * Default delay time in milleseconds between when reconnect is triggered vs when it is attempted
 */
export declare const RECONNECT_DELAY: number;
/**
 * Default interval time in milleseconds between when reconnect is re-attempted
 */
export declare const RECONNECT_INTERVAL: number;
