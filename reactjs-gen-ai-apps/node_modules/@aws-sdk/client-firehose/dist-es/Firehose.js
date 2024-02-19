import { createAggregatedClient } from "@smithy/smithy-client";
import { CreateDeliveryStreamCommand, } from "./commands/CreateDeliveryStreamCommand";
import { DeleteDeliveryStreamCommand, } from "./commands/DeleteDeliveryStreamCommand";
import { DescribeDeliveryStreamCommand, } from "./commands/DescribeDeliveryStreamCommand";
import { ListDeliveryStreamsCommand, } from "./commands/ListDeliveryStreamsCommand";
import { ListTagsForDeliveryStreamCommand, } from "./commands/ListTagsForDeliveryStreamCommand";
import { PutRecordBatchCommand, } from "./commands/PutRecordBatchCommand";
import { PutRecordCommand } from "./commands/PutRecordCommand";
import { StartDeliveryStreamEncryptionCommand, } from "./commands/StartDeliveryStreamEncryptionCommand";
import { StopDeliveryStreamEncryptionCommand, } from "./commands/StopDeliveryStreamEncryptionCommand";
import { TagDeliveryStreamCommand, } from "./commands/TagDeliveryStreamCommand";
import { UntagDeliveryStreamCommand, } from "./commands/UntagDeliveryStreamCommand";
import { UpdateDestinationCommand, } from "./commands/UpdateDestinationCommand";
import { FirehoseClient } from "./FirehoseClient";
const commands = {
    CreateDeliveryStreamCommand,
    DeleteDeliveryStreamCommand,
    DescribeDeliveryStreamCommand,
    ListDeliveryStreamsCommand,
    ListTagsForDeliveryStreamCommand,
    PutRecordCommand,
    PutRecordBatchCommand,
    StartDeliveryStreamEncryptionCommand,
    StopDeliveryStreamEncryptionCommand,
    TagDeliveryStreamCommand,
    UntagDeliveryStreamCommand,
    UpdateDestinationCommand,
};
export class Firehose extends FirehoseClient {
}
createAggregatedClient(commands, Firehose);
