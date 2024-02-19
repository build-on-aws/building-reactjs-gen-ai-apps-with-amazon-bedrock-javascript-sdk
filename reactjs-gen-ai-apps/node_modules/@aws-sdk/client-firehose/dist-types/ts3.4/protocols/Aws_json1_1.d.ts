import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";
import {
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput,
} from "../commands/CreateDeliveryStreamCommand";
import {
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput,
} from "../commands/DeleteDeliveryStreamCommand";
import {
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput,
} from "../commands/DescribeDeliveryStreamCommand";
import {
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
} from "../commands/ListDeliveryStreamsCommand";
import {
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput,
} from "../commands/ListTagsForDeliveryStreamCommand";
import {
  PutRecordBatchCommandInput,
  PutRecordBatchCommandOutput,
} from "../commands/PutRecordBatchCommand";
import {
  PutRecordCommandInput,
  PutRecordCommandOutput,
} from "../commands/PutRecordCommand";
import {
  StartDeliveryStreamEncryptionCommandInput,
  StartDeliveryStreamEncryptionCommandOutput,
} from "../commands/StartDeliveryStreamEncryptionCommand";
import {
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput,
} from "../commands/StopDeliveryStreamEncryptionCommand";
import {
  TagDeliveryStreamCommandInput,
  TagDeliveryStreamCommandOutput,
} from "../commands/TagDeliveryStreamCommand";
import {
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput,
} from "../commands/UntagDeliveryStreamCommand";
import {
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
} from "../commands/UpdateDestinationCommand";
export declare const se_CreateDeliveryStreamCommand: (
  input: CreateDeliveryStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DeleteDeliveryStreamCommand: (
  input: DeleteDeliveryStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_DescribeDeliveryStreamCommand: (
  input: DescribeDeliveryStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListDeliveryStreamsCommand: (
  input: ListDeliveryStreamsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_ListTagsForDeliveryStreamCommand: (
  input: ListTagsForDeliveryStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutRecordCommand: (
  input: PutRecordCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_PutRecordBatchCommand: (
  input: PutRecordBatchCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StartDeliveryStreamEncryptionCommand: (
  input: StartDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_StopDeliveryStreamEncryptionCommand: (
  input: StopDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_TagDeliveryStreamCommand: (
  input: TagDeliveryStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UntagDeliveryStreamCommand: (
  input: UntagDeliveryStreamCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const se_UpdateDestinationCommand: (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const de_CreateDeliveryStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateDeliveryStreamCommandOutput>;
export declare const de_DeleteDeliveryStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteDeliveryStreamCommandOutput>;
export declare const de_DescribeDeliveryStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeDeliveryStreamCommandOutput>;
export declare const de_ListDeliveryStreamsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListDeliveryStreamsCommandOutput>;
export declare const de_ListTagsForDeliveryStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForDeliveryStreamCommandOutput>;
export declare const de_PutRecordCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRecordCommandOutput>;
export declare const de_PutRecordBatchCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<PutRecordBatchCommandOutput>;
export declare const de_StartDeliveryStreamEncryptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StartDeliveryStreamEncryptionCommandOutput>;
export declare const de_StopDeliveryStreamEncryptionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopDeliveryStreamEncryptionCommandOutput>;
export declare const de_TagDeliveryStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagDeliveryStreamCommandOutput>;
export declare const de_UntagDeliveryStreamCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagDeliveryStreamCommandOutput>;
export declare const de_UpdateDestinationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateDestinationCommandOutput>;
