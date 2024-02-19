"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStreamConsumers = void 0;
const ListStreamConsumersCommand_1 = require("../commands/ListStreamConsumersCommand");
const KinesisClient_1 = require("../KinesisClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListStreamConsumersCommand_1.ListStreamConsumersCommand(input), ...args);
};
async function* paginateListStreamConsumers(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof KinesisClient_1.KinesisClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected Kinesis | KinesisClient");
        }
        yield page;
        const prevToken = token;
        token = page.NextToken;
        hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
    }
    return undefined;
}
exports.paginateListStreamConsumers = paginateListStreamConsumers;
