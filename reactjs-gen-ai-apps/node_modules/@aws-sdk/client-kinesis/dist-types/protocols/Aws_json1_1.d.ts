import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { EventStreamSerdeContext as __EventStreamSerdeContext, SerdeContext as __SerdeContext } from "@smithy/types";
import { AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput } from "../commands/AddTagsToStreamCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "../commands/CreateStreamCommand";
import { DecreaseStreamRetentionPeriodCommandInput, DecreaseStreamRetentionPeriodCommandOutput } from "../commands/DecreaseStreamRetentionPeriodCommand";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "../commands/DeleteStreamCommand";
import { DeregisterStreamConsumerCommandInput, DeregisterStreamConsumerCommandOutput } from "../commands/DeregisterStreamConsumerCommand";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "../commands/DescribeLimitsCommand";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "../commands/DescribeStreamCommand";
import { DescribeStreamConsumerCommandInput, DescribeStreamConsumerCommandOutput } from "../commands/DescribeStreamConsumerCommand";
import { DescribeStreamSummaryCommandInput, DescribeStreamSummaryCommandOutput } from "../commands/DescribeStreamSummaryCommand";
import { DisableEnhancedMonitoringCommandInput, DisableEnhancedMonitoringCommandOutput } from "../commands/DisableEnhancedMonitoringCommand";
import { EnableEnhancedMonitoringCommandInput, EnableEnhancedMonitoringCommandOutput } from "../commands/EnableEnhancedMonitoringCommand";
import { GetRecordsCommandInput, GetRecordsCommandOutput } from "../commands/GetRecordsCommand";
import { GetShardIteratorCommandInput, GetShardIteratorCommandOutput } from "../commands/GetShardIteratorCommand";
import { IncreaseStreamRetentionPeriodCommandInput, IncreaseStreamRetentionPeriodCommandOutput } from "../commands/IncreaseStreamRetentionPeriodCommand";
import { ListShardsCommandInput, ListShardsCommandOutput } from "../commands/ListShardsCommand";
import { ListStreamConsumersCommandInput, ListStreamConsumersCommandOutput } from "../commands/ListStreamConsumersCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput } from "../commands/ListTagsForStreamCommand";
import { MergeShardsCommandInput, MergeShardsCommandOutput } from "../commands/MergeShardsCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import { PutRecordsCommandInput, PutRecordsCommandOutput } from "../commands/PutRecordsCommand";
import { RegisterStreamConsumerCommandInput, RegisterStreamConsumerCommandOutput } from "../commands/RegisterStreamConsumerCommand";
import { RemoveTagsFromStreamCommandInput, RemoveTagsFromStreamCommandOutput } from "../commands/RemoveTagsFromStreamCommand";
import { SplitShardCommandInput, SplitShardCommandOutput } from "../commands/SplitShardCommand";
import { StartStreamEncryptionCommandInput, StartStreamEncryptionCommandOutput } from "../commands/StartStreamEncryptionCommand";
import { StopStreamEncryptionCommandInput, StopStreamEncryptionCommandOutput } from "../commands/StopStreamEncryptionCommand";
import { SubscribeToShardCommandInput, SubscribeToShardCommandOutput } from "../commands/SubscribeToShardCommand";
import { UpdateShardCountCommandInput, UpdateShardCountCommandOutput } from "../commands/UpdateShardCountCommand";
import { UpdateStreamModeCommandInput, UpdateStreamModeCommandOutput } from "../commands/UpdateStreamModeCommand";
/**
 * serializeAws_json1_1AddTagsToStreamCommand
 */
