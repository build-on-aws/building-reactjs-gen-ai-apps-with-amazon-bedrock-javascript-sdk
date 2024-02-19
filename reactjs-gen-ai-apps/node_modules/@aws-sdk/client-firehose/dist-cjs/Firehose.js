"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Firehose = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const CreateDeliveryStreamCommand_1 = require("./commands/CreateDeliveryStreamCommand");
const DeleteDeliveryStreamCommand_1 = require("./commands/DeleteDeliveryStreamCommand");
const DescribeDeliveryStreamCommand_1 = require("./commands/DescribeDeliveryStreamCommand");
const ListDeliveryStreamsCommand_1 = require("./commands/ListDeliveryStreamsCommand");
const ListTagsForDeliveryStreamCommand_1 = require("./commands/ListTagsForDeliveryStreamCommand");
const PutRecordBatchCommand_1 = require("./commands/PutRecordBatchCommand");
const PutRecordCommand_1 = require("./commands/PutRecordCommand");
const StartDeliveryStreamEncryptionCommand_1 = require("./commands/StartDeliveryStreamEncryptionCommand");
const StopDeliveryStreamEncryptionCommand_1 = require("./commands/StopDeliveryStreamEncryptionCommand");
const TagDeliveryStreamCommand_1 = require("./commands/TagDeliveryStreamCommand");
const UntagDeliveryStreamCommand_1 = require("./commands/UntagDeliveryStreamCommand");
const UpdateDestinationCommand_1 = require("./commands/UpdateDestinationCommand");
const FirehoseClient_1 = require("./FirehoseClient");
const commands = {
    CreateDeliveryStreamCommand: CreateDeliveryStreamCommand_1.CreateDeliveryStreamCommand,
    DeleteDeliveryStreamCommand: DeleteDeliveryStreamCommand_1.DeleteDeliveryStreamCommand,
    DescribeDeliveryStreamCommand: DescribeDeliveryStreamCommand_1.DescribeDeliveryStreamCommand,
    ListDeliveryStreamsCommand: ListDeliveryStreamsCommand_1.ListDeliveryStreamsCommand,
    ListTagsForDeliveryStreamCommand: ListTagsForDeliveryStreamCommand_1.ListTagsForDeliveryStreamCommand,
    PutRecordCommand: PutRecordCommand_1.PutRecordCommand,
    PutRecordBatchCommand: PutRecordBatchCommand_1.PutRecordBatchCommand,
    StartDeliveryStreamEncryptionCommand: StartDeliveryStreamEncryptionCommand_1.StartDeliveryStreamEncryptionCommand,
    StopDeliveryStreamEncryptionCommand: StopDeliveryStreamEncryptionCommand_1.StopDeliveryStreamEncryptionCommand,
    TagDeliveryStreamCommand: TagDeliveryStreamCommand_1.TagDeliveryStreamCommand,
    UntagDeliveryStreamCommand: UntagDeliveryStreamCommand_1.UntagDeliveryStreamCommand,
    UpdateDestinationCommand: UpdateDestinationCommand_1.UpdateDestinationCommand,
};
class Firehose extends FirehoseClient_1.FirehoseClient {
}
exports.Firehose = Firehose;
(0, smithy_client_1.createAggregatedClient)(commands, Firehose);
