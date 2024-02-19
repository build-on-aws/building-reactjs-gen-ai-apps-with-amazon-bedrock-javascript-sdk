import { ListStreamConsumersCommand, } from "../commands/ListStreamConsumersCommand";
import { KinesisClient } from "../KinesisClient";
const makePagedClientRequest = async (client, input, ...args) => {
    return await client.send(new ListStreamConsumersCommand(input), ...args);
};
export async function* paginateListStreamConsumers(config, input, ...additionalArguments) {
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof KinesisClient) {
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
