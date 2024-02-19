"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.de_UpdateDestinationCommand = exports.de_UntagDeliveryStreamCommand = exports.de_TagDeliveryStreamCommand = exports.de_StopDeliveryStreamEncryptionCommand = exports.de_StartDeliveryStreamEncryptionCommand = exports.de_PutRecordBatchCommand = exports.de_PutRecordCommand = exports.de_ListTagsForDeliveryStreamCommand = exports.de_ListDeliveryStreamsCommand = exports.de_DescribeDeliveryStreamCommand = exports.de_DeleteDeliveryStreamCommand = exports.de_CreateDeliveryStreamCommand = exports.se_UpdateDestinationCommand = exports.se_UntagDeliveryStreamCommand = exports.se_TagDeliveryStreamCommand = exports.se_StopDeliveryStreamEncryptionCommand = exports.se_StartDeliveryStreamEncryptionCommand = exports.se_PutRecordBatchCommand = exports.se_PutRecordCommand = exports.se_ListTagsForDeliveryStreamCommand = exports.se_ListDeliveryStreamsCommand = exports.se_DescribeDeliveryStreamCommand = exports.se_DeleteDeliveryStreamCommand = exports.se_CreateDeliveryStreamCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const FirehoseServiceException_1 = require("../models/FirehoseServiceException");
const models_0_1 = require("../models/models_0");
const se_CreateDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("CreateDeliveryStream");
    let body;
    body = JSON.stringify(se_CreateDeliveryStreamInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateDeliveryStreamCommand = se_CreateDeliveryStreamCommand;
const se_DeleteDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteDeliveryStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteDeliveryStreamCommand = se_DeleteDeliveryStreamCommand;
const se_DescribeDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeDeliveryStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeDeliveryStreamCommand = se_DescribeDeliveryStreamCommand;
const se_ListDeliveryStreamsCommand = async (input, context) => {
    const headers = sharedHeaders("ListDeliveryStreams");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListDeliveryStreamsCommand = se_ListDeliveryStreamsCommand;
const se_ListTagsForDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForDeliveryStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTagsForDeliveryStreamCommand = se_ListTagsForDeliveryStreamCommand;
const se_PutRecordCommand = async (input, context) => {
    const headers = sharedHeaders("PutRecord");
    let body;
    body = JSON.stringify(se_PutRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutRecordCommand = se_PutRecordCommand;
const se_PutRecordBatchCommand = async (input, context) => {
    const headers = sharedHeaders("PutRecordBatch");
    let body;
    body = JSON.stringify(se_PutRecordBatchInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutRecordBatchCommand = se_PutRecordBatchCommand;
const se_StartDeliveryStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StartDeliveryStreamEncryption");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartDeliveryStreamEncryptionCommand = se_StartDeliveryStreamEncryptionCommand;
const se_StopDeliveryStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StopDeliveryStreamEncryption");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StopDeliveryStreamEncryptionCommand = se_StopDeliveryStreamEncryptionCommand;
const se_TagDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("TagDeliveryStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_TagDeliveryStreamCommand = se_TagDeliveryStreamCommand;
const se_UntagDeliveryStreamCommand = async (input, context) => {
    const headers = sharedHeaders("UntagDeliveryStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UntagDeliveryStreamCommand = se_UntagDeliveryStreamCommand;
const se_UpdateDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateDestination");
    let body;
    body = JSON.stringify(se_UpdateDestinationInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateDestinationCommand = se_UpdateDestinationCommand;
const de_CreateDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_CreateDeliveryStreamCommand = de_CreateDeliveryStreamCommand;
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
const de_DeleteDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DeleteDeliveryStreamCommand = de_DeleteDeliveryStreamCommand;
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
const de_DescribeDeliveryStreamCommand = async (output, context) => {
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
exports.de_DescribeDeliveryStreamCommand = de_DescribeDeliveryStreamCommand;
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
const de_ListDeliveryStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListDeliveryStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListDeliveryStreamsCommand = de_ListDeliveryStreamsCommand;
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
const de_ListTagsForDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListTagsForDeliveryStreamCommand = de_ListTagsForDeliveryStreamCommand;
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
const de_PutRecordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRecordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutRecordCommand = de_PutRecordCommand;
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
const de_PutRecordBatchCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRecordBatchCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_PutRecordBatchCommand = de_PutRecordBatchCommand;
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
const de_StartDeliveryStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartDeliveryStreamEncryptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StartDeliveryStreamEncryptionCommand = de_StartDeliveryStreamEncryptionCommand;
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
const de_StopDeliveryStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StopDeliveryStreamEncryptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_StopDeliveryStreamEncryptionCommand = de_StopDeliveryStreamEncryptionCommand;
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
const de_TagDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_TagDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_TagDeliveryStreamCommand = de_TagDeliveryStreamCommand;
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
const de_UntagDeliveryStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UntagDeliveryStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UntagDeliveryStreamCommand = de_UntagDeliveryStreamCommand;
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
const de_UpdateDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = (0, smithy_client_1._json)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_UpdateDestinationCommand = de_UpdateDestinationCommand;
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
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ConcurrentModificationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidArgumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidArgumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_InvalidKMSResourceExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InvalidKMSResourceException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ServiceUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ServiceUnavailableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const se_CreateDeliveryStreamInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AmazonOpenSearchServerlessDestinationConfiguration: smithy_client_1._json,
        AmazonopensearchserviceDestinationConfiguration: smithy_client_1._json,
        DeliveryStreamEncryptionConfigurationInput: smithy_client_1._json,
        DeliveryStreamName: [],
        DeliveryStreamType: [],
        ElasticsearchDestinationConfiguration: smithy_client_1._json,
        ExtendedS3DestinationConfiguration: (_) => se_ExtendedS3DestinationConfiguration(_, context),
        HttpEndpointDestinationConfiguration: smithy_client_1._json,
        KinesisStreamSourceConfiguration: smithy_client_1._json,
        RedshiftDestinationConfiguration: smithy_client_1._json,
        S3DestinationConfiguration: smithy_client_1._json,
        SplunkDestinationConfiguration: smithy_client_1._json,
        Tags: smithy_client_1._json,
    });
};
const se_DataFormatConversionConfiguration = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Enabled: [],
        InputFormatConfiguration: smithy_client_1._json,
        OutputFormatConfiguration: (_) => se_OutputFormatConfiguration(_, context),
        SchemaConfiguration: smithy_client_1._json,
    });
};
const se_ExtendedS3DestinationConfiguration = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        BucketARN: [],
        BufferingHints: smithy_client_1._json,
        CloudWatchLoggingOptions: smithy_client_1._json,
        CompressionFormat: [],
        DataFormatConversionConfiguration: (_) => se_DataFormatConversionConfiguration(_, context),
        DynamicPartitioningConfiguration: smithy_client_1._json,
        EncryptionConfiguration: smithy_client_1._json,
        ErrorOutputPrefix: [],
        Prefix: [],
        ProcessingConfiguration: smithy_client_1._json,
        RoleARN: [],
        S3BackupConfiguration: smithy_client_1._json,
        S3BackupMode: [],
    });
};
const se_ExtendedS3DestinationUpdate = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        BucketARN: [],
        BufferingHints: smithy_client_1._json,
        CloudWatchLoggingOptions: smithy_client_1._json,
        CompressionFormat: [],
        DataFormatConversionConfiguration: (_) => se_DataFormatConversionConfiguration(_, context),
        DynamicPartitioningConfiguration: smithy_client_1._json,
        EncryptionConfiguration: smithy_client_1._json,
        ErrorOutputPrefix: [],
        Prefix: [],
        ProcessingConfiguration: smithy_client_1._json,
        RoleARN: [],
        S3BackupMode: [],
        S3BackupUpdate: smithy_client_1._json,
    });
};
const se_OrcSerDe = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        BlockSizeBytes: [],
        BloomFilterColumns: smithy_client_1._json,
        BloomFilterFalsePositiveProbability: smithy_client_1.serializeFloat,
        Compression: [],
        DictionaryKeyThreshold: smithy_client_1.serializeFloat,
        EnablePadding: [],
        FormatVersion: [],
        PaddingTolerance: smithy_client_1.serializeFloat,
        RowIndexStride: [],
        StripeSizeBytes: [],
    });
};
const se_OutputFormatConfiguration = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Serializer: (_) => se_Serializer(_, context),
    });
};
const se_PutRecordBatchInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
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
    return (0, smithy_client_1.take)(input, {
        DeliveryStreamName: [],
        Record: (_) => se__Record(_, context),
    });
};
const se__Record = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Data: context.base64Encoder,
    });
};
const se_Serializer = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        OrcSerDe: (_) => se_OrcSerDe(_, context),
        ParquetSerDe: smithy_client_1._json,
    });
};
const se_UpdateDestinationInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        AmazonOpenSearchServerlessDestinationUpdate: smithy_client_1._json,
        AmazonopensearchserviceDestinationUpdate: smithy_client_1._json,
        CurrentDeliveryStreamVersionId: [],
        DeliveryStreamName: [],
        DestinationId: [],
        ElasticsearchDestinationUpdate: smithy_client_1._json,
        ExtendedS3DestinationUpdate: (_) => se_ExtendedS3DestinationUpdate(_, context),
        HttpEndpointDestinationUpdate: smithy_client_1._json,
        RedshiftDestinationUpdate: smithy_client_1._json,
        S3DestinationUpdate: smithy_client_1._json,
        SplunkDestinationUpdate: smithy_client_1._json,
    });
};
const de_DataFormatConversionConfiguration = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Enabled: smithy_client_1.expectBoolean,
        InputFormatConfiguration: smithy_client_1._json,
        OutputFormatConfiguration: (_) => de_OutputFormatConfiguration(_, context),
        SchemaConfiguration: smithy_client_1._json,
    });
};
const de_DeliveryStreamDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        CreateTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        DeliveryStreamARN: smithy_client_1.expectString,
        DeliveryStreamEncryptionConfiguration: smithy_client_1._json,
        DeliveryStreamName: smithy_client_1.expectString,
        DeliveryStreamStatus: smithy_client_1.expectString,
        DeliveryStreamType: smithy_client_1.expectString,
        Destinations: (_) => de_DestinationDescriptionList(_, context),
        FailureDescription: smithy_client_1._json,
        HasMoreDestinations: smithy_client_1.expectBoolean,
        LastUpdateTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Source: (_) => de_SourceDescription(_, context),
        VersionId: smithy_client_1.expectString,
    });
};
const de_DescribeDeliveryStreamOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        DeliveryStreamDescription: (_) => de_DeliveryStreamDescription(_, context),
    });
};
const de_DestinationDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        AmazonOpenSearchServerlessDestinationDescription: smithy_client_1._json,
        AmazonopensearchserviceDestinationDescription: smithy_client_1._json,
        DestinationId: smithy_client_1.expectString,
        ElasticsearchDestinationDescription: smithy_client_1._json,
        ExtendedS3DestinationDescription: (_) => de_ExtendedS3DestinationDescription(_, context),
        HttpEndpointDestinationDescription: smithy_client_1._json,
        RedshiftDestinationDescription: smithy_client_1._json,
        S3DestinationDescription: smithy_client_1._json,
        SplunkDestinationDescription: smithy_client_1._json,
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
    return (0, smithy_client_1.take)(output, {
        BucketARN: smithy_client_1.expectString,
        BufferingHints: smithy_client_1._json,
        CloudWatchLoggingOptions: smithy_client_1._json,
        CompressionFormat: smithy_client_1.expectString,
        DataFormatConversionConfiguration: (_) => de_DataFormatConversionConfiguration(_, context),
        DynamicPartitioningConfiguration: smithy_client_1._json,
        EncryptionConfiguration: smithy_client_1._json,
        ErrorOutputPrefix: smithy_client_1.expectString,
        Prefix: smithy_client_1.expectString,
        ProcessingConfiguration: smithy_client_1._json,
        RoleARN: smithy_client_1.expectString,
        S3BackupDescription: smithy_client_1._json,
        S3BackupMode: smithy_client_1.expectString,
    });
};
const de_KinesisStreamSourceDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        DeliveryStartTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        KinesisStreamARN: smithy_client_1.expectString,
        RoleARN: smithy_client_1.expectString,
    });
};
const de_OrcSerDe = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        BlockSizeBytes: smithy_client_1.expectInt32,
        BloomFilterColumns: smithy_client_1._json,
        BloomFilterFalsePositiveProbability: smithy_client_1.limitedParseDouble,
        Compression: smithy_client_1.expectString,
        DictionaryKeyThreshold: smithy_client_1.limitedParseDouble,
        EnablePadding: smithy_client_1.expectBoolean,
        FormatVersion: smithy_client_1.expectString,
        PaddingTolerance: smithy_client_1.limitedParseDouble,
        RowIndexStride: smithy_client_1.expectInt32,
        StripeSizeBytes: smithy_client_1.expectInt32,
    });
};
const de_OutputFormatConfiguration = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Serializer: (_) => de_Serializer(_, context),
    });
};
const de_Serializer = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        OrcSerDe: (_) => de_OrcSerDe(_, context),
        ParquetSerDe: smithy_client_1._json,
    });
};
const de_SourceDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        KinesisStreamSourceDescription: (_) => de_KinesisStreamSourceDescription(_, context),
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0, smithy_client_1.withBaseException)(FirehoseServiceException_1.FirehoseServiceException);
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
    return new protocol_http_1.HttpRequest(contents);
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
