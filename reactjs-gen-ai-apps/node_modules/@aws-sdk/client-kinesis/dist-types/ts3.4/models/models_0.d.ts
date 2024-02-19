import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { KinesisServiceException as __BaseException } from "./KinesisServiceException";
export declare class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<AccessDeniedException, __BaseException>
  );
}
export interface AddTagsToStreamInput {
  StreamName?: string;
  Tags: Record<string, string> | undefined;
  StreamARN?: string;
}
export declare class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>
  );
}
export declare class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<LimitExceededException, __BaseException>
  );
}
export declare class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceInUseException, __BaseException>
  );
}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export interface HashKeyRange {
  StartingHashKey: string | undefined;
  EndingHashKey: string | undefined;
}
export interface ChildShard {
  ShardId: string | undefined;
  ParentShards: string[] | undefined;
  HashKeyRange: HashKeyRange | undefined;
}
export declare const ConsumerStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly CREATING: "CREATING";
  readonly DELETING: "DELETING";
};
export type ConsumerStatus =
  (typeof ConsumerStatus)[keyof typeof ConsumerStatus];
export interface Consumer {
  ConsumerName: string | undefined;
  ConsumerARN: string | undefined;
  ConsumerStatus: ConsumerStatus | string | undefined;
  ConsumerCreationTimestamp: Date | undefined;
}
export interface ConsumerDescription {
  ConsumerName: string | undefined;
  ConsumerARN: string | undefined;
  ConsumerStatus: ConsumerStatus | string | undefined;
  ConsumerCreationTimestamp: Date | undefined;
  StreamARN: string | undefined;
}
export declare const StreamMode: {
  readonly ON_DEMAND: "ON_DEMAND";
  readonly PROVISIONED: "PROVISIONED";
};
export type StreamMode = (typeof StreamMode)[keyof typeof StreamMode];
export interface StreamModeDetails {
  StreamMode: StreamMode | string | undefined;
}
export interface CreateStreamInput {
  StreamName: string | undefined;
  ShardCount?: number;
  StreamModeDetails?: StreamModeDetails;
}
export interface DecreaseStreamRetentionPeriodInput {
  StreamName?: string;
  RetentionPeriodHours: number | undefined;
  StreamARN?: string;
}
export interface DeleteStreamInput {
  StreamName?: string;
  EnforceConsumerDeletion?: boolean;
  StreamARN?: string;
}
export interface DeregisterStreamConsumerInput {
  StreamARN?: string;
  ConsumerName?: string;
  ConsumerARN?: string;
}
export interface DescribeLimitsInput {}
export interface DescribeLimitsOutput {
  ShardLimit: number | undefined;
  OpenShardCount: number | undefined;
  OnDemandStreamCount: number | undefined;
  OnDemandStreamCountLimit: number | undefined;
}
export interface DescribeStreamInput {
  StreamName?: string;
  Limit?: number;
  ExclusiveStartShardId?: string;
  StreamARN?: string;
}
export declare const EncryptionType: {
  readonly KMS: "KMS";
  readonly NONE: "NONE";
};
export type EncryptionType =
  (typeof EncryptionType)[keyof typeof EncryptionType];
