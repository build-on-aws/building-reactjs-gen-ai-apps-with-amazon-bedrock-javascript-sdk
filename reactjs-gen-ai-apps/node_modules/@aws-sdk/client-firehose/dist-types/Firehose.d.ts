import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";
import { CreateDeliveryStreamCommandInput, CreateDeliveryStreamCommandOutput } from "./commands/CreateDeliveryStreamCommand";
import { DeleteDeliveryStreamCommandInput, DeleteDeliveryStreamCommandOutput } from "./commands/DeleteDeliveryStreamCommand";
import { DescribeDeliveryStreamCommandInput, DescribeDeliveryStreamCommandOutput } from "./commands/DescribeDeliveryStreamCommand";
import { ListDeliveryStreamsCommandInput, ListDeliveryStreamsCommandOutput } from "./commands/ListDeliveryStreamsCommand";
import { ListTagsForDeliveryStreamCommandInput, ListTagsForDeliveryStreamCommandOutput } from "./commands/ListTagsForDeliveryStreamCommand";
import { PutRecordBatchCommandInput, PutRecordBatchCommandOutput } from "./commands/PutRecordBatchCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "./commands/PutRecordCommand";
import { StartDeliveryStreamEncryptionCommandInput, StartDeliveryStreamEncryptionCommandOutput } from "./commands/StartDeliveryStreamEncryptionCommand";
import { StopDeliveryStreamEncryptionCommandInput, StopDeliveryStreamEncryptionCommandOutput } from "./commands/StopDeliveryStreamEncryptionCommand";
import { TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput } from "./commands/TagDeliveryStreamCommand";
import { UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput } from "./commands/UntagDeliveryStreamCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "./commands/UpdateDestinationCommand";
import { FirehoseClient } from "./FirehoseClient";
export interface Firehose {
    /**
     * @see {@link CreateDeliveryStreamCommand}
     */
    createDeliveryStream(args: CreateDeliveryStreamCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeliveryStreamCommandOutput>;
    createDeliveryStream(args: CreateDeliveryStreamCommandInput, cb: (err: any, data?: CreateDeliveryStreamCommandOutput) => void): void;
    createDeliveryStream(args: CreateDeliveryStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeliveryStreamCommandOutput) => void): void;
    /**
     * @see {@link DeleteDeliveryStreamCommand}
     */
    deleteDeliveryStream(args: DeleteDeliveryStreamCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeliveryStreamCommandOutput>;
    deleteDeliveryStream(args: DeleteDeliveryStreamCommandInput, cb: (err: any, data?: DeleteDeliveryStreamCommandOutput) => void): void;
    deleteDeliveryStream(args: DeleteDeliveryStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeliveryStreamCommandOutput) => void): void;
    /**
     * @see {@link DescribeDeliveryStreamCommand}
     */
    describeDeliveryStream(args: DescribeDeliveryStreamCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeliveryStreamCommandOutput>;
    describeDeliveryStream(args: DescribeDeliveryStreamCommandInput, cb: (err: any, data?: DescribeDeliveryStreamCommandOutput) => void): void;
    describeDeliveryStream(args: DescribeDeliveryStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeliveryStreamCommandOutput) => void): void;
    /**
     * @see {@link ListDeliveryStreamsCommand}
     */
    listDeliveryStreams(args: ListDeliveryStreamsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeliveryStreamsCommandOutput>;
    listDeliveryStreams(args: ListDeliveryStreamsCommandInput, cb: (err: any, data?: ListDeliveryStreamsCommandOutput) => void): void;
    listDeliveryStreams(args: ListDeliveryStreamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeliveryStreamsCommandOutput) => void): void;
    /**
     * @see {@link ListTagsForDeliveryStreamCommand}
     */
    listTagsForDeliveryStream(args: ListTagsForDeliveryStreamCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForDeliveryStreamCommandOutput>;
    listTagsForDeliveryStream(args: ListTagsForDeliveryStreamCommandInput, cb: (err: any, data?: ListTagsForDeliveryStreamCommandOutput) => void): void;
    listTagsForDeliveryStream(args: ListTagsForDeliveryStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForDeliveryStreamCommandOutput) => void): void;
    /**
     * @see {@link PutRecordCommand}
     */
    putRecord(args: PutRecordCommandInput, options?: __HttpHandlerOptions): Promise<PutRecordCommandOutput>;
    putRecord(args: PutRecordCommandInput, cb: (err: any, data?: PutRecordCommandOutput) => void): void;
    putRecord(args: PutRecordCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRecordCommandOutput) => void): void;
    /**
     * @see {@link PutRecordBatchCommand}
     */
    putRecordBatch(args: PutRecordBatchCommandInput, options?: __HttpHandlerOptions): Promise<PutRecordBatchCommandOutput>;
    putRecordBatch(args: PutRecordBatchCommandInput, cb: (err: any, data?: PutRecordBatchCommandOutput) => void): void;
    putRecordBatch(args: PutRecordBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutRecordBatchCommandOutput) => void): void;
    /**
     * @see {@link StartDeliveryStreamEncryptionCommand}
     */
    startDeliveryStreamEncryption(args: StartDeliveryStreamEncryptionCommandInput, options?: __HttpHandlerOptions): Promise<StartDeliveryStreamEncryptionCommandOutput>;
    startDeliveryStreamEncryption(args: StartDeliveryStreamEncryptionCommandInput, cb: (err: any, data?: StartDeliveryStreamEncryptionCommandOutput) => void): void;
    startDeliveryStreamEncryption(args: StartDeliveryStreamEncryptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDeliveryStreamEncryptionCommandOutput) => void): void;
    /**
     * @see {@link StopDeliveryStreamEncryptionCommand}
     */
    stopDeliveryStreamEncryption(args: StopDeliveryStreamEncryptionCommandInput, options?: __HttpHandlerOptions): Promise<StopDeliveryStreamEncryptionCommandOutput>;
    stopDeliveryStreamEncryption(args: StopDeliveryStreamEncryptionCommandInput, cb: (err: any, data?: StopDeliveryStreamEncryptionCommandOutput) => void): void;
    stopDeliveryStreamEncryption(args: StopDeliveryStreamEncryptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDeliveryStreamEncryptionCommandOutput) => void): void;
    /**
     * @see {@link TagDeliveryStreamCommand}
     */
    tagDeliveryStream(args: TagDeliveryStreamCommandInput, options?: __HttpHandlerOptions): Promise<TagDeliveryStreamCommandOutput>;
    tagDeliveryStream(args: TagDeliveryStreamCommandInput, cb: (err: any, data?: TagDeliveryStreamCommandOutput) => void): void;
    tagDeliveryStream(args: TagDeliveryStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagDeliveryStreamCommandOutput) => void): void;
    /**
     * @see {@link UntagDeliveryStreamCommand}
     */
    untagDeliveryStream(args: UntagDeliveryStreamCommandInput, options?: __HttpHandlerOptions): Promise<UntagDeliveryStreamCommandOutput>;
    untagDeliveryStream(args: UntagDeliveryStreamCommandInput, cb: (err: any, data?: UntagDeliveryStreamCommandOutput) => void): void;
    untagDeliveryStream(args: UntagDeliveryStreamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagDeliveryStreamCommandOutput) => void): void;
    /**
     * @see {@link UpdateDestinationCommand}
     */
    updateDestination(args: UpdateDestinationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDestinationCommandOutput>;
    updateDestination(args: UpdateDestinationCommandInput, cb: (err: any, data?: UpdateDestinationCommandOutput) => void): void;
    updateDestination(args: UpdateDestinationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDestinationCommandOutput) => void): void;
}
/**
 * @public
 * <fullname>Amazon Kinesis Data Firehose API Reference</fullname>
 *          <p>Amazon Kinesis Data Firehose is a fully managed service that delivers real-time
 *          streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon
 *          OpenSearch Service, Amazon Redshift, Splunk, and various other supportd
 *          destinations.</p>
 */
export declare class Firehose extends FirehoseClient implements Firehose {
}
