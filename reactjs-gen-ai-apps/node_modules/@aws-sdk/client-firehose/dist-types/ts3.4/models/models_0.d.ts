import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { FirehoseServiceException as __BaseException } from "./FirehoseServiceException";
export interface AmazonOpenSearchServerlessBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
export interface CloudWatchLoggingOptions {
  Enabled?: boolean;
  LogGroupName?: string;
  LogStreamName?: string;
}
export declare const ProcessorParameterName: {
  readonly BUFFER_INTERVAL_IN_SECONDS: "BufferIntervalInSeconds";
  readonly BUFFER_SIZE_IN_MB: "BufferSizeInMBs";
  readonly Delimiter: "Delimiter";
  readonly JSON_PARSING_ENGINE: "JsonParsingEngine";
  readonly LAMBDA_ARN: "LambdaArn";
  readonly LAMBDA_NUMBER_OF_RETRIES: "NumberOfRetries";
  readonly METADATA_EXTRACTION_QUERY: "MetadataExtractionQuery";
  readonly ROLE_ARN: "RoleArn";
  readonly SUB_RECORD_TYPE: "SubRecordType";
};
export type ProcessorParameterName =
  (typeof ProcessorParameterName)[keyof typeof ProcessorParameterName];
export interface ProcessorParameter {
  ParameterName: ProcessorParameterName | string | undefined;
  ParameterValue: string | undefined;
}
export declare const ProcessorType: {
  readonly AppendDelimiterToRecord: "AppendDelimiterToRecord";
  readonly Lambda: "Lambda";
  readonly MetadataExtraction: "MetadataExtraction";
  readonly RecordDeAggregation: "RecordDeAggregation";
};
export type ProcessorType = (typeof ProcessorType)[keyof typeof ProcessorType];
export interface Processor {
  Type: ProcessorType | string | undefined;
  Parameters?: ProcessorParameter[];
}
export interface ProcessingConfiguration {
  Enabled?: boolean;
  Processors?: Processor[];
}
export interface AmazonOpenSearchServerlessRetryOptions {
  DurationInSeconds?: number;
}
export declare const AmazonOpenSearchServerlessS3BackupMode: {
  readonly AllDocuments: "AllDocuments";
  readonly FailedDocumentsOnly: "FailedDocumentsOnly";
};
export type AmazonOpenSearchServerlessS3BackupMode =
  (typeof AmazonOpenSearchServerlessS3BackupMode)[keyof typeof AmazonOpenSearchServerlessS3BackupMode];
export interface BufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
export declare const CompressionFormat: {
  readonly GZIP: "GZIP";
  readonly HADOOP_SNAPPY: "HADOOP_SNAPPY";
  readonly SNAPPY: "Snappy";
  readonly UNCOMPRESSED: "UNCOMPRESSED";
  readonly ZIP: "ZIP";
};
export type CompressionFormat =
  (typeof CompressionFormat)[keyof typeof CompressionFormat];
export interface KMSEncryptionConfig {
  AWSKMSKeyARN: string | undefined;
}
export declare const NoEncryptionConfig: {
  readonly NoEncryption: "NoEncryption";
};
export type NoEncryptionConfig =
  (typeof NoEncryptionConfig)[keyof typeof NoEncryptionConfig];
