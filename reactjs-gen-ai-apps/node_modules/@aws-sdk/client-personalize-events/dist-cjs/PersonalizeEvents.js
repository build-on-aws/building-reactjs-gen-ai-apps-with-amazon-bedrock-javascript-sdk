"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizeEvents = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const PutEventsCommand_1 = require("./commands/PutEventsCommand");
const PutItemsCommand_1 = require("./commands/PutItemsCommand");
const PutUsersCommand_1 = require("./commands/PutUsersCommand");
const PersonalizeEventsClient_1 = require("./PersonalizeEventsClient");
const commands = {
    PutEventsCommand: PutEventsCommand_1.PutEventsCommand,
    PutItemsCommand: PutItemsCommand_1.PutItemsCommand,
    PutUsersCommand: PutUsersCommand_1.PutUsersCommand,
};
class PersonalizeEvents extends PersonalizeEventsClient_1.PersonalizeEventsClient {
}
exports.PersonalizeEvents = PersonalizeEvents;
(0, smithy_client_1.createAggregatedClient)(commands, PersonalizeEvents);
