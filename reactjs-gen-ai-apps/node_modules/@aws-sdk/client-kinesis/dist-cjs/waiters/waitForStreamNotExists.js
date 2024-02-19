"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilStreamNotExists = exports.waitForStreamNotExists = void 0;
const util_waiter_1 = require("@smithy/util-waiter");
const DescribeStreamCommand_1 = require("../commands/DescribeStreamCommand");
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeStreamCommand_1.DescribeStreamCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
const waitForStreamNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForStreamNotExists = waitForStreamNotExists;
const waitUntilStreamNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await (0, util_waiter_1.createWaiter)({ ...serviceDefaults, ...params }, input, checkState);
    return (0, util_waiter_1.checkExceptions)(result);
};
exports.waitUntilStreamNotExists = waitUntilStreamNotExists;
