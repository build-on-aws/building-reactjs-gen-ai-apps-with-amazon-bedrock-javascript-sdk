import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
import {
  AddTagsToStreamCommandInput,
  AddTagsToStreamCommandOutput,
} from "./commands/AddTagsToStreamCommand";
import {
  CreateStreamCommandInput,
  CreateStreamCommandOutput,
} from "./commands/CreateStreamCommand";
import {
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
} from "./commands/DecreaseStreamRetentionPeriodCommand";
import {
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
} from "./commands/DeleteStreamCommand";
import {
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput,
} from "./commands/DeregisterStreamConsumerCommand";
import {
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
} from "./commands/DescribeLimitsCommand";
import {
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
} from "./commands/DescribeStreamCommand";
import {
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput,
} from "./commands/DescribeStreamConsumerCommand";
import {
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
} from "./commands/DescribeStreamSummaryCommand";
import {
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
} from "./commands/DisableEnhancedMonitoringCommand";
import {
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
} from "./commands/EnableEnhancedMonitoringCommand";
import {
  GetRecordsCommandInput,
  GetRecordsCommandOutput,
} from "./commands/GetRecordsCommand";
import {
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput,
} from "./commands/GetShardIteratorCommand";
import {
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput,
} from "./commands/IncreaseStreamRetentionPeriodCommand";
import {
  ListShardsCommandInput,
  ListShardsCommandOutput,
} from "./commands/ListShardsCommand";
import {
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "./commands/ListStreamConsumersCommand";
import {
  ListStreamsCommandInput,
  ListStreamsCommandOutput,
} from "./commands/ListStreamsCommand";
import {
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput,
} from "./commands/ListTagsForStreamCommand";
import {
  MergeShardsCommandInput,
  MergeShardsCommandOutput,
} from "./commands/MergeShardsCommand";
import {
  PutRecordCommandInput,
  PutRecordCommandOutput,
} from "./commands/PutRecordCommand";
import {
  PutRecordsCommandInput,
  PutRecordsCommandOutput,
} from "./commands/PutRecordsCommand";
import {
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput,
} from "./commands/RegisterStreamConsumerCommand";
import {
  RemoveTagsFromStreamCommandInput,
  RemoveTagsFromStreamCommandOutput,
} from "./commands/RemoveTagsFromStreamCommand";
import {
  SplitShardCommandInput,
  SplitShardCommandOutput,
} from "./commands/SplitShardCommand";
import {
  StartStreamEncryptionCommandInput,
  StartStreamEncryptionCommandOutput,
} from "./commands/StartStreamEncryptionCommand";
import {
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput,
} from "./commands/StopStreamEncryptionCommand";
import {
  SubscribeToShardCommandInput,
  SubscribeToShardCommandOutput,
} from "./commands/SubscribeToShardCommand";
import {
  UpdateShardCountCommandInput,
  UpdateShardCountCommandOutput,
} from "./commands/UpdateShardCountCommand";
import {
  UpdateStreamModeCommandInput,
  UpdateStreamModeCommandOutput,
} from "./commands/UpdateStreamModeCommand";
import { KinesisClient } from "./KinesisClient";
export interface Kinesis {
  addTagsToStream(
    args: AddTagsToStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToStreamCommandOutput>;
  addTagsToStream(
    args: AddTagsToStreamCommandInput,
    cb: (err: any, data?: AddTagsToStreamCommandOutput) => void
  ): void;
  addTagsToStream(
    args: AddTagsToStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToStreamCommandOutput) => void
  ): void;
  createStream(
    args: CreateStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamCommandOutput>;
  createStream(
    args: CreateStreamCommandInput,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;
  createStream(
    args: CreateStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamCommandOutput) => void
  ): void;
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecreaseStreamRetentionPeriodCommandOutput>;
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodCommandInput,
    cb: (err: any, data?: DecreaseStreamRetentionPeriodCommandOutput) => void
  ): void;
  decreaseStreamRetentionPeriod(
    args: DecreaseStreamRetentionPeriodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecreaseStreamRetentionPeriodCommandOutput) => void
  ): void;
  deleteStream(
    args: DeleteStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamCommandOutput>;
  deleteStream(
    args: DeleteStreamCommandInput,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;
  deleteStream(
    args: DeleteStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamCommandOutput) => void
  ): void;
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterStreamConsumerCommandOutput>;
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerCommandInput,
    cb: (err: any, data?: DeregisterStreamConsumerCommandOutput) => void
  ): void;
  deregisterStreamConsumer(
    args: DeregisterStreamConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterStreamConsumerCommandOutput) => void
  ): void;
  describeLimits(
    args: DescribeLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLimitsCommandOutput>;
  describeLimits(
    args: DescribeLimitsCommandInput,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;
  describeLimits(
    args: DescribeLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLimitsCommandOutput) => void
  ): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamCommandOutput>;
  describeStream(
    args: DescribeStreamCommandInput,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  describeStream(
    args: DescribeStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamCommandOutput) => void
  ): void;
  describeStreamConsumer(
    args: DescribeStreamConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamConsumerCommandOutput>;
  describeStreamConsumer(
    args: DescribeStreamConsumerCommandInput,
    cb: (err: any, data?: DescribeStreamConsumerCommandOutput) => void
  ): void;
  describeStreamConsumer(
    args: DescribeStreamConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamConsumerCommandOutput) => void
  ): void;
  describeStreamSummary(
    args: DescribeStreamSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStreamSummaryCommandOutput>;
  describeStreamSummary(
    args: DescribeStreamSummaryCommandInput,
    cb: (err: any, data?: DescribeStreamSummaryCommandOutput) => void
  ): void;
  describeStreamSummary(
    args: DescribeStreamSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStreamSummaryCommandOutput) => void
  ): void;
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableEnhancedMonitoringCommandOutput>;
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringCommandInput,
    cb: (err: any, data?: DisableEnhancedMonitoringCommandOutput) => void
  ): void;
  disableEnhancedMonitoring(
    args: DisableEnhancedMonitoringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableEnhancedMonitoringCommandOutput) => void
  ): void;
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableEnhancedMonitoringCommandOutput>;
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringCommandInput,
    cb: (err: any, data?: EnableEnhancedMonitoringCommandOutput) => void
  ): void;
  enableEnhancedMonitoring(
    args: EnableEnhancedMonitoringCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableEnhancedMonitoringCommandOutput) => void
  ): void;
  getRecords(
    args: GetRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecordsCommandOutput>;
  getRecords(
    args: GetRecordsCommandInput,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;
  getRecords(
    args: GetRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecordsCommandOutput) => void
  ): void;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetShardIteratorCommandOutput>;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  getShardIterator(
    args: GetShardIteratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetShardIteratorCommandOutput) => void
  ): void;
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IncreaseStreamRetentionPeriodCommandOutput>;
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodCommandInput,
    cb: (err: any, data?: IncreaseStreamRetentionPeriodCommandOutput) => void
  ): void;
  increaseStreamRetentionPeriod(
    args: IncreaseStreamRetentionPeriodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IncreaseStreamRetentionPeriodCommandOutput) => void
  ): void;
  listShards(
    args: ListShardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListShardsCommandOutput>;
  listShards(
    args: ListShardsCommandInput,
    cb: (err: any, data?: ListShardsCommandOutput) => void
  ): void;
  listShards(
    args: ListShardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListShardsCommandOutput) => void
  ): void;
  listStreamConsumers(
    args: ListStreamConsumersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamConsumersCommandOutput>;
  listStreamConsumers(
    args: ListStreamConsumersCommandInput,
    cb: (err: any, data?: ListStreamConsumersCommandOutput) => void
  ): void;
  listStreamConsumers(
    args: ListStreamConsumersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamConsumersCommandOutput) => void
  ): void;
  listStreams(
    args: ListStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamsCommandOutput>;
  listStreams(
    args: ListStreamsCommandInput,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  listStreams(
    args: ListStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamsCommandOutput) => void
  ): void;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForStreamCommandOutput>;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;
  listTagsForStream(
    args: ListTagsForStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForStreamCommandOutput) => void
  ): void;
  mergeShards(
    args: MergeShardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MergeShardsCommandOutput>;
  mergeShards(
    args: MergeShardsCommandInput,
    cb: (err: any, data?: MergeShardsCommandOutput) => void
  ): void;
  mergeShards(
    args: MergeShardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MergeShardsCommandOutput) => void
  ): void;
  putRecord(
    args: PutRecordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRecordCommandOutput>;
  putRecord(
    args: PutRecordCommandInput,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;
  putRecord(
    args: PutRecordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecordCommandOutput) => void
  ): void;
  putRecords(
    args: PutRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRecordsCommandOutput>;
  putRecords(
    args: PutRecordsCommandInput,
    cb: (err: any, data?: PutRecordsCommandOutput) => void
  ): void;
  putRecords(
    args: PutRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRecordsCommandOutput) => void
  ): void;
  registerStreamConsumer(
    args: RegisterStreamConsumerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterStreamConsumerCommandOutput>;
  registerStreamConsumer(
    args: RegisterStreamConsumerCommandInput,
    cb: (err: any, data?: RegisterStreamConsumerCommandOutput) => void
  ): void;
  registerStreamConsumer(
    args: RegisterStreamConsumerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterStreamConsumerCommandOutput) => void
  ): void;
  removeTagsFromStream(
    args: RemoveTagsFromStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromStreamCommandOutput>;
  removeTagsFromStream(
    args: RemoveTagsFromStreamCommandInput,
    cb: (err: any, data?: RemoveTagsFromStreamCommandOutput) => void
  ): void;
  removeTagsFromStream(
    args: RemoveTagsFromStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromStreamCommandOutput) => void
  ): void;
  splitShard(
    args: SplitShardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SplitShardCommandOutput>;
  splitShard(
    args: SplitShardCommandInput,
    cb: (err: any, data?: SplitShardCommandOutput) => void
  ): void;
  splitShard(
    args: SplitShardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SplitShardCommandOutput) => void
  ): void;
  startStreamEncryption(
    args: StartStreamEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartStreamEncryptionCommandOutput>;
  startStreamEncryption(
    args: StartStreamEncryptionCommandInput,
    cb: (err: any, data?: StartStreamEncryptionCommandOutput) => void
  ): void;
  startStreamEncryption(
    args: StartStreamEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartStreamEncryptionCommandOutput) => void
  ): void;
  stopStreamEncryption(
    args: StopStreamEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopStreamEncryptionCommandOutput>;
  stopStreamEncryption(
    args: StopStreamEncryptionCommandInput,
    cb: (err: any, data?: StopStreamEncryptionCommandOutput) => void
  ): void;
  stopStreamEncryption(
    args: StopStreamEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStreamEncryptionCommandOutput) => void
  ): void;
  subscribeToShard(
    args: SubscribeToShardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubscribeToShardCommandOutput>;
  subscribeToShard(
    args: SubscribeToShardCommandInput,
    cb: (err: any, data?: SubscribeToShardCommandOutput) => void
  ): void;
  subscribeToShard(
    args: SubscribeToShardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeToShardCommandOutput) => void
  ): void;
  updateShardCount(
    args: UpdateShardCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateShardCountCommandOutput>;
  updateShardCount(
    args: UpdateShardCountCommandInput,
    cb: (err: any, data?: UpdateShardCountCommandOutput) => void
  ): void;
  updateShardCount(
    args: UpdateShardCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateShardCountCommandOutput) => void
  ): void;
  updateStreamMode(
    args: UpdateStreamModeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamModeCommandOutput>;
  updateStreamMode(
    args: UpdateStreamModeCommandInput,
    cb: (err: any, data?: UpdateStreamModeCommandOutput) => void
  ): void;
  updateStreamMode(
    args: UpdateStreamModeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamModeCommandOutput) => void
  ): void;
}
export declare class Kinesis extends KinesisClient implements Kinesis {}