export declare const se_AddTagsToStreamCommand: (input: AddTagsToStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1CreateStreamCommand
 */
export declare const se_CreateStreamCommand: (input: CreateStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DecreaseStreamRetentionPeriodCommand
 */
export declare const se_DecreaseStreamRetentionPeriodCommand: (input: DecreaseStreamRetentionPeriodCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteStreamCommand
 */
export declare const se_DeleteStreamCommand: (input: DeleteStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeregisterStreamConsumerCommand
 */
export declare const se_DeregisterStreamConsumerCommand: (input: DeregisterStreamConsumerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeLimitsCommand
 */
export declare const se_DescribeLimitsCommand: (input: DescribeLimitsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeStreamCommand
 */
export declare const se_DescribeStreamCommand: (input: DescribeStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeStreamConsumerCommand
 */
export declare const se_DescribeStreamConsumerCommand: (input: DescribeStreamConsumerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeStreamSummaryCommand
 */
export declare const se_DescribeStreamSummaryCommand: (input: DescribeStreamSummaryCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DisableEnhancedMonitoringCommand
 */
export declare const se_DisableEnhancedMonitoringCommand: (input: DisableEnhancedMonitoringCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1EnableEnhancedMonitoringCommand
 */
export declare const se_EnableEnhancedMonitoringCommand: (input: EnableEnhancedMonitoringCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetRecordsCommand
 */
export declare const se_GetRecordsCommand: (input: GetRecordsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1GetShardIteratorCommand
 */
export declare const se_GetShardIteratorCommand: (input: GetShardIteratorCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1IncreaseStreamRetentionPeriodCommand
 */
export declare const se_IncreaseStreamRetentionPeriodCommand: (input: IncreaseStreamRetentionPeriodCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListShardsCommand
 */
export declare const se_ListShardsCommand: (input: ListShardsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListStreamConsumersCommand
 */
export declare const se_ListStreamConsumersCommand: (input: ListStreamConsumersCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListStreamsCommand
 */
export declare const se_ListStreamsCommand: (input: ListStreamsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListTagsForStreamCommand
 */
export declare const se_ListTagsForStreamCommand: (input: ListTagsForStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1MergeShardsCommand
 */
export declare const se_MergeShardsCommand: (input: MergeShardsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutRecordCommand
 */
export declare const se_PutRecordCommand: (input: PutRecordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutRecordsCommand
 */
export declare const se_PutRecordsCommand: (input: PutRecordsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1RegisterStreamConsumerCommand
 */
export declare const se_RegisterStreamConsumerCommand: (input: RegisterStreamConsumerCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1RemoveTagsFromStreamCommand
 */
export declare const se_RemoveTagsFromStreamCommand: (input: RemoveTagsFromStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SplitShardCommand
 */
export declare const se_SplitShardCommand: (input: SplitShardCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StartStreamEncryptionCommand
 */
export declare const se_StartStreamEncryptionCommand: (input: StartStreamEncryptionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StopStreamEncryptionCommand
 */
export declare const se_StopStreamEncryptionCommand: (input: StopStreamEncryptionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1SubscribeToShardCommand
 */
export declare const se_SubscribeToShardCommand: (input: SubscribeToShardCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateShardCountCommand
 */
export declare const se_UpdateShardCountCommand: (input: UpdateShardCountCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateStreamModeCommand
 */
export declare const se_UpdateStreamModeCommand: (input: UpdateStreamModeCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_json1_1AddTagsToStreamCommand
 */
export declare const de_AddTagsToStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AddTagsToStreamCommandOutput>;
/**
 * deserializeAws_json1_1CreateStreamCommand
 */
export declare const de_CreateStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateStreamCommandOutput>;
/**
 * deserializeAws_json1_1DecreaseStreamRetentionPeriodCommand
 */
export declare const de_DecreaseStreamRetentionPeriodCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DecreaseStreamRetentionPeriodCommandOutput>;
/**
 * deserializeAws_json1_1DeleteStreamCommand
 */
export declare const de_DeleteStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteStreamCommandOutput>;
/**
 * deserializeAws_json1_1DeregisterStreamConsumerCommand
 */
export declare const de_DeregisterStreamConsumerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeregisterStreamConsumerCommandOutput>;
/**
 * deserializeAws_json1_1DescribeLimitsCommand
 */
export declare const de_DescribeLimitsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeLimitsCommandOutput>;
/**
 * deserializeAws_json1_1DescribeStreamCommand
 */
export declare const de_DescribeStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeStreamCommandOutput>;
/**
 * deserializeAws_json1_1DescribeStreamConsumerCommand
 */
export declare const de_DescribeStreamConsumerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeStreamConsumerCommandOutput>;
/**
 * deserializeAws_json1_1DescribeStreamSummaryCommand
 */
export declare const de_DescribeStreamSummaryCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeStreamSummaryCommandOutput>;
/**
 * deserializeAws_json1_1DisableEnhancedMonitoringCommand
 */
export declare const de_DisableEnhancedMonitoringCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DisableEnhancedMonitoringCommandOutput>;
/**
 * deserializeAws_json1_1EnableEnhancedMonitoringCommand
 */
export declare const de_EnableEnhancedMonitoringCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<EnableEnhancedMonitoringCommandOutput>;
/**
 * deserializeAws_json1_1GetRecordsCommand
 */
export declare const de_GetRecordsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetRecordsCommandOutput>;
/**
 * deserializeAws_json1_1GetShardIteratorCommand
 */
export declare const de_GetShardIteratorCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetShardIteratorCommandOutput>;
/**
 * deserializeAws_json1_1IncreaseStreamRetentionPeriodCommand
 */
export declare const de_IncreaseStreamRetentionPeriodCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<IncreaseStreamRetentionPeriodCommandOutput>;
/**
 * deserializeAws_json1_1ListShardsCommand
 */
export declare const de_ListShardsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListShardsCommandOutput>;
/**
 * deserializeAws_json1_1ListStreamConsumersCommand
 */
export declare const de_ListStreamConsumersCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListStreamConsumersCommandOutput>;
/**
 * deserializeAws_json1_1ListStreamsCommand
 */
export declare const de_ListStreamsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListStreamsCommandOutput>;
/**
 * deserializeAws_json1_1ListTagsForStreamCommand
 */
export declare const de_ListTagsForStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForStreamCommandOutput>;
/**
 * deserializeAws_json1_1MergeShardsCommand
 */
export declare const de_MergeShardsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<MergeShardsCommandOutput>;
/**
 * deserializeAws_json1_1PutRecordCommand
 */
export declare const de_PutRecordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRecordCommandOutput>;
/**
 * deserializeAws_json1_1PutRecordsCommand
 */
export declare const de_PutRecordsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRecordsCommandOutput>;
/**
 * deserializeAws_json1_1RegisterStreamConsumerCommand
 */
export declare const de_RegisterStreamConsumerCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RegisterStreamConsumerCommandOutput>;
/**
 * deserializeAws_json1_1RemoveTagsFromStreamCommand
 */
export declare const de_RemoveTagsFromStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemoveTagsFromStreamCommandOutput>;
/**
 * deserializeAws_json1_1SplitShardCommand
 */
export declare const de_SplitShardCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SplitShardCommandOutput>;
/**
 * deserializeAws_json1_1StartStreamEncryptionCommand
 */
export declare const de_StartStreamEncryptionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartStreamEncryptionCommandOutput>;
/**
 * deserializeAws_json1_1StopStreamEncryptionCommand
 */
export declare const de_StopStreamEncryptionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopStreamEncryptionCommandOutput>;
/**
 * deserializeAws_json1_1SubscribeToShardCommand
 */
export declare const de_SubscribeToShardCommand: (output: __HttpResponse, context: __SerdeContext & __EventStreamSerdeContext) => Promise<SubscribeToShardCommandOutput>;
/**
 * deserializeAws_json1_1UpdateShardCountCommand
 */
export declare const de_UpdateShardCountCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateShardCountCommandOutput>;
/**
 * deserializeAws_json1_1UpdateStreamModeCommand
 */
export declare const de_UpdateStreamModeCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateStreamModeCommandOutput>;
