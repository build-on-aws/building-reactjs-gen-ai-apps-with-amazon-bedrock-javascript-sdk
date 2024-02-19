import { createAggregatedClient } from "@smithy/smithy-client";
import { AddTagsToStreamCommand, } from "./commands/AddTagsToStreamCommand";
import { CreateStreamCommand, } from "./commands/CreateStreamCommand";
import { DecreaseStreamRetentionPeriodCommand, } from "./commands/DecreaseStreamRetentionPeriodCommand";
import { DeleteStreamCommand, } from "./commands/DeleteStreamCommand";
import { DeregisterStreamConsumerCommand, } from "./commands/DeregisterStreamConsumerCommand";
import { DescribeLimitsCommand, } from "./commands/DescribeLimitsCommand";
import { DescribeStreamCommand, } from "./commands/DescribeStreamCommand";
import { DescribeStreamConsumerCommand, } from "./commands/DescribeStreamConsumerCommand";
import { DescribeStreamSummaryCommand, } from "./commands/DescribeStreamSummaryCommand";
import { DisableEnhancedMonitoringCommand, } from "./commands/DisableEnhancedMonitoringCommand";
import { EnableEnhancedMonitoringCommand, } from "./commands/EnableEnhancedMonitoringCommand";
import { GetRecordsCommand } from "./commands/GetRecordsCommand";
import { GetShardIteratorCommand, } from "./commands/GetShardIteratorCommand";
import { IncreaseStreamRetentionPeriodCommand, } from "./commands/IncreaseStreamRetentionPeriodCommand";
import { ListShardsCommand } from "./commands/ListShardsCommand";
import { ListStreamConsumersCommand, } from "./commands/ListStreamConsumersCommand";
import { ListStreamsCommand } from "./commands/ListStreamsCommand";
import { ListTagsForStreamCommand, } from "./commands/ListTagsForStreamCommand";
import { MergeShardsCommand } from "./commands/MergeShardsCommand";
import { PutRecordCommand } from "./commands/PutRecordCommand";
import { PutRecordsCommand } from "./commands/PutRecordsCommand";
import { RegisterStreamConsumerCommand, } from "./commands/RegisterStreamConsumerCommand";
import { RemoveTagsFromStreamCommand, } from "./commands/RemoveTagsFromStreamCommand";
import { SplitShardCommand } from "./commands/SplitShardCommand";
import { StartStreamEncryptionCommand, } from "./commands/StartStreamEncryptionCommand";
import { StopStreamEncryptionCommand, } from "./commands/StopStreamEncryptionCommand";
import { SubscribeToShardCommand, } from "./commands/SubscribeToShardCommand";
import { UpdateShardCountCommand, } from "./commands/UpdateShardCountCommand";
import { UpdateStreamModeCommand, } from "./commands/UpdateStreamModeCommand";
import { KinesisClient } from "./KinesisClient";
const commands = {
    AddTagsToStreamCommand,
    CreateStreamCommand,
    DecreaseStreamRetentionPeriodCommand,
    DeleteStreamCommand,
    DeregisterStreamConsumerCommand,
    DescribeLimitsCommand,
    DescribeStreamCommand,
    DescribeStreamConsumerCommand,
    DescribeStreamSummaryCommand,
    DisableEnhancedMonitoringCommand,
    EnableEnhancedMonitoringCommand,
    GetRecordsCommand,
    GetShardIteratorCommand,
    IncreaseStreamRetentionPeriodCommand,
    ListShardsCommand,
    ListStreamConsumersCommand,
    ListStreamsCommand,
    ListTagsForStreamCommand,
    MergeShardsCommand,
    PutRecordCommand,
    PutRecordsCommand,
    RegisterStreamConsumerCommand,
    RemoveTagsFromStreamCommand,
    SplitShardCommand,
    StartStreamEncryptionCommand,
    StopStreamEncryptionCommand,
    SubscribeToShardCommand,
    UpdateShardCountCommand,
    UpdateStreamModeCommand,
};
export class Kinesis extends KinesisClient {
}
createAggregatedClient(commands, Kinesis);
