import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import {
  AddTagsToStreamCommandInput,
  AddTagsToStreamCommandOutput,
} from "../commands/AddTagsToStreamCommand";
import {
  CreateStreamCommandInput,
  CreateStreamCommandOutput,
} from "../commands/CreateStreamCommand";
import {
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
} from "../commands/DecreaseStreamRetentionPeriodCommand";
import {
  DeleteStreamCommandInput,
  DeleteStreamCommandOutput,
} from "../commands/DeleteStreamCommand";
import {
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput,
} from "../commands/DeregisterStreamConsumerCommand";
import {
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput,
} from "../commands/DescribeLimitsCommand";
import {
  DescribeStreamCommandInput,
  DescribeStreamCommandOutput,
} from "../commands/DescribeStreamCommand";
import {
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput,
} from "../commands/DescribeStreamConsumerCommand";
import {
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
} from "../commands/DescribeStreamSummaryCommand";
import {
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
} from "../commands/DisableEnhancedMonitoringCommand";
import {
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
} from "../commands/EnableEnhancedMonitoringCommand";
import {
  GetRecordsCommandInput,
  GetRecordsCommandOutput,
} from "../commands/GetRecordsCommand";
import {
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput,
} from "../commands/GetShardIteratorCommand";
import {
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput,
} from "../commands/IncreaseStreamRetentionPeriodCommand";
import {
  ListShardsCommandInput,
  ListShardsCommandOutput,
} from "../commands/ListShardsCommand";
import {
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "../commands/ListStreamConsumersCommand";
import {
  ListStreamsCommandInput,
  ListStreamsCommandOutput,
} from "../commands/ListStreamsCommand";
import {
  ListTagsForStreamCommandInput,
  ListTagsForStreamCommandOutput,
} from "../commands/ListTagsForStreamCommand";
import {
  MergeShardsCommandInput,
  MergeShardsCommandOutput,
} from "../commands/MergeShardsCommand";
import {
  PutRecordCommandInput,
  PutRecordCommandOutput,
} from "../commands/PutRecordCommand";
import {
  PutRecordsCommandInput,
  PutRecordsCommandOutput,
} from "../commands/PutRecordsCommand";
import {
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput,
} from "../commands/RegisterStreamConsumerCommand";
import {
  RemoveTagsFromStreamCommandInput,
  RemoveTagsFromStreamCommandOutput,
} from "../commands/RemoveTagsFromStreamCommand";
import {
  SplitShardCommandInput,
  SplitShardCommandOutput,
} from "../commands/SplitShardCommand";
import {
  StartStreamEncryptionCommandInput,
  StartStreamEncryptionCommandOutput,
} from "../commands/StartStreamEncryptionCommand";
import {
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput,
} from "../commands/StopStreamEncryptionCommand";
import {
  SubscribeToShardCommandInput,
  SubscribeToShardCommandOutput,
} from "../commands/SubscribeToShardCommand";
import {
  UpdateShardCountCommandInput,
  UpdateShardCountCommandOutput,
} from "../commands/UpdateShardCountCommand";
import {
  UpdateStreamModeCommandInput,
  UpdateStreamModeCommandOutput,
} from "../commands/UpdateStreamModeCommand";
export declare const se_AddTagsToStreamCommand: (
  input: AddTagsToStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_CreateStreamCommand: (
  input: CreateStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DecreaseStreamRetentionPeriodCommand: (
  input: DecreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteStreamCommand: (
  input: DeleteStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeregisterStreamConsumerCommand: (
  input: DeregisterStreamConsumerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeLimitsCommand: (
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeStreamCommand: (
  input: DescribeStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeStreamConsumerCommand: (
  input: DescribeStreamConsumerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeStreamSummaryCommand: (
  input: DescribeStreamSummaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DisableEnhancedMonitoringCommand: (
  input: DisableEnhancedMonitoringCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_EnableEnhancedMonitoringCommand: (
  input: EnableEnhancedMonitoringCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetRecordsCommand: (
  input: GetRecordsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_GetShardIteratorCommand: (
  input: GetShardIteratorCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_IncreaseStreamRetentionPeriodCommand: (
  input: IncreaseStreamRetentionPeriodCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListShardsCommand: (
  input: ListShardsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListStreamConsumersCommand: (
  input: ListStreamConsumersCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListStreamsCommand: (
  input: ListStreamsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTagsForStreamCommand: (
  input: ListTagsForStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_MergeShardsCommand: (
  input: MergeShardsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutRecordCommand: (
  input: PutRecordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutRecordsCommand: (
  input: PutRecordsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RegisterStreamConsumerCommand: (
  input: RegisterStreamConsumerCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_RemoveTagsFromStreamCommand: (
  input: RemoveTagsFromStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SplitShardCommand: (
  input: SplitShardCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StartStreamEncryptionCommand: (
  input: StartStreamEncryptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StopStreamEncryptionCommand: (
  input: StopStreamEncryptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_SubscribeToShardCommand: (
  input: SubscribeToShardCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateShardCountCommand: (
  input: UpdateShardCountCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateStreamModeCommand: (
  input: UpdateStreamModeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_AddTagsToStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<AddTagsToStreamCommandOutput>;
export declare const de_CreateStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateStreamCommandOutput>;
export declare const de_DecreaseStreamRetentionPeriodCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DecreaseStreamRetentionPeriodCommandOutput>;
export declare const de_DeleteStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteStreamCommandOutput>;
export declare const de_DeregisterStreamConsumerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeregisterStreamConsumerCommandOutput>;
export declare const de_DescribeLimitsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeLimitsCommandOutput>;
export declare const de_DescribeStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStreamCommandOutput>;
export declare const de_DescribeStreamConsumerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStreamConsumerCommandOutput>;
export declare const de_DescribeStreamSummaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStreamSummaryCommandOutput>;
export declare const de_DisableEnhancedMonitoringCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DisableEnhancedMonitoringCommandOutput>;
export declare const de_EnableEnhancedMonitoringCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EnableEnhancedMonitoringCommandOutput>;
export declare const de_GetRecordsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetRecordsCommandOutput>;
export declare const de_GetShardIteratorCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetShardIteratorCommandOutput>;
export declare const de_IncreaseStreamRetentionPeriodCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<IncreaseStreamRetentionPeriodCommandOutput>;
export declare const de_ListShardsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListShardsCommandOutput>;
export declare const de_ListStreamConsumersCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStreamConsumersCommandOutput>;
export declare const de_ListStreamsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStreamsCommandOutput>;
export declare const de_ListTagsForStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForStreamCommandOutput>;
export declare const de_MergeShardsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<MergeShardsCommandOutput>;
export declare const de_PutRecordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRecordCommandOutput>;
export declare const de_PutRecordsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRecordsCommandOutput>;
export declare const de_RegisterStreamConsumerCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterStreamConsumerCommandOutput>;
export declare const de_RemoveTagsFromStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RemoveTagsFromStreamCommandOutput>;
export declare const de_SplitShardCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SplitShardCommandOutput>;
export declare const de_StartStreamEncryptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartStreamEncryptionCommandOutput>;
export declare const de_StopStreamEncryptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopStreamEncryptionCommandOutput>;
export declare const de_SubscribeToShardCommand: (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
) => Promise<SubscribeToShardCommandOutput>;
export declare const de_UpdateShardCountCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateShardCountCommandOutput>;
export declare const de_UpdateStreamModeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateStreamModeCommandOutput>;
