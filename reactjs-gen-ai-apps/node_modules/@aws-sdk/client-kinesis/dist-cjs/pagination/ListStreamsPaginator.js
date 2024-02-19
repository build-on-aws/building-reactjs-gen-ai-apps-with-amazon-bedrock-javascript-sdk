"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListStreams = void 0;
const ListStreamsCommand_1 = require("../commands/ListStreamsCommand");
const KinesisClient_1 = require("../KinesisClient");
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListStreamsCommand_1.ListStreamsCommand(input), ...args);
};
async function* paginateListStreams(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["Limit"] = config.pageSize;
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
exports.paginateListStreams = paginateListStreams;
