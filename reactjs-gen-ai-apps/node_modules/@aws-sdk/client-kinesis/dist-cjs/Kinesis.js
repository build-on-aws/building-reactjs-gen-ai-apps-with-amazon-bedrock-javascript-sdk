"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kinesis = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const AddTagsToStreamCommand_1 = require("./commands/AddTagsToStreamCommand");
const CreateStreamCommand_1 = require("./commands/CreateStreamCommand");
const DecreaseStreamRetentionPeriodCommand_1 = require("./commands/DecreaseStreamRetentionPeriodCommand");
const DeleteStreamCommand_1 = require("./commands/DeleteStreamCommand");
const DeregisterStreamConsumerCommand_1 = require("./commands/DeregisterStreamConsumerCommand");
const DescribeLimitsCommand_1 = require("./commands/DescribeLimitsCommand");
const DescribeStreamCommand_1 = require("./commands/DescribeStreamCommand");
const DescribeStreamConsumerCommand_1 = require("./commands/DescribeStreamConsumerCommand");
const DescribeStreamSummaryCommand_1 = require("./commands/DescribeStreamSummaryCommand");
const DisableEnhancedMonitoringCommand_1 = require("./commands/DisableEnhancedMonitoringCommand");
const EnableEnhancedMonitoringCommand_1 = require("./commands/EnableEnhancedMonitoringCommand");
const GetRecordsCommand_1 = require("./commands/GetRecordsCommand");
const GetShardIteratorCommand_1 = require("./commands/GetShardIteratorCommand");
const IncreaseStreamRetentionPeriodCommand_1 = require("./commands/IncreaseStreamRetentionPeriodCommand");
const ListShardsCommand_1 = require("./commands/ListShardsCommand");
const ListStreamConsumersCommand_1 = require("./commands/ListStreamConsumersCommand");
const ListStreamsCommand_1 = require("./commands/ListStreamsCommand");
const ListTagsForStreamCommand_1 = require("./commands/ListTagsForStreamCommand");
const MergeShardsCommand_1 = require("./commands/MergeShardsCommand");
const PutRecordCommand_1 = require("./commands/PutRecordCommand");
const PutRecordsCommand_1 = require("./commands/PutRecordsCommand");
const RegisterStreamConsumerCommand_1 = require("./commands/RegisterStreamConsumerCommand");
const RemoveTagsFromStreamCommand_1 = require("./commands/RemoveTagsFromStreamCommand");
const SplitShardCommand_1 = require("./commands/SplitShardCommand");
const StartStreamEncryptionCommand_1 = require("./commands/StartStreamEncryptionCommand");
const StopStreamEncryptionCommand_1 = require("./commands/StopStreamEncryptionCommand");
const SubscribeToShardCommand_1 = require("./commands/SubscribeToShardCommand");
const UpdateShardCountCommand_1 = require("./commands/UpdateShardCountCommand");
const UpdateStreamModeCommand_1 = require("./commands/UpdateStreamModeCommand");
const KinesisClient_1 = require("./KinesisClient");
const commands = {
    AddTagsToStreamCommand: AddTagsToStreamCommand_1.AddTagsToStreamCommand,
    CreateStreamCommand: CreateStreamCommand_1.CreateStreamCommand,
    DecreaseStreamRetentionPeriodCommand: DecreaseStreamRetentionPeriodCommand_1.DecreaseStreamRetentionPeriodCommand,
    DeleteStreamCommand: DeleteStreamCommand_1.DeleteStreamCommand,
    DeregisterStreamConsumerCommand: DeregisterStreamConsumerCommand_1.DeregisterStreamConsumerCommand,
    DescribeLimitsCommand: DescribeLimitsCommand_1.DescribeLimitsCommand,
    DescribeStreamCommand: DescribeStreamCommand_1.DescribeStreamCommand,
    DescribeStreamConsumerCommand: DescribeStreamConsumerCommand_1.DescribeStreamConsumerCommand,
    DescribeStreamSummaryCommand: DescribeStreamSummaryCommand_1.DescribeStreamSummaryCommand,
    DisableEnhancedMonitoringCommand: DisableEnhancedMonitoringCommand_1.DisableEnhancedMonitoringCommand,
    EnableEnhancedMonitoringCommand: EnableEnhancedMonitoringCommand_1.EnableEnhancedMonitoringCommand,
    GetRecordsCommand: GetRecordsCommand_1.GetRecordsCommand,
    GetShardIteratorCommand: GetShardIteratorCommand_1.GetShardIteratorCommand,
    IncreaseStreamRetentionPeriodCommand: IncreaseStreamRetentionPeriodCommand_1.IncreaseStreamRetentionPeriodCommand,
    ListShardsCommand: ListShardsCommand_1.ListShardsCommand,
    ListStreamConsumersCommand: ListStreamConsumersCommand_1.ListStreamConsumersCommand,
    ListStreamsCommand: ListStreamsCommand_1.ListStreamsCommand,
    ListTagsForStreamCommand: ListTagsForStreamCommand_1.ListTagsForStreamCommand,
    MergeShardsCommand: MergeShardsCommand_1.MergeShardsCommand,
    PutRecordCommand: PutRecordCommand_1.PutRecordCommand,
    PutRecordsCommand: PutRecordsCommand_1.PutRecordsCommand,
    RegisterStreamConsumerCommand: RegisterStreamConsumerCommand_1.RegisterStreamConsumerCommand,
    RemoveTagsFromStreamCommand: RemoveTagsFromStreamCommand_1.RemoveTagsFromStreamCommand,
    SplitShardCommand: SplitShardCommand_1.SplitShardCommand,
    StartStreamEncryptionCommand: StartStreamEncryptionCommand_1.StartStreamEncryptionCommand,
    StopStreamEncryptionCommand: StopStreamEncryptionCommand_1.StopStreamEncryptionCommand,
    SubscribeToShardCommand: SubscribeToShardCommand_1.SubscribeToShardCommand,
    UpdateShardCountCommand: UpdateShardCountCommand_1.UpdateShardCountCommand,
    UpdateStreamModeCommand: UpdateStreamModeCommand_1.UpdateStreamModeCommand,
};
class Kinesis extends KinesisClient_1.KinesisClient {
}
exports.Kinesis = Kinesis;
(0, smithy_client_1.createAggregatedClient)(commands, Kinesis);
