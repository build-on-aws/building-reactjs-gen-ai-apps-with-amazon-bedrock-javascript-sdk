import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
} from "@aws-sdk/middleware-host-header";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { Credentials as __Credentials } from "@aws-sdk/types";
import {
  RegionInputConfig,
  RegionResolvedConfig,
} from "@smithy/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
} from "@smithy/eventstream-serde-config-resolver";
import {
  EndpointInputConfig,
  EndpointResolvedConfig,
} from "@smithy/middleware-endpoint";
import {
  RetryInputConfig,
  RetryResolvedConfig,
} from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";
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
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
} from "./endpoint/EndpointParameters";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";
export { __Client };
export type ServiceInputTypes =
  | AddTagsToStreamCommandInput
  | CreateStreamCommandInput
  | DecreaseStreamRetentionPeriodCommandInput
  | DeleteStreamCommandInput
  | DeregisterStreamConsumerCommandInput
  | DescribeLimitsCommandInput
  | DescribeStreamCommandInput
  | DescribeStreamConsumerCommandInput
  | DescribeStreamSummaryCommandInput
  | DisableEnhancedMonitoringCommandInput
  | EnableEnhancedMonitoringCommandInput
  | GetRecordsCommandInput
  | GetShardIteratorCommandInput
  | IncreaseStreamRetentionPeriodCommandInput
  | ListShardsCommandInput
  | ListStreamConsumersCommandInput
  | ListStreamsCommandInput
  | ListTagsForStreamCommandInput
  | MergeShardsCommandInput
  | PutRecordCommandInput
  | PutRecordsCommandInput
  | RegisterStreamConsumerCommandInput
  | RemoveTagsFromStreamCommandInput
  | SplitShardCommandInput
  | StartStreamEncryptionCommandInput
  | StopStreamEncryptionCommandInput
  | SubscribeToShardCommandInput
  | UpdateShardCountCommandInput
  | UpdateStreamModeCommandInput;
export type ServiceOutputTypes =
  | AddTagsToStreamCommandOutput
  | CreateStreamCommandOutput
  | DecreaseStreamRetentionPeriodCommandOutput
  | DeleteStreamCommandOutput
  | DeregisterStreamConsumerCommandOutput
  | DescribeLimitsCommandOutput
  | DescribeStreamCommandOutput
  | DescribeStreamConsumerCommandOutput
  | DescribeStreamSummaryCommandOutput
  | DisableEnhancedMonitoringCommandOutput
  | EnableEnhancedMonitoringCommandOutput
  | GetRecordsCommandOutput
  | GetShardIteratorCommandOutput
  | IncreaseStreamRetentionPeriodCommandOutput
  | ListShardsCommandOutput
  | ListStreamConsumersCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForStreamCommandOutput
  | MergeShardsCommandOutput
  | PutRecordCommandOutput
  | PutRecordsCommandOutput
  | RegisterStreamConsumerCommandOutput
  | RemoveTagsFromStreamCommandOutput
  | SplitShardCommandOutput
  | StartStreamEncryptionCommandOutput
  | StopStreamEncryptionCommandOutput
  | SubscribeToShardCommandOutput
  | UpdateShardCountCommandOutput
  | UpdateStreamModeCommandOutput;
export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  requestHandler?: __HttpHandler;
  sha256?: __ChecksumConstructor | __HashConstructor;
  urlParser?: __UrlParser;
  bodyLengthChecker?: __BodyLengthCalculator;
  streamCollector?: __StreamCollector;
  base64Decoder?: __Decoder;
  base64Encoder?: __Encoder;
  utf8Decoder?: __Decoder;
  utf8Encoder?: __Encoder;
  runtime?: string;
  disableHostPrefix?: boolean;
  serviceId?: string;
  useDualstackEndpoint?: boolean | __Provider<boolean>;
  useFipsEndpoint?: boolean | __Provider<boolean>;
  region?: string | __Provider<string>;
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
  defaultUserAgentProvider?: Provider<__UserAgent>;
  maxAttempts?: number | __Provider<number>;
  retryMode?: string | __Provider<string>;
  logger?: __Logger;
  extensions?: RuntimeExtension[];
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}
export type KinesisClientConfigType = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  EventStreamSerdeInputConfig &
  ClientInputEndpointParameters;
export interface KinesisClientConfig extends KinesisClientConfigType {}
export type KinesisClientResolvedConfigType =
  __SmithyResolvedConfiguration<__HttpHandlerOptions> &
    Required<ClientDefaults> &
    RuntimeExtensionsConfig &
    RegionResolvedConfig &
    EndpointResolvedConfig<EndpointParameters> &
    RetryResolvedConfig &
    HostHeaderResolvedConfig &
    AwsAuthResolvedConfig &
    UserAgentResolvedConfig &
    EventStreamSerdeResolvedConfig &
    ClientResolvedEndpointParameters;
export interface KinesisClientResolvedConfig
  extends KinesisClientResolvedConfigType {}
export declare class KinesisClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KinesisClientResolvedConfig
> {
  readonly config: KinesisClientResolvedConfig;
  constructor(
    ...[configuration]: __CheckOptionalClientConfig<KinesisClientConfig>
  );
  destroy(): void;
}