export interface EncryptionConfiguration {
  NoEncryptionConfig?: NoEncryptionConfig | string;
  KMSEncryptionConfig?: KMSEncryptionConfig;
}
export interface S3DestinationConfiguration {
  RoleARN: string | undefined;
  BucketARN: string | undefined;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat | string;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface VpcConfiguration {
  SubnetIds: string[] | undefined;
  RoleARN: string | undefined;
  SecurityGroupIds: string[] | undefined;
}
export interface AmazonOpenSearchServerlessDestinationConfiguration {
  RoleARN: string | undefined;
  CollectionEndpoint?: string;
  IndexName: string | undefined;
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode | string;
  S3Configuration: S3DestinationConfiguration | undefined;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfiguration?: VpcConfiguration;
}
export interface S3DestinationDescription {
  RoleARN: string | undefined;
  BucketARN: string | undefined;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints: BufferingHints | undefined;
  CompressionFormat: CompressionFormat | string | undefined;
  EncryptionConfiguration: EncryptionConfiguration | undefined;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface VpcConfigurationDescription {
  SubnetIds: string[] | undefined;
  RoleARN: string | undefined;
  SecurityGroupIds: string[] | undefined;
  VpcId: string | undefined;
}
export interface AmazonOpenSearchServerlessDestinationDescription {
  RoleARN?: string;
  CollectionEndpoint?: string;
  IndexName?: string;
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
  S3BackupMode?: AmazonOpenSearchServerlessS3BackupMode | string;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfigurationDescription?: VpcConfigurationDescription;
}
export interface S3DestinationUpdate {
  RoleARN?: string;
  BucketARN?: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat | string;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface AmazonOpenSearchServerlessDestinationUpdate {
  RoleARN?: string;
  CollectionEndpoint?: string;
  IndexName?: string;
  BufferingHints?: AmazonOpenSearchServerlessBufferingHints;
  RetryOptions?: AmazonOpenSearchServerlessRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface AmazonopensearchserviceBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
export declare const AmazonopensearchserviceIndexRotationPeriod: {
  readonly NoRotation: "NoRotation";
  readonly OneDay: "OneDay";
  readonly OneHour: "OneHour";
  readonly OneMonth: "OneMonth";
  readonly OneWeek: "OneWeek";
};
export type AmazonopensearchserviceIndexRotationPeriod =
  (typeof AmazonopensearchserviceIndexRotationPeriod)[keyof typeof AmazonopensearchserviceIndexRotationPeriod];
export interface AmazonopensearchserviceRetryOptions {
  DurationInSeconds?: number;
}
export declare const AmazonopensearchserviceS3BackupMode: {
  readonly AllDocuments: "AllDocuments";
  readonly FailedDocumentsOnly: "FailedDocumentsOnly";
};
export type AmazonopensearchserviceS3BackupMode =
  (typeof AmazonopensearchserviceS3BackupMode)[keyof typeof AmazonopensearchserviceS3BackupMode];
export interface AmazonopensearchserviceDestinationConfiguration {
  RoleARN: string | undefined;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName: string | undefined;
  TypeName?: string;
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | string;
  BufferingHints?: AmazonopensearchserviceBufferingHints;
  RetryOptions?: AmazonopensearchserviceRetryOptions;
  S3BackupMode?: AmazonopensearchserviceS3BackupMode | string;
  S3Configuration: S3DestinationConfiguration | undefined;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfiguration?: VpcConfiguration;
}
export interface AmazonopensearchserviceDestinationDescription {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | string;
  BufferingHints?: AmazonopensearchserviceBufferingHints;
  RetryOptions?: AmazonopensearchserviceRetryOptions;
  S3BackupMode?: AmazonopensearchserviceS3BackupMode | string;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfigurationDescription?: VpcConfigurationDescription;
}
export interface AmazonopensearchserviceDestinationUpdate {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: AmazonopensearchserviceIndexRotationPeriod | string;
  BufferingHints?: AmazonopensearchserviceBufferingHints;
  RetryOptions?: AmazonopensearchserviceRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export declare class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<
      ConcurrentModificationException,
      __BaseException
    >
  );
}
export declare const ContentEncoding: {
  readonly GZIP: "GZIP";
  readonly NONE: "NONE";
};
export type ContentEncoding =
  (typeof ContentEncoding)[keyof typeof ContentEncoding];
export interface CopyCommand {
  DataTableName: string | undefined;
  DataTableColumns?: string;
  CopyOptions?: string;
}
export declare const KeyType: {
  readonly AWS_OWNED_CMK: "AWS_OWNED_CMK";
  readonly CUSTOMER_MANAGED_CMK: "CUSTOMER_MANAGED_CMK";
};
export type KeyType = (typeof KeyType)[keyof typeof KeyType];
export interface DeliveryStreamEncryptionConfigurationInput {
  KeyARN?: string;
  KeyType: KeyType | string | undefined;
}
export declare const DeliveryStreamType: {
  readonly DirectPut: "DirectPut";
  readonly KinesisStreamAsSource: "KinesisStreamAsSource";
};
export type DeliveryStreamType =
  (typeof DeliveryStreamType)[keyof typeof DeliveryStreamType];
export interface ElasticsearchBufferingHints {
  IntervalInSeconds?: number;
  SizeInMBs?: number;
}
export declare const ElasticsearchIndexRotationPeriod: {
  readonly NoRotation: "NoRotation";
  readonly OneDay: "OneDay";
  readonly OneHour: "OneHour";
  readonly OneMonth: "OneMonth";
  readonly OneWeek: "OneWeek";
};
export type ElasticsearchIndexRotationPeriod =
  (typeof ElasticsearchIndexRotationPeriod)[keyof typeof ElasticsearchIndexRotationPeriod];
export interface ElasticsearchRetryOptions {
  DurationInSeconds?: number;
}
export declare const ElasticsearchS3BackupMode: {
  readonly AllDocuments: "AllDocuments";
  readonly FailedDocumentsOnly: "FailedDocumentsOnly";
};
export type ElasticsearchS3BackupMode =
  (typeof ElasticsearchS3BackupMode)[keyof typeof ElasticsearchS3BackupMode];
export interface ElasticsearchDestinationConfiguration {
  RoleARN: string | undefined;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName: string | undefined;
  TypeName?: string;
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | string;
  BufferingHints?: ElasticsearchBufferingHints;
  RetryOptions?: ElasticsearchRetryOptions;
  S3BackupMode?: ElasticsearchS3BackupMode | string;
  S3Configuration: S3DestinationConfiguration | undefined;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfiguration?: VpcConfiguration;
}
export interface HiveJsonSerDe {
  TimestampFormats?: string[];
}
export interface OpenXJsonSerDe {
  ConvertDotsInJsonKeysToUnderscores?: boolean;
  CaseInsensitive?: boolean;
  ColumnToJsonKeyMappings?: Record<string, string>;
}
export interface Deserializer {
  OpenXJsonSerDe?: OpenXJsonSerDe;
  HiveJsonSerDe?: HiveJsonSerDe;
}
export interface InputFormatConfiguration {
  Deserializer?: Deserializer;
}
export declare const OrcCompression: {
  readonly NONE: "NONE";
  readonly SNAPPY: "SNAPPY";
  readonly ZLIB: "ZLIB";
};
export type OrcCompression =
  (typeof OrcCompression)[keyof typeof OrcCompression];
export declare const OrcFormatVersion: {
  readonly V0_11: "V0_11";
  readonly V0_12: "V0_12";
};
export type OrcFormatVersion =
  (typeof OrcFormatVersion)[keyof typeof OrcFormatVersion];
export interface OrcSerDe {
  StripeSizeBytes?: number;
  BlockSizeBytes?: number;
  RowIndexStride?: number;
  EnablePadding?: boolean;
  PaddingTolerance?: number;
  Compression?: OrcCompression | string;
  BloomFilterColumns?: string[];
  BloomFilterFalsePositiveProbability?: number;
  DictionaryKeyThreshold?: number;
  FormatVersion?: OrcFormatVersion | string;
}
export declare const ParquetCompression: {
  readonly GZIP: "GZIP";
  readonly SNAPPY: "SNAPPY";
  readonly UNCOMPRESSED: "UNCOMPRESSED";
};
export type ParquetCompression =
  (typeof ParquetCompression)[keyof typeof ParquetCompression];
export declare const ParquetWriterVersion: {
  readonly V1: "V1";
  readonly V2: "V2";
};
export type ParquetWriterVersion =
  (typeof ParquetWriterVersion)[keyof typeof ParquetWriterVersion];
export interface ParquetSerDe {
  BlockSizeBytes?: number;
  PageSizeBytes?: number;
  Compression?: ParquetCompression | string;
  EnableDictionaryCompression?: boolean;
  MaxPaddingBytes?: number;
  WriterVersion?: ParquetWriterVersion | string;
}
export interface Serializer {
  ParquetSerDe?: ParquetSerDe;
  OrcSerDe?: OrcSerDe;
}
export interface OutputFormatConfiguration {
  Serializer?: Serializer;
}
export interface SchemaConfiguration {
  RoleARN?: string;
  CatalogId?: string;
  DatabaseName?: string;
  TableName?: string;
  Region?: string;
  VersionId?: string;
}
export interface DataFormatConversionConfiguration {
  SchemaConfiguration?: SchemaConfiguration;
  InputFormatConfiguration?: InputFormatConfiguration;
  OutputFormatConfiguration?: OutputFormatConfiguration;
  Enabled?: boolean;
}
export interface RetryOptions {
  DurationInSeconds?: number;
}
export interface DynamicPartitioningConfiguration {
  RetryOptions?: RetryOptions;
  Enabled?: boolean;
}
export declare const S3BackupMode: {
  readonly Disabled: "Disabled";
  readonly Enabled: "Enabled";
};
export type S3BackupMode = (typeof S3BackupMode)[keyof typeof S3BackupMode];
export interface ExtendedS3DestinationConfiguration {
  RoleARN: string | undefined;
  BucketARN: string | undefined;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat | string;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: S3BackupMode | string;
  S3BackupConfiguration?: S3DestinationConfiguration;
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}
export interface HttpEndpointBufferingHints {
  SizeInMBs?: number;
  IntervalInSeconds?: number;
}
export interface HttpEndpointConfiguration {
  Url: string | undefined;
  Name?: string;
  AccessKey?: string;
}
export interface HttpEndpointCommonAttribute {
  AttributeName: string | undefined;
  AttributeValue: string | undefined;
}
export interface HttpEndpointRequestConfiguration {
  ContentEncoding?: ContentEncoding | string;
  CommonAttributes?: HttpEndpointCommonAttribute[];
}
export interface HttpEndpointRetryOptions {
  DurationInSeconds?: number;
}
export declare const HttpEndpointS3BackupMode: {
  readonly AllData: "AllData";
  readonly FailedDataOnly: "FailedDataOnly";
};
export type HttpEndpointS3BackupMode =
  (typeof HttpEndpointS3BackupMode)[keyof typeof HttpEndpointS3BackupMode];
export interface HttpEndpointDestinationConfiguration {
  EndpointConfiguration: HttpEndpointConfiguration | undefined;
  BufferingHints?: HttpEndpointBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  RequestConfiguration?: HttpEndpointRequestConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: HttpEndpointRetryOptions;
  S3BackupMode?: HttpEndpointS3BackupMode | string;
  S3Configuration: S3DestinationConfiguration | undefined;
}
export interface KinesisStreamSourceConfiguration {
  KinesisStreamARN: string | undefined;
  RoleARN: string | undefined;
}
export interface RedshiftRetryOptions {
  DurationInSeconds?: number;
}
export declare const RedshiftS3BackupMode: {
  readonly Disabled: "Disabled";
  readonly Enabled: "Enabled";
};
export type RedshiftS3BackupMode =
  (typeof RedshiftS3BackupMode)[keyof typeof RedshiftS3BackupMode];
export interface RedshiftDestinationConfiguration {
  RoleARN: string | undefined;
  ClusterJDBCURL: string | undefined;
  CopyCommand: CopyCommand | undefined;
  Username: string | undefined;
  Password: string | undefined;
  RetryOptions?: RedshiftRetryOptions;
  S3Configuration: S3DestinationConfiguration | undefined;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode | string;
  S3BackupConfiguration?: S3DestinationConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export declare const HECEndpointType: {
  readonly Event: "Event";
  readonly Raw: "Raw";
};
export type HECEndpointType =
  (typeof HECEndpointType)[keyof typeof HECEndpointType];
export interface SplunkRetryOptions {
  DurationInSeconds?: number;
}
export declare const SplunkS3BackupMode: {
  readonly AllEvents: "AllEvents";
  readonly FailedEventsOnly: "FailedEventsOnly";
};
export type SplunkS3BackupMode =
  (typeof SplunkS3BackupMode)[keyof typeof SplunkS3BackupMode];
export interface SplunkDestinationConfiguration {
  HECEndpoint: string | undefined;
  HECEndpointType: HECEndpointType | string | undefined;
  HECToken: string | undefined;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode | string;
  S3Configuration: S3DestinationConfiguration | undefined;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface Tag {
  Key: string | undefined;
  Value?: string;
}
export interface CreateDeliveryStreamInput {
  DeliveryStreamName: string | undefined;
  DeliveryStreamType?: DeliveryStreamType | string;
  KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
  S3DestinationConfiguration?: S3DestinationConfiguration;
  ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
  RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
  ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
  AmazonopensearchserviceDestinationConfiguration?: AmazonopensearchserviceDestinationConfiguration;
  SplunkDestinationConfiguration?: SplunkDestinationConfiguration;
  HttpEndpointDestinationConfiguration?: HttpEndpointDestinationConfiguration;
  Tags?: Tag[];
  AmazonOpenSearchServerlessDestinationConfiguration?: AmazonOpenSearchServerlessDestinationConfiguration;
}
export interface CreateDeliveryStreamOutput {
  DeliveryStreamARN?: string;
}
export declare class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>
  );
}
export declare class InvalidKMSResourceException extends __BaseException {
  readonly name: "InvalidKMSResourceException";
  readonly $fault: "client";
  code?: string;
  constructor(
    opts: __ExceptionOptionType<InvalidKMSResourceException, __BaseException>
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
export interface DeleteDeliveryStreamInput {
  DeliveryStreamName: string | undefined;
  AllowForceDelete?: boolean;
}
export interface DeleteDeliveryStreamOutput {}
export declare class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException";
  readonly $fault: "client";
  constructor(
    opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>
  );
}
export declare const DeliveryStreamFailureType: {
  readonly CREATE_ENI_FAILED: "CREATE_ENI_FAILED";
  readonly CREATE_KMS_GRANT_FAILED: "CREATE_KMS_GRANT_FAILED";
  readonly DELETE_ENI_FAILED: "DELETE_ENI_FAILED";
  readonly DISABLED_KMS_KEY: "DISABLED_KMS_KEY";
  readonly ENI_ACCESS_DENIED: "ENI_ACCESS_DENIED";
  readonly INVALID_KMS_KEY: "INVALID_KMS_KEY";
  readonly KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED";
  readonly KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND";
  readonly KMS_OPT_IN_REQUIRED: "KMS_OPT_IN_REQUIRED";
  readonly RETIRE_KMS_GRANT_FAILED: "RETIRE_KMS_GRANT_FAILED";
  readonly SECURITY_GROUP_ACCESS_DENIED: "SECURITY_GROUP_ACCESS_DENIED";
  readonly SECURITY_GROUP_NOT_FOUND: "SECURITY_GROUP_NOT_FOUND";
  readonly SUBNET_ACCESS_DENIED: "SUBNET_ACCESS_DENIED";
  readonly SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND";
  readonly UNKNOWN_ERROR: "UNKNOWN_ERROR";
};
export type DeliveryStreamFailureType =
  (typeof DeliveryStreamFailureType)[keyof typeof DeliveryStreamFailureType];
export interface FailureDescription {
  Type: DeliveryStreamFailureType | string | undefined;
  Details: string | undefined;
}
export declare const DeliveryStreamEncryptionStatus: {
  readonly DISABLED: "DISABLED";
  readonly DISABLING: "DISABLING";
  readonly DISABLING_FAILED: "DISABLING_FAILED";
  readonly ENABLED: "ENABLED";
  readonly ENABLING: "ENABLING";
  readonly ENABLING_FAILED: "ENABLING_FAILED";
};
export type DeliveryStreamEncryptionStatus =
  (typeof DeliveryStreamEncryptionStatus)[keyof typeof DeliveryStreamEncryptionStatus];
export interface DeliveryStreamEncryptionConfiguration {
  KeyARN?: string;
  KeyType?: KeyType | string;
  Status?: DeliveryStreamEncryptionStatus | string;
  FailureDescription?: FailureDescription;
}
export declare const DeliveryStreamStatus: {
  readonly ACTIVE: "ACTIVE";
  readonly CREATING: "CREATING";
  readonly CREATING_FAILED: "CREATING_FAILED";
  readonly DELETING: "DELETING";
  readonly DELETING_FAILED: "DELETING_FAILED";
};
export type DeliveryStreamStatus =
  (typeof DeliveryStreamStatus)[keyof typeof DeliveryStreamStatus];
export interface ElasticsearchDestinationDescription {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | string;
  BufferingHints?: ElasticsearchBufferingHints;
  RetryOptions?: ElasticsearchRetryOptions;
  S3BackupMode?: ElasticsearchS3BackupMode | string;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  VpcConfigurationDescription?: VpcConfigurationDescription;
}
export interface ExtendedS3DestinationDescription {
  RoleARN: string | undefined;
  BucketARN: string | undefined;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints: BufferingHints | undefined;
  CompressionFormat: CompressionFormat | string | undefined;
  EncryptionConfiguration: EncryptionConfiguration | undefined;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: S3BackupMode | string;
  S3BackupDescription?: S3DestinationDescription;
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}
export interface HttpEndpointDescription {
  Url?: string;
  Name?: string;
}
export interface HttpEndpointDestinationDescription {
  EndpointConfiguration?: HttpEndpointDescription;
  BufferingHints?: HttpEndpointBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  RequestConfiguration?: HttpEndpointRequestConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: HttpEndpointRetryOptions;
  S3BackupMode?: HttpEndpointS3BackupMode | string;
  S3DestinationDescription?: S3DestinationDescription;
}
export interface RedshiftDestinationDescription {
  RoleARN: string | undefined;
  ClusterJDBCURL: string | undefined;
  CopyCommand: CopyCommand | undefined;
  Username: string | undefined;
  RetryOptions?: RedshiftRetryOptions;
  S3DestinationDescription: S3DestinationDescription | undefined;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode | string;
  S3BackupDescription?: S3DestinationDescription;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface SplunkDestinationDescription {
  HECEndpoint?: string;
  HECEndpointType?: HECEndpointType | string;
  HECToken?: string;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode | string;
  S3DestinationDescription?: S3DestinationDescription;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface DestinationDescription {
  DestinationId: string | undefined;
  S3DestinationDescription?: S3DestinationDescription;
  ExtendedS3DestinationDescription?: ExtendedS3DestinationDescription;
  RedshiftDestinationDescription?: RedshiftDestinationDescription;
  ElasticsearchDestinationDescription?: ElasticsearchDestinationDescription;
  AmazonopensearchserviceDestinationDescription?: AmazonopensearchserviceDestinationDescription;
  SplunkDestinationDescription?: SplunkDestinationDescription;
  HttpEndpointDestinationDescription?: HttpEndpointDestinationDescription;
  AmazonOpenSearchServerlessDestinationDescription?: AmazonOpenSearchServerlessDestinationDescription;
}
export interface KinesisStreamSourceDescription {
  KinesisStreamARN?: string;
  RoleARN?: string;
  DeliveryStartTimestamp?: Date;
}
export interface SourceDescription {
  KinesisStreamSourceDescription?: KinesisStreamSourceDescription;
}
export interface DeliveryStreamDescription {
  DeliveryStreamName: string | undefined;
  DeliveryStreamARN: string | undefined;
  DeliveryStreamStatus: DeliveryStreamStatus | string | undefined;
  FailureDescription?: FailureDescription;
  DeliveryStreamEncryptionConfiguration?: DeliveryStreamEncryptionConfiguration;
  DeliveryStreamType: DeliveryStreamType | string | undefined;
  VersionId: string | undefined;
  CreateTimestamp?: Date;
  LastUpdateTimestamp?: Date;
  Source?: SourceDescription;
  Destinations: DestinationDescription[] | undefined;
  HasMoreDestinations: boolean | undefined;
}
export interface DescribeDeliveryStreamInput {
  DeliveryStreamName: string | undefined;
  Limit?: number;
  ExclusiveStartDestinationId?: string;
}
export interface DescribeDeliveryStreamOutput {
  DeliveryStreamDescription: DeliveryStreamDescription | undefined;
}
export interface ElasticsearchDestinationUpdate {
  RoleARN?: string;
  DomainARN?: string;
  ClusterEndpoint?: string;
  IndexName?: string;
  TypeName?: string;
  IndexRotationPeriod?: ElasticsearchIndexRotationPeriod | string;
  BufferingHints?: ElasticsearchBufferingHints;
  RetryOptions?: ElasticsearchRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface ExtendedS3DestinationUpdate {
  RoleARN?: string;
  BucketARN?: string;
  Prefix?: string;
  ErrorOutputPrefix?: string;
  BufferingHints?: BufferingHints;
  CompressionFormat?: CompressionFormat | string;
  EncryptionConfiguration?: EncryptionConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: S3BackupMode | string;
  S3BackupUpdate?: S3DestinationUpdate;
  DataFormatConversionConfiguration?: DataFormatConversionConfiguration;
  DynamicPartitioningConfiguration?: DynamicPartitioningConfiguration;
}
export interface ListDeliveryStreamsInput {
  Limit?: number;
  DeliveryStreamType?: DeliveryStreamType | string;
  ExclusiveStartDeliveryStreamName?: string;
}
export interface ListDeliveryStreamsOutput {
  DeliveryStreamNames: string[] | undefined;
  HasMoreDeliveryStreams: boolean | undefined;
}
export interface ListTagsForDeliveryStreamInput {
  DeliveryStreamName: string | undefined;
  ExclusiveStartTagKey?: string;
  Limit?: number;
}
export interface ListTagsForDeliveryStreamOutput {
  Tags: Tag[] | undefined;
  HasMoreTags: boolean | undefined;
}
export interface _Record {
  Data: Uint8Array | undefined;
}
export interface PutRecordInput {
  DeliveryStreamName: string | undefined;
  Record: _Record | undefined;
}
export interface PutRecordOutput {
  RecordId: string | undefined;
  Encrypted?: boolean;
}
export declare class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException";
  readonly $fault: "server";
  constructor(
    opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>
  );
}
export interface PutRecordBatchInput {
  DeliveryStreamName: string | undefined;
  Records: _Record[] | undefined;
}
export interface PutRecordBatchResponseEntry {
  RecordId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export interface PutRecordBatchOutput {
  FailedPutCount: number | undefined;
  Encrypted?: boolean;
  RequestResponses: PutRecordBatchResponseEntry[] | undefined;
}
export interface StartDeliveryStreamEncryptionInput {
  DeliveryStreamName: string | undefined;
  DeliveryStreamEncryptionConfigurationInput?: DeliveryStreamEncryptionConfigurationInput;
}
export interface StartDeliveryStreamEncryptionOutput {}
export interface StopDeliveryStreamEncryptionInput {
  DeliveryStreamName: string | undefined;
}
export interface StopDeliveryStreamEncryptionOutput {}
export interface TagDeliveryStreamInput {
  DeliveryStreamName: string | undefined;
  Tags: Tag[] | undefined;
}
export interface TagDeliveryStreamOutput {}
export interface UntagDeliveryStreamInput {
  DeliveryStreamName: string | undefined;
  TagKeys: string[] | undefined;
}
export interface UntagDeliveryStreamOutput {}
export interface HttpEndpointDestinationUpdate {
  EndpointConfiguration?: HttpEndpointConfiguration;
  BufferingHints?: HttpEndpointBufferingHints;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
  RequestConfiguration?: HttpEndpointRequestConfiguration;
  ProcessingConfiguration?: ProcessingConfiguration;
  RoleARN?: string;
  RetryOptions?: HttpEndpointRetryOptions;
  S3BackupMode?: HttpEndpointS3BackupMode | string;
  S3Update?: S3DestinationUpdate;
}
export interface RedshiftDestinationUpdate {
  RoleARN?: string;
  ClusterJDBCURL?: string;
  CopyCommand?: CopyCommand;
  Username?: string;
  Password?: string;
  RetryOptions?: RedshiftRetryOptions;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  S3BackupMode?: RedshiftS3BackupMode | string;
  S3BackupUpdate?: S3DestinationUpdate;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface SplunkDestinationUpdate {
  HECEndpoint?: string;
  HECEndpointType?: HECEndpointType | string;
  HECToken?: string;
  HECAcknowledgmentTimeoutInSeconds?: number;
  RetryOptions?: SplunkRetryOptions;
  S3BackupMode?: SplunkS3BackupMode | string;
  S3Update?: S3DestinationUpdate;
  ProcessingConfiguration?: ProcessingConfiguration;
  CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
}
export interface UpdateDestinationInput {
  DeliveryStreamName: string | undefined;
  CurrentDeliveryStreamVersionId: string | undefined;
  DestinationId: string | undefined;
  S3DestinationUpdate?: S3DestinationUpdate;
  ExtendedS3DestinationUpdate?: ExtendedS3DestinationUpdate;
  RedshiftDestinationUpdate?: RedshiftDestinationUpdate;
  ElasticsearchDestinationUpdate?: ElasticsearchDestinationUpdate;
  AmazonopensearchserviceDestinationUpdate?: AmazonopensearchserviceDestinationUpdate;
  SplunkDestinationUpdate?: SplunkDestinationUpdate;
  HttpEndpointDestinationUpdate?: HttpEndpointDestinationUpdate;
  AmazonOpenSearchServerlessDestinationUpdate?: AmazonOpenSearchServerlessDestinationUpdate;
}
export interface UpdateDestinationOutput {}
export declare const HttpEndpointConfigurationFilterSensitiveLog: (
  obj: HttpEndpointConfiguration
) => any;
export declare const HttpEndpointCommonAttributeFilterSensitiveLog: (
  obj: HttpEndpointCommonAttribute
) => any;
export declare const HttpEndpointRequestConfigurationFilterSensitiveLog: (
  obj: HttpEndpointRequestConfiguration
) => any;
export declare const HttpEndpointDestinationConfigurationFilterSensitiveLog: (
  obj: HttpEndpointDestinationConfiguration
) => any;
export declare const RedshiftDestinationConfigurationFilterSensitiveLog: (
  obj: RedshiftDestinationConfiguration
) => any;
export declare const CreateDeliveryStreamInputFilterSensitiveLog: (
  obj: CreateDeliveryStreamInput
) => any;
export declare const HttpEndpointDescriptionFilterSensitiveLog: (
  obj: HttpEndpointDescription
) => any;
export declare const HttpEndpointDestinationDescriptionFilterSensitiveLog: (
  obj: HttpEndpointDestinationDescription
) => any;
export declare const RedshiftDestinationDescriptionFilterSensitiveLog: (
  obj: RedshiftDestinationDescription
) => any;
export declare const DestinationDescriptionFilterSensitiveLog: (
  obj: DestinationDescription
) => any;
export declare const DeliveryStreamDescriptionFilterSensitiveLog: (
  obj: DeliveryStreamDescription
) => any;
export declare const DescribeDeliveryStreamOutputFilterSensitiveLog: (
  obj: DescribeDeliveryStreamOutput
) => any;
export declare const HttpEndpointDestinationUpdateFilterSensitiveLog: (
  obj: HttpEndpointDestinationUpdate
) => any;
export declare const RedshiftDestinationUpdateFilterSensitiveLog: (
  obj: RedshiftDestinationUpdate
) => any;
export declare const UpdateDestinationInputFilterSensitiveLog: (
  obj: UpdateDestinationInput
) => any;
