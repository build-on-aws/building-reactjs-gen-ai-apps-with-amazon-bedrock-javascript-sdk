"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilStreamExists = exports.waitForStreamExists = void 0;
const util_waiter_1 = require("@smithy/util-waiter");
const DescribeStreamCommand_1 = require("../commands/DescribeStreamCommand");
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeStreamCommand_1.DescribeStreamCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.StreamDescription.StreamStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
const waitForStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStreamExists = waitForStreamExists;
const waitUntilStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilStreamExists = waitUntilStreamExists;
