import { createAggregatedClient } from "@smithy/smithy-client";
import { PutEventsCommand } from "./commands/PutEventsCommand";
import { PutItemsCommand } from "./commands/PutItemsCommand";
import { PutUsersCommand } from "./commands/PutUsersCommand";
import { PersonalizeEventsClient } from "./PersonalizeEventsClient";
const commands = {
    PutEventsCommand,
    PutItemsCommand,
    PutUsersCommand,
};
export class PersonalizeEvents extends PersonalizeEventsClient {
}
createAggregatedClient(commands, PersonalizeEvents);