export declare const MetricsName: {
  readonly ALL: "ALL";
  readonly INCOMING_BYTES: "IncomingBytes";
  readonly INCOMING_RECORDS: "IncomingRecords";
  readonly ITERATOR_AGE_MILLISECONDS: "IteratorAgeMilliseconds";
  readonly OUTGOING_BYTES: "OutgoingBytes";
  readonly OUTGOING_RECORDS: "OutgoingRecords";
  readonly READ_PROVISIONED_THROUGHPUT_EXCEEDED: "ReadProvisionedThroughputExceeded";
  readonly WRITE_PROVISIONED_THROUGHPUT_EXCEEDED: "WriteProvisionedThroughputExceeded";
};
export type MetricsName = (typeof MetricsName)[keyof typeof MetricsName];
export interface EnhancedMetrics {
  ShardLevelMetrics?: (MetricsName | string)[];
}
export interface SequenceNumberRange {
  StartingSequenceNumber: string | undefined;
  EndingSequenceNumber?: string;
}
export interface Shard {
  ShardId: string | undefined;
  ParentShardId?: string;
  AdjacentParentShardId?: string;
  HashKeyRange: HashKeyRange | undefined;
  SequenceNumberRange: SequenceNumberRange | undefined;
}
export declare const StreamStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly CREATING: "CREATING";
  readonly DELETING: "DELETING";
  readonly UPDATING: "UPDATING";
};
export type StreamStatus = (typeof StreamStatus)[keyof typeof StreamStatus];
export interface StreamDescription {
  StreamName: string | undefined;
  StreamARN: string | undefined;
  StreamStatus: StreamStatus | string | undefined;
  StreamModeDetails?: StreamModeDetails;
  Shards: Shard[] | undefined;
  HasMoreShards: boolean | undefined;
  RetentionPeriodHours: number | undefined;
  StreamCreationTimestamp: Date | undefined;
  EnhancedMonitoring: EnhancedMetrics[] | undefined;
  EncryptionType?: EncryptionType | string;
  KeyId?: string;
}
export interface DescribeStreamOutput {
  StreamDescription: StreamDescription | undefined;
}
export interface DescribeStreamConsumerInput {
  StreamARN?: string;
  ConsumerName?: string;
  ConsumerARN?: string;
}
export interface DescribeStreamConsumerOutput {
  ConsumerDescription: ConsumerDescription | undefined;
}
export interface DescribeStreamSummaryInput {
  StreamName?: string;
  StreamARN?: string;
}
export interface StreamDescriptionSummary {
  StreamName: string | undefined;
  StreamARN: string | undefined;
  StreamStatus: StreamStatus | string | undefined;
  StreamModeDetails?: StreamModeDetails;
  RetentionPeriodHours: number | undefined;
  StreamCreationTimestamp: Date | undefined;
  EnhancedMonitoring: EnhancedMetrics[] | undefined;
  EncryptionType?: EncryptionType | string;
  KeyId?: string;
  OpenShardCount: number | undefined;
  ConsumerCount?: number;
}
export interface DescribeStreamSummaryOutput {
  StreamDescriptionSummary: StreamDescriptionSummary | undefined;
}
export interface DisableEnhancedMonitoringInput {
  StreamName?: string;
  ShardLevelMetrics: (MetricsName | string)[] | undefined;
  StreamARN?: string;
}
export interface EnhancedMonitoringOutput {
  StreamName?: string;
  CurrentShardLevelMetrics?: (MetricsName | string)[];
  DesiredShardLevelMetrics?: (MetricsName | string)[];
  StreamARN?: string;
}
export interface EnableEnhancedMonitoringInput {
  StreamName?: string;
  ShardLevelMetrics: (MetricsName | string)[] | undefined;
  StreamARN?: string;
}
export declare class ExpiredIteratorException extends __BaseException {
  readonly name: "ExpiredIteratorException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ExpiredIteratorException, __BaseException>
  );
}
export declare class ExpiredNextTokenException extends __BaseException {
  readonly name: "ExpiredNextTokenException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ExpiredNextTokenException, __BaseException>
  );
}
export interface GetRecordsInput {
  ShardIterator: string | undefined;
  Limit?: number;
  StreamARN?: string;
}
export interface _Record {
  SequenceNumber: string | undefined;
  ApproximateArrivalTimestamp?: Date;
  Data: Uint8Array | undefined;
  PartitionKey: string | undefined;
  EncryptionType?: EncryptionType | string;
}
export interface GetRecordsOutput {
  Records: _Record[] | undefined;
  NextShardIterator?: string;
  MillisBehindLatest?: number;
  ChildShards?: ChildShard[];
}
export declare class KMSAccessDeniedException extends __BaseException {
  readonly name: "KMSAccessDeniedException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<KMSAccessDeniedException, __BaseException>
  );
}
export declare class KMSDisabledException extends __BaseException {
  readonly name: "KMSDisabledException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<KMSDisabledException, __BaseException>
  );
}
export declare class KMSInvalidStateException extends __BaseException {
  readonly name: "KMSInvalidStateException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>
  );
}
export declare class KMSNotFoundException extends __BaseException {
  readonly name: "KMSNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<KMSNotFoundException, __BaseException>
  );
}
export declare class KMSOptInRequired extends __BaseException {
  readonly name: "KMSOptInRequired";
  readonly $fault: "client";
  constructor(opts: __ExceptionOptionType<KMSOptInRequired, __BaseException>);
}
export declare class KMSThrottlingException extends __BaseException {
  readonly name: "KMSThrottlingException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<KMSThrottlingException, __BaseException>
  );
}
export declare class ProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ProvisionedThroughputExceededException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ProvisionedThroughputExceededException,
      __BaseException
    >
  );
}
export declare const ShardIteratorType: {
  readonly AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER";
  readonly AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER";
  readonly AT_TIMESTAMP: "AT_TIMESTAMP";
  readonly LATEST: "LATEST";
  readonly TRIM_HORIZON: "TRIM_HORIZON";
};
export type ShardIteratorType =
  (typeof ShardIteratorType)[keyof typeof ShardIteratorType];
