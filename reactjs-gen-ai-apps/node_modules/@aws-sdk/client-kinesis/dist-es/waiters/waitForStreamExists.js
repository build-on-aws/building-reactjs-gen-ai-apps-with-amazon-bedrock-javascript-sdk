import { checkExceptions, createWaiter, WaiterState } from "@smithy/util-waiter";
import { DescribeStreamCommand } from "../commands/DescribeStreamCommand";
const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeStreamCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.StreamDescription.StreamStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
    }
    return { state: WaiterState.RETRY, reason };
};
export const waitForStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    return createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
export const waitUntilStreamExists = async (params, input) => {
    const serviceDefaults = { minDelay: 10, maxDelay: 120 };
    const result = await createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return checkExceptions(result);
};
