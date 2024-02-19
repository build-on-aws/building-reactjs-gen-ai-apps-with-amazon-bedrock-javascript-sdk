import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import { _json, collectBody, decorateServiceException as __decorateServiceException, expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectNonNull as __expectNonNull, expectNumber as __expectNumber, expectString as __expectString, limitedParseDouble as __limitedParseDouble, parseEpochTimestamp as __parseEpochTimestamp, serializeFloat as __serializeFloat, take, withBaseException, } from "@smithy/smithy-client";
import { FirehoseServiceException as __BaseException } from "../models/FirehoseServiceException";
import { ConcurrentModificationException, InvalidArgumentException, InvalidKMSResourceException, LimitExceededException, ResourceInUseException, ResourceNotFoundException, ServiceUnavailableException, } from "../models/models_0";
export const se_CreateDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("CreateDeliveryStream");
    let body;
    body = JSON.stringify(se_CreateDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteDeliveryStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeDeliveryStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListDeliveryStreamsCommand = async (input, context) => {
    const headers = sharedHeaders("ListDeliveryStreams");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListTagsForDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForDeliveryStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutRecordCommand = async (input, context) => {
    const headers = sharedHeaders("PutRecord");
    let body;
    body = JSON.stringify(se_PutRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_PutRecordBatchCommand = async (input, context) => {
    const headers = sharedHeaders("PutRecordBatch");
    let body;
    body = JSON.stringify(se_PutRecordBatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_StartDeliveryStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StartDeliveryStreamEncryption");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_StopDeliveryStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StopDeliveryStreamEncryption");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_TagDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("TagDeliveryStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UntagDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("UntagDeliveryStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateDestination");
    let body;
    body = JSON.stringify(se_UpdateDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const de_CreateDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateDeliveryStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose#InvalidKMSResourceException":
            throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.firehose#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.firehose#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DeleteDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteDeliveryStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceInUseException":
        case "com.amazonaws.firehose#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_DescribeDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeDeliveryStreamOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeDeliveryStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_ListDeliveryStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListDeliveryStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListDeliveryStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    const parsedBody = parsedOutput.body;
    return throwDefaultError({
        output,
        parsedBody,
        errorCode,
    });
};
export const de_ListTagsForDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTagsForDeliveryStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.firehose#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutRecordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRecordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutRecordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose#InvalidKMSResourceException":
            throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.firehose#ServiceUnavailableException":
            throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_PutRecordBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRecordBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutRecordBatchCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose#InvalidKMSResourceException":
            throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ServiceUnavailableException":
        case "com.amazonaws.firehose#ServiceUnavailableException":
            throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_StartDeliveryStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartDeliveryStreamEncryptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_StartDeliveryStreamEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "InvalidKMSResourceException":
        case "com.amazonaws.firehose#InvalidKMSResourceException":
            throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.firehose#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.firehose#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_StopDeliveryStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StopDeliveryStreamEncryptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_StopDeliveryStreamEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.firehose#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.firehose#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_TagDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TagDeliveryStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.firehose#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.firehose#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UntagDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UntagDeliveryStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.firehose#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.firehose#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
export const de_UpdateDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = _json(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.firehose#ConcurrentModificationException":
            throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.firehose#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.firehose#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.firehose#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ConcurrentModificationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidArgumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidArgumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_InvalidKMSResourceExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new InvalidKMSResourceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ServiceUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ServiceUnavailableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const se_CreateDeliveryStreamInput = (input, context) => {
    return take(input, {
        AmazonOpenSearchServerlessDestinationConfiguration: _json,
        AmazonopensearchserviceDestinationConfiguration: _json,
        DeliveryStreamEncryptionConfigurationInput: _json,
        DeliveryStreamName: [],
        DeliveryStreamType: [],
        ElasticsearchDestinationConfiguration: _json,
        ExtendedS3DestinationConfiguration: (_) => se_ExtendedS3DestinationConfiguration(_, context),
        HttpEndpointDestinationConfiguration: _json,
        KinesisStreamSourceConfiguration: _json,
        RedshiftDestinationConfiguration: _json,
        S3DestinationConfiguration: _json,
        SplunkDestinationConfiguration: _json,
        Tags: _json,
    });
};
const se_DataFormatConversionConfiguration = (input, context) => {
    return take(input, {
        Enabled: [],
        InputFormatConfiguration: _json,
        OutputFormatConfiguration: (_) => se_OutputFormatConfiguration(_, context),
        SchemaConfiguration: _json,
    });
};
const se_ExtendedS3DestinationConfiguration = (input, context) => {
    return take(input, {
        BucketARN: [],
        BufferingHints: _json,
        CloudWatchLoggingOptions: _json,
        CompressionFormat: [],
        DataFormatConversionConfiguration: (_) => se_DataFormatConversionConfiguration(_, context),
        DynamicPartitioningConfiguration: _json,
        EncryptionConfiguration: _json,
        ErrorOutputPrefix: [],
        Prefix: [],
        ProcessingConfiguration: _json,
        RoleARN: [],
        S3BackupConfiguration: _json,
        S3BackupMode: [],
    });
};
const se_ExtendedS3DestinationUpdate = (input, context) => {
    return take(input, {
        BucketARN: [],
        BufferingHints: _json,
        CloudWatchLoggingOptions: _json,
        CompressionFormat: [],
        DataFormatConversionConfiguration: (_) => se_DataFormatConversionConfiguration(_, context),
        DynamicPartitioningConfiguration: _json,
        EncryptionConfiguration: _json,
        ErrorOutputPrefix: [],
        Prefix: [],
        ProcessingConfiguration: _json,
        RoleARN: [],
        S3BackupMode: [],
        S3BackupUpdate: _json,
    });
};
const se_OrcSerDe = (input, context) => {
    return take(input, {
        BlockSizeBytes: [],
        BloomFilterColumns: _json,
        BloomFilterFalsePositiveProbability: __serializeFloat,
        Compression: [],
        DictionaryKeyThreshold: __serializeFloat,
        EnablePadding: [],
        FormatVersion: [],
        PaddingTolerance: __serializeFloat,
        RowIndexStride: [],
        StripeSizeBytes: [],
    });
};
const se_OutputFormatConfiguration = (input, context) => {
    return take(input, {
        Serializer: (_) => se_Serializer(_, context),
    });
};
const se_PutRecordBatchInput = (input, context) => {
    return take(input, {
        DeliveryStreamName: [],
        Records: (_) => se_PutRecordBatchRequestEntryList(_, context),
    });
};
const se_PutRecordBatchRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se__Record(entry, context);
    });
};
const se_PutRecordInput = (input, context) => {
    return take(input, {
        DeliveryStreamName: [],
        Record: (_) => se__Record(_, context),
    });
};
const se__Record = (input, context) => {
    return take(input, {
        Data: context.base64Encoder,
    });
};
const se_Serializer = (input, context) => {
    return take(input, {
        OrcSerDe: (_) => se_OrcSerDe(_, context),
        ParquetSerDe: _json,
    });
};
const se_UpdateDestinationInput = (input, context) => {
    return take(input, {
        AmazonOpenSearchServerlessDestinationUpdate: _json,
        AmazonopensearchserviceDestinationUpdate: _json,
        CurrentDeliveryStreamVersionId: [],
        DeliveryStreamName: [],
        DestinationId: [],
        ElasticsearchDestinationUpdate: _json,
        ExtendedS3DestinationUpdate: (_) => se_ExtendedS3DestinationUpdate(_, context),
        HttpEndpointDestinationUpdate: _json,
        RedshiftDestinationUpdate: _json,
        S3DestinationUpdate: _json,
        SplunkDestinationUpdate: _json,
    });
};
const de_DataFormatConversionConfiguration = (output, context) => {
    return take(output, {
        Enabled: __expectBoolean,
        InputFormatConfiguration: _json,
        OutputFormatConfiguration: (_) => de_OutputFormatConfiguration(_, context),
        SchemaConfiguration: _json,
    });
};
const de_DeliveryStreamDescription = (output, context) => {
    return take(output, {
        CreateTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        DeliveryStreamARN: __expectString,
        DeliveryStreamEncryptionConfiguration: _json,
        DeliveryStreamName: __expectString,
        DeliveryStreamStatus: __expectString,
        DeliveryStreamType: __expectString,
        Destinations: (_) => de_DestinationDescriptionList(_, context),
        FailureDescription: _json,
        HasMoreDestinations: __expectBoolean,
        LastUpdateTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Source: (_) => de_SourceDescription(_, context),
        VersionId: __expectString,
    });
};
const de_DescribeDeliveryStreamOutput = (output, context) => {
    return take(output, {
        DeliveryStreamDescription: (_) => de_DeliveryStreamDescription(_, context),
    });
};
const de_DestinationDescription = (output, context) => {
    return take(output, {
        AmazonOpenSearchServerlessDestinationDescription: _json,
        AmazonopensearchserviceDestinationDescription: _json,
        DestinationId: __expectString,
        ElasticsearchDestinationDescription: _json,
        ExtendedS3DestinationDescription: (_) => de_ExtendedS3DestinationDescription(_, context),
        HttpEndpointDestinationDescription: _json,
        RedshiftDestinationDescription: _json,
        S3DestinationDescription: _json,
        SplunkDestinationDescription: _json,
    });
};
const de_DestinationDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_DestinationDescription(entry, context);
    });
    return retVal;
};
const de_ExtendedS3DestinationDescription = (output, context) => {
    return take(output, {
        BucketARN: __expectString,
        BufferingHints: _json,
        CloudWatchLoggingOptions: _json,
        CompressionFormat: __expectString,
        DataFormatConversionConfiguration: (_) => de_DataFormatConversionConfiguration(_, context),
        DynamicPartitioningConfiguration: _json,
        EncryptionConfiguration: _json,
        ErrorOutputPrefix: __expectString,
        Prefix: __expectString,
        ProcessingConfiguration: _json,
        RoleARN: __expectString,
        S3BackupDescription: _json,
        S3BackupMode: __expectString,
    });
};
const de_KinesisStreamSourceDescription = (output, context) => {
    return take(output, {
        DeliveryStartTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        KinesisStreamARN: __expectString,
        RoleARN: __expectString,
    });
};
const de_OrcSerDe = (output, context) => {
    return take(output, {
        BlockSizeBytes: __expectInt32,
        BloomFilterColumns: _json,
        BloomFilterFalsePositiveProbability: __limitedParseDouble,
        Compression: __expectString,
        DictionaryKeyThreshold: __limitedParseDouble,
        EnablePadding: __expectBoolean,
        FormatVersion: __expectString,
        PaddingTolerance: __limitedParseDouble,
        RowIndexStride: __expectInt32,
        StripeSizeBytes: __expectInt32,
    });
};
const de_OutputFormatConfiguration = (output, context) => {
    return take(output, {
        Serializer: (_) => de_Serializer(_, context),
    });
};
const de_Serializer = (output, context) => {
    return take(output, {
        OrcSerDe: (_) => de_OrcSerDe(_, context),
        ParquetSerDe: _json,
    });
};
const de_SourceDescription = (output, context) => {
    return take(output, {
        KinesisStreamSourceDescription: (_) => de_KinesisStreamSourceDescription(_, context),
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new __HttpRequest(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": `Firehose_20150804.${operation}`,
    };
}
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
const parseErrorBody = async (errorBody, context) => {
    const value = await parseBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};
