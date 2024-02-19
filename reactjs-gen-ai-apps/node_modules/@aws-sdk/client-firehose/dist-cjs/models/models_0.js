"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDestinationInputFilterSensitiveLog = exports.RedshiftDestinationUpdateFilterSensitiveLog = exports.HttpEndpointDestinationUpdateFilterSensitiveLog = exports.DescribeDeliveryStreamOutputFilterSensitiveLog = exports.DeliveryStreamDescriptionFilterSensitiveLog = exports.DestinationDescriptionFilterSensitiveLog = exports.RedshiftDestinationDescriptionFilterSensitiveLog = exports.HttpEndpointDestinationDescriptionFilterSensitiveLog = exports.HttpEndpointDescriptionFilterSensitiveLog = exports.CreateDeliveryStreamInputFilterSensitiveLog = exports.RedshiftDestinationConfigurationFilterSensitiveLog = exports.HttpEndpointDestinationConfigurationFilterSensitiveLog = exports.HttpEndpointRequestConfigurationFilterSensitiveLog = exports.HttpEndpointCommonAttributeFilterSensitiveLog = exports.HttpEndpointConfigurationFilterSensitiveLog = exports.ServiceUnavailableException = exports.DeliveryStreamStatus = exports.DeliveryStreamEncryptionStatus = exports.DeliveryStreamFailureType = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.LimitExceededException = exports.InvalidKMSResourceException = exports.InvalidArgumentException = exports.SplunkS3BackupMode = exports.HECEndpointType = exports.RedshiftS3BackupMode = exports.HttpEndpointS3BackupMode = exports.S3BackupMode = exports.ParquetWriterVersion = exports.ParquetCompression = exports.OrcFormatVersion = exports.OrcCompression = exports.ElasticsearchS3BackupMode = exports.ElasticsearchIndexRotationPeriod = exports.DeliveryStreamType = exports.KeyType = exports.ContentEncoding = exports.ConcurrentModificationException = exports.AmazonopensearchserviceS3BackupMode = exports.AmazonopensearchserviceIndexRotationPeriod = exports.NoEncryptionConfig = exports.CompressionFormat = exports.AmazonOpenSearchServerlessS3BackupMode = exports.ProcessorType = exports.ProcessorParameterName = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const FirehoseServiceException_1 = require("./FirehoseServiceException");
exports.ProcessorParameterName = {
    BUFFER_INTERVAL_IN_SECONDS: "BufferIntervalInSeconds",
    BUFFER_SIZE_IN_MB: "BufferSizeInMBs",
    Delimiter: "Delimiter",
    JSON_PARSING_ENGINE: "JsonParsingEngine",
    LAMBDA_ARN: "LambdaArn",
    LAMBDA_NUMBER_OF_RETRIES: "NumberOfRetries",
    METADATA_EXTRACTION_QUERY: "MetadataExtractionQuery",
    ROLE_ARN: "RoleArn",
    SUB_RECORD_TYPE: "SubRecordType",
};
exports.ProcessorType = {
    AppendDelimiterToRecord: "AppendDelimiterToRecord",
    Lambda: "Lambda",
    MetadataExtraction: "MetadataExtraction",
    RecordDeAggregation: "RecordDeAggregation",
};
exports.AmazonOpenSearchServerlessS3BackupMode = {
    AllDocuments: "AllDocuments",
    FailedDocumentsOnly: "FailedDocumentsOnly",
};
exports.CompressionFormat = {
    GZIP: "GZIP",
    HADOOP_SNAPPY: "HADOOP_SNAPPY",
    SNAPPY: "Snappy",
    UNCOMPRESSED: "UNCOMPRESSED",
    ZIP: "ZIP",
};
exports.NoEncryptionConfig = {
    NoEncryption: "NoEncryption",
};
exports.AmazonopensearchserviceIndexRotationPeriod = {
    NoRotation: "NoRotation",
    OneDay: "OneDay",
    OneHour: "OneHour",
    OneMonth: "OneMonth",
    OneWeek: "OneWeek",
};
exports.AmazonopensearchserviceS3BackupMode = {
    AllDocuments: "AllDocuments",
    FailedDocumentsOnly: "FailedDocumentsOnly",
};
class ConcurrentModificationException extends FirehoseServiceException_1.FirehoseServiceException {
    constructor(opts) {
        super({
            name: "ConcurrentModificationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConcurrentModificationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    }
}
exports.ConcurrentModificationException = ConcurrentModificationException;
exports.ContentEncoding = {
    GZIP: "GZIP",
    NONE: "NONE",
};
exports.KeyType = {
    AWS_OWNED_CMK: "AWS_OWNED_CMK",
    CUSTOMER_MANAGED_CMK: "CUSTOMER_MANAGED_CMK",
};
exports.DeliveryStreamType = {
    DirectPut: "DirectPut",
    KinesisStreamAsSource: "KinesisStreamAsSource",
};
exports.ElasticsearchIndexRotationPeriod = {
    NoRotation: "NoRotation",
    OneDay: "OneDay",
    OneHour: "OneHour",
    OneMonth: "OneMonth",
    OneWeek: "OneWeek",
};
exports.ElasticsearchS3BackupMode = {
    AllDocuments: "AllDocuments",
    FailedDocumentsOnly: "FailedDocumentsOnly",
};
exports.OrcCompression = {
    NONE: "NONE",
    SNAPPY: "SNAPPY",
    ZLIB: "ZLIB",
};
exports.OrcFormatVersion = {
    V0_11: "V0_11",
    V0_12: "V0_12",
};
exports.ParquetCompression = {
    GZIP: "GZIP",
    SNAPPY: "SNAPPY",
    UNCOMPRESSED: "UNCOMPRESSED",
};
exports.ParquetWriterVersion = {
    V1: "V1",
    V2: "V2",
};
exports.S3BackupMode = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
exports.HttpEndpointS3BackupMode = {
    AllData: "AllData",
    FailedDataOnly: "FailedDataOnly",
};
exports.RedshiftS3BackupMode = {
    Disabled: "Disabled",
    Enabled: "Enabled",
};
exports.HECEndpointType = {
    Event: "Event",
    Raw: "Raw",
};
exports.SplunkS3BackupMode = {
    AllEvents: "AllEvents",
    FailedEventsOnly: "FailedEventsOnly",
};
class InvalidArgumentException extends FirehoseServiceException_1.FirehoseServiceException {
    constructor(opts) {
        super({
            name: "InvalidArgumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidArgumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    }
}
exports.InvalidArgumentException = InvalidArgumentException;
class InvalidKMSResourceException extends FirehoseServiceException_1.FirehoseServiceException {
    constructor(opts) {
        super({
            name: "InvalidKMSResourceException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidKMSResourceException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidKMSResourceException.prototype);
        this.code = opts.code;
    }
}
exports.InvalidKMSResourceException = InvalidKMSResourceException;
class LimitExceededException extends FirehoseServiceException_1.FirehoseServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class ResourceInUseException extends FirehoseServiceException_1.FirehoseServiceException {
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
exports.ResourceInUseException = ResourceInUseException;
class ResourceNotFoundException extends FirehoseServiceException_1.FirehoseServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
exports.DeliveryStreamFailureType = {
    CREATE_ENI_FAILED: "CREATE_ENI_FAILED",
    CREATE_KMS_GRANT_FAILED: "CREATE_KMS_GRANT_FAILED",
    DELETE_ENI_FAILED: "DELETE_ENI_FAILED",
    DISABLED_KMS_KEY: "DISABLED_KMS_KEY",
    ENI_ACCESS_DENIED: "ENI_ACCESS_DENIED",
    INVALID_KMS_KEY: "INVALID_KMS_KEY",
    KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED",
    KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND",
    KMS_OPT_IN_REQUIRED: "KMS_OPT_IN_REQUIRED",
    RETIRE_KMS_GRANT_FAILED: "RETIRE_KMS_GRANT_FAILED",
    SECURITY_GROUP_ACCESS_DENIED: "SECURITY_GROUP_ACCESS_DENIED",
    SECURITY_GROUP_NOT_FOUND: "SECURITY_GROUP_NOT_FOUND",
    SUBNET_ACCESS_DENIED: "SUBNET_ACCESS_DENIED",
    SUBNET_NOT_FOUND: "SUBNET_NOT_FOUND",
    UNKNOWN_ERROR: "UNKNOWN_ERROR",
};
exports.DeliveryStreamEncryptionStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    DISABLING_FAILED: "DISABLING_FAILED",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
    ENABLING_FAILED: "ENABLING_FAILED",
};
exports.DeliveryStreamStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    CREATING_FAILED: "CREATING_FAILED",
    DELETING: "DELETING",
    DELETING_FAILED: "DELETING_FAILED",
};
class ServiceUnavailableException extends FirehoseServiceException_1.FirehoseServiceException {
    constructor(opts) {
        super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...opts,
        });
        this.name = "ServiceUnavailableException";
        this.$fault = "server";
        Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    }
}
exports.ServiceUnavailableException = ServiceUnavailableException;
const HttpEndpointConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Url && { Url: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.AccessKey && { AccessKey: smithy_client_1.SENSITIVE_STRING }),
});
exports.HttpEndpointConfigurationFilterSensitiveLog = HttpEndpointConfigurationFilterSensitiveLog;
const HttpEndpointCommonAttributeFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.AttributeName && { AttributeName: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.AttributeValue && { AttributeValue: smithy_client_1.SENSITIVE_STRING }),
});
exports.HttpEndpointCommonAttributeFilterSensitiveLog = HttpEndpointCommonAttributeFilterSensitiveLog;
const HttpEndpointRequestConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.CommonAttributes && {
        CommonAttributes: obj.CommonAttributes.map((item) => (0, exports.HttpEndpointCommonAttributeFilterSensitiveLog)(item)),
    }),
});
exports.HttpEndpointRequestConfigurationFilterSensitiveLog = HttpEndpointRequestConfigurationFilterSensitiveLog;
const HttpEndpointDestinationConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EndpointConfiguration && {
        EndpointConfiguration: (0, exports.HttpEndpointConfigurationFilterSensitiveLog)(obj.EndpointConfiguration),
    }),
    ...(obj.RequestConfiguration && {
        RequestConfiguration: (0, exports.HttpEndpointRequestConfigurationFilterSensitiveLog)(obj.RequestConfiguration),
    }),
});
exports.HttpEndpointDestinationConfigurationFilterSensitiveLog = HttpEndpointDestinationConfigurationFilterSensitiveLog;
const RedshiftDestinationConfigurationFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
});
exports.RedshiftDestinationConfigurationFilterSensitiveLog = RedshiftDestinationConfigurationFilterSensitiveLog;
const CreateDeliveryStreamInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RedshiftDestinationConfiguration && {
        RedshiftDestinationConfiguration: (0, exports.RedshiftDestinationConfigurationFilterSensitiveLog)(obj.RedshiftDestinationConfiguration),
    }),
    ...(obj.HttpEndpointDestinationConfiguration && {
        HttpEndpointDestinationConfiguration: (0, exports.HttpEndpointDestinationConfigurationFilterSensitiveLog)(obj.HttpEndpointDestinationConfiguration),
    }),
});
exports.CreateDeliveryStreamInputFilterSensitiveLog = CreateDeliveryStreamInputFilterSensitiveLog;
const HttpEndpointDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Url && { Url: smithy_client_1.SENSITIVE_STRING }),
});
exports.HttpEndpointDescriptionFilterSensitiveLog = HttpEndpointDescriptionFilterSensitiveLog;
const HttpEndpointDestinationDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EndpointConfiguration && {
        EndpointConfiguration: (0, exports.HttpEndpointDescriptionFilterSensitiveLog)(obj.EndpointConfiguration),
    }),
    ...(obj.RequestConfiguration && {
        RequestConfiguration: (0, exports.HttpEndpointRequestConfigurationFilterSensitiveLog)(obj.RequestConfiguration),
    }),
});
exports.HttpEndpointDestinationDescriptionFilterSensitiveLog = HttpEndpointDestinationDescriptionFilterSensitiveLog;
const RedshiftDestinationDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
});
exports.RedshiftDestinationDescriptionFilterSensitiveLog = RedshiftDestinationDescriptionFilterSensitiveLog;
const DestinationDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RedshiftDestinationDescription && {
        RedshiftDestinationDescription: (0, exports.RedshiftDestinationDescriptionFilterSensitiveLog)(obj.RedshiftDestinationDescription),
    }),
    ...(obj.HttpEndpointDestinationDescription && {
        HttpEndpointDestinationDescription: (0, exports.HttpEndpointDestinationDescriptionFilterSensitiveLog)(obj.HttpEndpointDestinationDescription),
    }),
});
exports.DestinationDescriptionFilterSensitiveLog = DestinationDescriptionFilterSensitiveLog;
const DeliveryStreamDescriptionFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Destinations && {
        Destinations: obj.Destinations.map((item) => (0, exports.DestinationDescriptionFilterSensitiveLog)(item)),
    }),
});
exports.DeliveryStreamDescriptionFilterSensitiveLog = DeliveryStreamDescriptionFilterSensitiveLog;
const DescribeDeliveryStreamOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.DeliveryStreamDescription && {
        DeliveryStreamDescription: (0, exports.DeliveryStreamDescriptionFilterSensitiveLog)(obj.DeliveryStreamDescription),
    }),
});
exports.DescribeDeliveryStreamOutputFilterSensitiveLog = DescribeDeliveryStreamOutputFilterSensitiveLog;
const HttpEndpointDestinationUpdateFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EndpointConfiguration && {
        EndpointConfiguration: (0, exports.HttpEndpointConfigurationFilterSensitiveLog)(obj.EndpointConfiguration),
    }),
    ...(obj.RequestConfiguration && {
        RequestConfiguration: (0, exports.HttpEndpointRequestConfigurationFilterSensitiveLog)(obj.RequestConfiguration),
    }),
});
exports.HttpEndpointDestinationUpdateFilterSensitiveLog = HttpEndpointDestinationUpdateFilterSensitiveLog;
const RedshiftDestinationUpdateFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Username && { Username: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
});
exports.RedshiftDestinationUpdateFilterSensitiveLog = RedshiftDestinationUpdateFilterSensitiveLog;
const UpdateDestinationInputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.RedshiftDestinationUpdate && {
        RedshiftDestinationUpdate: (0, exports.RedshiftDestinationUpdateFilterSensitiveLog)(obj.RedshiftDestinationUpdate),
    }),
    ...(obj.HttpEndpointDestinationUpdate && {
        HttpEndpointDestinationUpdate: (0, exports.HttpEndpointDestinationUpdateFilterSensitiveLog)(obj.HttpEndpointDestinationUpdate),
    }),
});
exports.UpdateDestinationInputFilterSensitiveLog = UpdateDestinationInputFilterSensitiveLog;
