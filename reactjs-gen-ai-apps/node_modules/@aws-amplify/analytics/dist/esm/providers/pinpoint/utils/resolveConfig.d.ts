/**
 * @internal
 */
export declare const resolveConfig: () => {
    appId: string;
    region: string;
    bufferSize: number | undefined;
    flushSize: number | undefined;
    flushInterval: number | undefined;
    resendLimit: number | undefined;
};