export interface GetShardIteratorInput {
  StreamName?: string;
  ShardId: string | undefined;
  ShardIteratorType: ShardIteratorType | string | undefined;
  StartingSequenceNumber?: string;
  Timestamp?: Date;
  StreamARN?: string;
}
export interface GetShardIteratorOutput {
  ShardIterator?: string;
}
export interface IncreaseStreamRetentionPeriodInput {
  StreamName?: string;
  RetentionPeriodHours: number | undefined;
  StreamARN?: string;
}
export declare class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException";
  readonly $fault: "server";
  constructor(
    opts: __ExceptionOptionType<InternalFailureException, __BaseException>
  );
}
export declare const ShardFilterType: {
  readonly AFTER_SHARD_ID: "AFTER_SHARD_ID";
  readonly AT_LATEST: "AT_LATEST";
  readonly AT_TIMESTAMP: "AT_TIMESTAMP";
  readonly AT_TRIM_HORIZON: "AT_TRIM_HORIZON";
  readonly FROM_TIMESTAMP: "FROM_TIMESTAMP";
  readonly FROM_TRIM_HORIZON: "FROM_TRIM_HORIZON";
};
export type ShardFilterType =
  (typeof ShardFilterType)[keyof typeof ShardFilterType];
export interface ShardFilter {
  Type: ShardFilterType | string | undefined;
  ShardId?: string;
  Timestamp?: Date;
}
export interface ListShardsInput {
  StreamName?: string;
  NextToken?: string;
  ExclusiveStartShardId?: string;
  MaxResults?: number;
  StreamCreationTimestamp?: Date;
  ShardFilter?: ShardFilter;
  StreamARN?: string;
}
export interface ListShardsOutput {
  Shards?: Shard[];
  NextToken?: string;
}
export interface ListStreamConsumersInput {
  StreamARN: string | undefined;
  NextToken?: string;
  MaxResults?: number;
  StreamCreationTimestamp?: Date;
}
export interface ListStreamConsumersOutput {
  Consumers?: Consumer[];
  NextToken?: string;
}
export interface ListStreamsInput {
  Limit?: number;
  ExclusiveStartStreamName?: string;
  NextToken?: string;
}
export interface StreamSummary {
  StreamName: string | undefined;
  StreamARN: string | undefined;
  StreamStatus: StreamStatus | string | undefined;
  StreamModeDetails?: StreamModeDetails;
  StreamCreationTimestamp?: Date;
}
export interface ListStreamsOutput {
  StreamNames: string[] | undefined;
  HasMoreStreams: boolean | undefined;
  NextToken?: string;
  StreamSummaries?: StreamSummary[];
}
export interface ListTagsForStreamInput {
  StreamName?: string;
  ExclusiveStartTagKey?: string;
  Limit?: number;
  StreamARN?: string;
}
export interface Tag {
  Key: string | undefined;
  Value?: string;
}
export interface ListTagsForStreamOutput {
  Tags: Tag[] | undefined;
  HasMoreTags: boolean | undefined;
}
export interface MergeShardsInput {
  StreamName?: string;
  ShardToMerge: string | undefined;
  AdjacentShardToMerge: string | undefined;
  StreamARN?: string;
}
export declare class ValidationException extends __BaseException {
  readonly name: "ValidationException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ValidationException, __BaseException>
  );
}
export interface PutRecordInput {
  StreamName?: string;
  Data: Uint8Array | undefined;
  PartitionKey: string | undefined;
  ExplicitHashKey?: string;
  SequenceNumberForOrdering?: string;
  StreamARN?: string;
}
export interface PutRecordOutput {
  ShardId: string | undefined;
  SequenceNumber: string | undefined;
  EncryptionType?: EncryptionType | string;
}
export interface PutRecordsRequestEntry {
  Data: Uint8Array | undefined;
  ExplicitHashKey?: string;
  PartitionKey: string | undefined;
}
export interface PutRecordsInput {
  Records: PutRecordsRequestEntry[] | undefined;
  StreamName?: string;
  StreamARN?: string;
}
export interface PutRecordsResultEntry {
  SequenceNumber?: string;
  ShardId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface PutRecordsOutput {
  FailedRecordCount?: number;
  Records: PutRecordsResultEntry[] | undefined;
  EncryptionType?: EncryptionType | string;
}
export interface RegisterStreamConsumerInput {
  StreamARN: string | undefined;
  ConsumerName: string | undefined;
}
export interface RegisterStreamConsumerOutput {
  Consumer: Consumer | undefined;
}
export interface RemoveTagsFromStreamInput {
  StreamName?: string;
  TagKeys: string[] | undefined;
  StreamARN?: string;
}
export interface SplitShardInput {
  StreamName?: string;
  ShardToSplit: string | undefined;
  NewStartingHashKey: string | undefined;
  StreamARN?: string;
}
export interface StartStreamEncryptionInput {
  StreamName?: string;
  EncryptionType: EncryptionType | string | undefined;
  KeyId: string | undefined;
  StreamARN?: string;
}
export interface StopStreamEncryptionInput {
  StreamName?: string;
  EncryptionType: EncryptionType | string | undefined;
  KeyId: string | undefined;
  StreamARN?: string;
}
export interface StartingPosition {
  Type: ShardIteratorType | string | undefined;
  SequenceNumber?: string;
  Timestamp?: Date;
}
export interface SubscribeToShardInput {
  ConsumerARN: string | undefined;
  ShardId: string | undefined;
  StartingPosition: StartingPosition | undefined;
}
export interface SubscribeToShardEvent {
  Records: _Record[] | undefined;
  ContinuationSequenceNumber: string | undefined;
  MillisBehindLatest: number | undefined;
  ChildShards?: ChildShard[];
}
export type SubscribeToShardEventStream =
  | SubscribeToShardEventStream.InternalFailureExceptionMember
  | SubscribeToShardEventStream.KMSAccessDeniedExceptionMember
  | SubscribeToShardEventStream.KMSDisabledExceptionMember
  | SubscribeToShardEventStream.KMSInvalidStateExceptionMember
  | SubscribeToShardEventStream.KMSNotFoundExceptionMember
  | SubscribeToShardEventStream.KMSOptInRequiredMember
  | SubscribeToShardEventStream.KMSThrottlingExceptionMember
  | SubscribeToShardEventStream.ResourceInUseExceptionMember
  | SubscribeToShardEventStream.ResourceNotFoundExceptionMember
  | SubscribeToShardEventStream.SubscribeToShardEventMember
  | SubscribeToShardEventStream.$UnknownMember;
export declare namespace SubscribeToShardEventStream {
  interface SubscribeToShardEventMember {
    SubscribeToShardEvent: SubscribeToShardEvent;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface ResourceNotFoundExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException: ResourceNotFoundException;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface ResourceInUseExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException: ResourceInUseException;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface KMSDisabledExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException: KMSDisabledException;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface KMSInvalidStateExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException: KMSInvalidStateException;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface KMSAccessDeniedExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException: KMSAccessDeniedException;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface KMSNotFoundExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException: KMSNotFoundException;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface KMSOptInRequiredMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired: KMSOptInRequired;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface KMSThrottlingExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException: KMSThrottlingException;
    InternalFailureException?: never;
    $unknown?: never;
  }
  interface InternalFailureExceptionMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException: InternalFailureException;
    $unknown?: never;
  }
  interface $UnknownMember {
    SubscribeToShardEvent?: never;
    ResourceNotFoundException?: never;
    ResourceInUseException?: never;
    KMSDisabledException?: never;
    KMSInvalidStateException?: never;
    KMSAccessDeniedException?: never;
    KMSNotFoundException?: never;
    KMSOptInRequired?: never;
    KMSThrottlingException?: never;
    InternalFailureException?: never;
    $unknown: [string, any];
  }
  interface Visitor<T> {
    SubscribeToShardEvent: (value: SubscribeToShardEvent) => T;
    ResourceNotFoundException: (value: ResourceNotFoundException) => T;
    ResourceInUseException: (value: ResourceInUseException) => T;
    KMSDisabledException: (value: KMSDisabledException) => T;
    KMSInvalidStateException: (value: KMSInvalidStateException) => T;
    KMSAccessDeniedException: (value: KMSAccessDeniedException) => T;
    KMSNotFoundException: (value: KMSNotFoundException) => T;
    KMSOptInRequired: (value: KMSOptInRequired) => T;
    KMSThrottlingException: (value: KMSThrottlingException) => T;
    InternalFailureException: (value: InternalFailureException) => T;
    _: (name: string, value: any) => T;
  }
  const visit: <T>(
    value: SubscribeToShardEventStream,
    visitor: Visitor<T>
  ) => T;
}
export interface SubscribeToShardOutput {
  EventStream: AsyncIterable<SubscribeToShardEventStream> | undefined;
}
export declare const ScalingType: {
  readonly UNIFORM_SCALING: "UNIFORM_SCALING";
};
export type ScalingType = (typeof ScalingType)[keyof typeof ScalingType];
export interface UpdateShardCountInput {
  StreamName?: string;
  TargetShardCount: number | undefined;
  ScalingType: ScalingType | string | undefined;
  StreamARN?: string;
}
export interface UpdateShardCountOutput {
  StreamName?: string;
  CurrentShardCount?: number;
  TargetShardCount?: number;
  StreamARN?: string;
}
export interface UpdateStreamModeInput {
  StreamARN: string | undefined;
  StreamModeDetails: StreamModeDetails | undefined;
}
export declare const SubscribeToShardEventStreamFilterSensitiveLog: (
  obj: SubscribeToShardEventStream
) => any;
export declare const SubscribeToShardOutputFilterSensitiveLog: (
  obj: SubscribeToShardOutput
) => any;
