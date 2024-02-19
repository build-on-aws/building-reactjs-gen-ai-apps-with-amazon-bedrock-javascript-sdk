import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import { CreateDeliveryStreamCommandInput, CreateDeliveryStreamCommandOutput } from "../commands/CreateDeliveryStreamCommand";
import { DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput } from "../commands/DeleteDeliveryStreamCommand";
import { DescribeDeliveryStreamCommandInput, DescribeDeliveryStreamCommandOutput } from "../commands/DescribeDeliveryStreamCommand";
import { ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput } from "../commands/ListDeliveryStreamsCommand";
import { ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput } from "../commands/ListTagsForDeliveryStreamCommand";
import { PutRecordBatchCommandInput, PutRecordBatchCommandOutput } from "../commands/PutRecordBatchCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import { StartDeliveryStreamEncryptionCommandInput, StartDeliveryStreamEncryptionCommandOutput } from "../commands/StartDeliveryStreamEncryptionCommand";
import { StopDeliveryStreamEncryptionCommandInput, StopDeliveryStreamEncryptionCommandOutput } from "../commands/StopDeliveryStreamEncryptionCommand";
import { TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput } from "../commands/TagDeliveryStreamCommand";
import { UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput } from "../commands/UntagDeliveryStreamCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "../commands/UpdateDestinationCommand";
/**
 * serializeAws_json1_1CreateDeliveryStreamCommand
 */
export declare const se_CreateDeliveryStreamCommand: (input: CreateDeliveryStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DeleteDeliveryStreamCommand
 */
export declare const se_DeleteDeliveryStreamCommand: (input: DeleteDeliveryStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1DescribeDeliveryStreamCommand
 */
export declare const se_DescribeDeliveryStreamCommand: (input: DescribeDeliveryStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListDeliveryStreamsCommand
 */
export declare const se_ListDeliveryStreamsCommand: (input: ListDeliveryStreamsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1ListTagsForDeliveryStreamCommand
 */
export declare const se_ListTagsForDeliveryStreamCommand: (input: ListTagsForDeliveryStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutRecordCommand
 */
export declare const se_PutRecordCommand: (input: PutRecordCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1PutRecordBatchCommand
 */
export declare const se_PutRecordBatchCommand: (input: PutRecordBatchCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StartDeliveryStreamEncryptionCommand
 */
export declare const se_StartDeliveryStreamEncryptionCommand: (input: StartDeliveryStreamEncryptionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1StopDeliveryStreamEncryptionCommand
 */
export declare const se_StopDeliveryStreamEncryptionCommand: (input: StopDeliveryStreamEncryptionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1TagDeliveryStreamCommand
 */
export declare const se_TagDeliveryStreamCommand: (input: TagDeliveryStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UntagDeliveryStreamCommand
 */
export declare const se_UntagDeliveryStreamCommand: (input: UntagDeliveryStreamCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * serializeAws_json1_1UpdateDestinationCommand
 */
export declare const se_UpdateDestinationCommand: (input: UpdateDestinationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
/**
 * deserializeAws_json1_1CreateDeliveryStreamCommand
 */
export declare const de_CreateDeliveryStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<CreateDeliveryStreamCommandOutput>;
/**
 * deserializeAws_json1_1DeleteDeliveryStreamCommand
 */
export declare const de_DeleteDeliveryStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DeleteDeliveryStreamCommandOutput>;
/**
 * deserializeAws_json1_1DescribeDeliveryStreamCommand
 */
export declare const de_DescribeDeliveryStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeDeliveryStreamCommandOutput>;
/**
 * deserializeAws_json1_1ListDeliveryStreamsCommand
 */
export declare const de_ListDeliveryStreamsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListDeliveryStreamsCommandOutput>;
/**
 * deserializeAws_json1_1ListTagsForDeliveryStreamCommand
 */
export declare const de_ListTagsForDeliveryStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListTagsForDeliveryStreamCommandOutput>;
/**
 * deserializeAws_json1_1PutRecordCommand
 */
export declare const de_PutRecordCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRecordCommandOutput>;
/**
 * deserializeAws_json1_1PutRecordBatchCommand
 */
export declare const de_PutRecordBatchCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutRecordBatchCommandOutput>;
/**
 * deserializeAws_json1_1StartDeliveryStreamEncryptionCommand
 */
export declare const de_StartDeliveryStreamEncryptionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartDeliveryStreamEncryptionCommandOutput>;
/**
 * deserializeAws_json1_1StopDeliveryStreamEncryptionCommand
 */
export declare const de_StopDeliveryStreamEncryptionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StopDeliveryStreamEncryptionCommandOutput>;
/**
 * deserializeAws_json1_1TagDeliveryStreamCommand
 */
export declare const de_TagDeliveryStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<TagDeliveryStreamCommandOutput>;
/**
 * deserializeAws_json1_1UntagDeliveryStreamCommand
 */
export declare const de_UntagDeliveryStreamCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UntagDeliveryStreamCommandOutput>;
/**
 * deserializeAws_json1_1UpdateDestinationCommand
 */
export declare const de_UpdateDestinationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateDestinationCommandOutput>;
