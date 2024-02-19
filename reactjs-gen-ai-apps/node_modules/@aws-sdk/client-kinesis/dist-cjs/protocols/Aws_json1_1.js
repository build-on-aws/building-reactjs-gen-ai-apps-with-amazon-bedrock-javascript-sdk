"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.de_PutRecordsCommand = exports.de_PutRecordCommand = exports.de_MergeShardsCommand = exports.de_ListTagsForStreamCommand = exports.de_ListStreamsCommand = exports.de_ListStreamConsumersCommand = exports.de_ListShardsCommand = exports.de_IncreaseStreamRetentionPeriodCommand = exports.de_GetShardIteratorCommand = exports.de_GetRecordsCommand = exports.de_EnableEnhancedMonitoringCommand = exports.de_DisableEnhancedMonitoringCommand = exports.de_DescribeStreamSummaryCommand = exports.de_DescribeStreamConsumerCommand = exports.de_DescribeStreamCommand = exports.de_DescribeLimitsCommand = exports.de_DeregisterStreamConsumerCommand = exports.de_DeleteStreamCommand = exports.de_DecreaseStreamRetentionPeriodCommand = exports.de_CreateStreamCommand = exports.de_AddTagsToStreamCommand = exports.se_UpdateStreamModeCommand = exports.se_UpdateShardCountCommand = exports.se_SubscribeToShardCommand = exports.se_StopStreamEncryptionCommand = exports.se_StartStreamEncryptionCommand = exports.se_SplitShardCommand = exports.se_RemoveTagsFromStreamCommand = exports.se_RegisterStreamConsumerCommand = exports.se_PutRecordsCommand = exports.se_PutRecordCommand = exports.se_MergeShardsCommand = exports.se_ListTagsForStreamCommand = exports.se_ListStreamsCommand = exports.se_ListStreamConsumersCommand = exports.se_ListShardsCommand = exports.se_IncreaseStreamRetentionPeriodCommand = exports.se_GetShardIteratorCommand = exports.se_GetRecordsCommand = exports.se_EnableEnhancedMonitoringCommand = exports.se_DisableEnhancedMonitoringCommand = exports.se_DescribeStreamSummaryCommand = exports.se_DescribeStreamConsumerCommand = exports.se_DescribeStreamCommand = exports.se_DescribeLimitsCommand = exports.se_DeregisterStreamConsumerCommand = exports.se_DeleteStreamCommand = exports.se_DecreaseStreamRetentionPeriodCommand = exports.se_CreateStreamCommand = exports.se_AddTagsToStreamCommand = void 0;
exports.de_UpdateStreamModeCommand = exports.de_UpdateShardCountCommand = exports.de_SubscribeToShardCommand = exports.de_StopStreamEncryptionCommand = exports.de_StartStreamEncryptionCommand = exports.de_SplitShardCommand = exports.de_RemoveTagsFromStreamCommand = exports.de_RegisterStreamConsumerCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const KinesisServiceException_1 = require("../models/KinesisServiceException");
const models_0_1 = require("../models/models_0");
const se_AddTagsToStreamCommand = async (input, context) => {
    const headers = sharedHeaders("AddTagsToStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_AddTagsToStreamCommand = se_AddTagsToStreamCommand;
const se_CreateStreamCommand = async (input, context) => {
    const headers = sharedHeaders("CreateStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_CreateStreamCommand = se_CreateStreamCommand;
const se_DecreaseStreamRetentionPeriodCommand = async (input, context) => {
    const headers = sharedHeaders("DecreaseStreamRetentionPeriod");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DecreaseStreamRetentionPeriodCommand = se_DecreaseStreamRetentionPeriodCommand;
const se_DeleteStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeleteStreamCommand = se_DeleteStreamCommand;
const se_DeregisterStreamConsumerCommand = async (input, context) => {
    const headers = sharedHeaders("DeregisterStreamConsumer");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DeregisterStreamConsumerCommand = se_DeregisterStreamConsumerCommand;
const se_DescribeLimitsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeLimits");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeLimitsCommand = se_DescribeLimitsCommand;
const se_DescribeStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeStreamCommand = se_DescribeStreamCommand;
const se_DescribeStreamConsumerCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStreamConsumer");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeStreamConsumerCommand = se_DescribeStreamConsumerCommand;
const se_DescribeStreamSummaryCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStreamSummary");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DescribeStreamSummaryCommand = se_DescribeStreamSummaryCommand;
const se_DisableEnhancedMonitoringCommand = async (input, context) => {
    const headers = sharedHeaders("DisableEnhancedMonitoring");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_DisableEnhancedMonitoringCommand = se_DisableEnhancedMonitoringCommand;
const se_EnableEnhancedMonitoringCommand = async (input, context) => {
    const headers = sharedHeaders("EnableEnhancedMonitoring");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_EnableEnhancedMonitoringCommand = se_EnableEnhancedMonitoringCommand;
const se_GetRecordsCommand = async (input, context) => {
    const headers = sharedHeaders("GetRecords");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetRecordsCommand = se_GetRecordsCommand;
const se_GetShardIteratorCommand = async (input, context) => {
    const headers = sharedHeaders("GetShardIterator");
    let body;
    body = JSON.stringify(se_GetShardIteratorInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_GetShardIteratorCommand = se_GetShardIteratorCommand;
const se_IncreaseStreamRetentionPeriodCommand = async (input, context) => {
    const headers = sharedHeaders("IncreaseStreamRetentionPeriod");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_IncreaseStreamRetentionPeriodCommand = se_IncreaseStreamRetentionPeriodCommand;
const se_ListShardsCommand = async (input, context) => {
    const headers = sharedHeaders("ListShards");
    let body;
    body = JSON.stringify(se_ListShardsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListShardsCommand = se_ListShardsCommand;
const se_ListStreamConsumersCommand = async (input, context) => {
    const headers = sharedHeaders("ListStreamConsumers");
    let body;
    body = JSON.stringify(se_ListStreamConsumersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListStreamConsumersCommand = se_ListStreamConsumersCommand;
const se_ListStreamsCommand = async (input, context) => {
    const headers = sharedHeaders("ListStreams");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListStreamsCommand = se_ListStreamsCommand;
const se_ListTagsForStreamCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_ListTagsForStreamCommand = se_ListTagsForStreamCommand;
const se_MergeShardsCommand = async (input, context) => {
    const headers = sharedHeaders("MergeShards");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_MergeShardsCommand = se_MergeShardsCommand;
const se_PutRecordCommand = async (input, context) => {
    const headers = sharedHeaders("PutRecord");
    let body;
    body = JSON.stringify(se_PutRecordInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutRecordCommand = se_PutRecordCommand;
const se_PutRecordsCommand = async (input, context) => {
    const headers = sharedHeaders("PutRecords");
    let body;
    body = JSON.stringify(se_PutRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_PutRecordsCommand = se_PutRecordsCommand;
const se_RegisterStreamConsumerCommand = async (input, context) => {
    const headers = sharedHeaders("RegisterStreamConsumer");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RegisterStreamConsumerCommand = se_RegisterStreamConsumerCommand;
const se_RemoveTagsFromStreamCommand = async (input, context) => {
    const headers = sharedHeaders("RemoveTagsFromStream");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_RemoveTagsFromStreamCommand = se_RemoveTagsFromStreamCommand;
const se_SplitShardCommand = async (input, context) => {
    const headers = sharedHeaders("SplitShard");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SplitShardCommand = se_SplitShardCommand;
const se_StartStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StartStreamEncryption");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StartStreamEncryptionCommand = se_StartStreamEncryptionCommand;
const se_StopStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StopStreamEncryption");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_StopStreamEncryptionCommand = se_StopStreamEncryptionCommand;
const se_SubscribeToShardCommand = async (input, context) => {
    const headers = sharedHeaders("SubscribeToShard");
    let body;
    body = JSON.stringify(se_SubscribeToShardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_SubscribeToShardCommand = se_SubscribeToShardCommand;
const se_UpdateShardCountCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateShardCount");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateShardCountCommand = se_UpdateShardCountCommand;
const se_UpdateStreamModeCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateStreamMode");
    let body;
    body = JSON.stringify((0, smithy_client_1._json)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.se_UpdateStreamModeCommand = se_UpdateStreamModeCommand;
const de_AddTagsToStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AddTagsToStreamCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_AddTagsToStreamCommand = de_AddTagsToStreamCommand;
const de_AddTagsToStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_CreateStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateStreamCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_CreateStreamCommand = de_CreateStreamCommand;
const de_CreateStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
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
const de_DecreaseStreamRetentionPeriodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DecreaseStreamRetentionPeriodCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DecreaseStreamRetentionPeriodCommand = de_DecreaseStreamRetentionPeriodCommand;
const de_DecreaseStreamRetentionPeriodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_DeleteStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteStreamCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeleteStreamCommand = de_DeleteStreamCommand;
const de_DeleteStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_DeregisterStreamConsumerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeregisterStreamConsumerCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_DeregisterStreamConsumerCommand = de_DeregisterStreamConsumerCommand;
const de_DeregisterStreamConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_DescribeLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeLimitsCommandError(output, context);
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
exports.de_DescribeLimitsCommand = de_DescribeLimitsCommand;
const de_DescribeLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_DescribeStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeStreamOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeStreamCommand = de_DescribeStreamCommand;
const de_DescribeStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_DescribeStreamConsumerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeStreamConsumerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeStreamConsumerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeStreamConsumerCommand = de_DescribeStreamConsumerCommand;
const de_DescribeStreamConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_DescribeStreamSummaryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeStreamSummaryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DescribeStreamSummaryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_DescribeStreamSummaryCommand = de_DescribeStreamSummaryCommand;
const de_DescribeStreamSummaryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_DisableEnhancedMonitoringCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DisableEnhancedMonitoringCommandError(output, context);
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
exports.de_DisableEnhancedMonitoringCommand = de_DisableEnhancedMonitoringCommand;
const de_DisableEnhancedMonitoringCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_EnableEnhancedMonitoringCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_EnableEnhancedMonitoringCommandError(output, context);
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
exports.de_EnableEnhancedMonitoringCommand = de_EnableEnhancedMonitoringCommand;
const de_EnableEnhancedMonitoringCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_GetRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetRecordsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetRecordsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_GetRecordsCommand = de_GetRecordsCommand;
const de_GetRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "ExpiredIteratorException":
        case "com.amazonaws.kinesis#ExpiredIteratorException":
            throw await de_ExpiredIteratorExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await de_KMSOptInRequiredRes(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_GetShardIteratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetShardIteratorCommandError(output, context);
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
exports.de_GetShardIteratorCommand = de_GetShardIteratorCommand;
const de_GetShardIteratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_IncreaseStreamRetentionPeriodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_IncreaseStreamRetentionPeriodCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_IncreaseStreamRetentionPeriodCommand = de_IncreaseStreamRetentionPeriodCommand;
const de_IncreaseStreamRetentionPeriodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_ListShardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListShardsCommandError(output, context);
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
exports.de_ListShardsCommand = de_ListShardsCommand;
const de_ListShardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "ExpiredNextTokenException":
        case "com.amazonaws.kinesis#ExpiredNextTokenException":
            throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_ListStreamConsumersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListStreamConsumersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListStreamConsumersOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListStreamConsumersCommand = de_ListStreamConsumersCommand;
const de_ListStreamConsumersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.kinesis#ExpiredNextTokenException":
            throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_ListStreamsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListStreamsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_ListStreamsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_ListStreamsCommand = de_ListStreamsCommand;
const de_ListStreamsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredNextTokenException":
        case "com.amazonaws.kinesis#ExpiredNextTokenException":
            throw await de_ExpiredNextTokenExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_ListTagsForStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForStreamCommandError(output, context);
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
exports.de_ListTagsForStreamCommand = de_ListTagsForStreamCommand;
const de_ListTagsForStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_MergeShardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_MergeShardsCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_MergeShardsCommand = de_MergeShardsCommand;
const de_MergeShardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.kinesis#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await de_KMSOptInRequiredRes(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_PutRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRecordsCommandError(output, context);
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
exports.de_PutRecordsCommand = de_PutRecordsCommand;
const de_PutRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await de_KMSOptInRequiredRes(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.kinesis#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_RegisterStreamConsumerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RegisterStreamConsumerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_RegisterStreamConsumerOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_RegisterStreamConsumerCommand = de_RegisterStreamConsumerCommand;
const de_RegisterStreamConsumerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_RemoveTagsFromStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemoveTagsFromStreamCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_RemoveTagsFromStreamCommand = de_RemoveTagsFromStreamCommand;
const de_RemoveTagsFromStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_SplitShardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SplitShardCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_SplitShardCommand = de_SplitShardCommand;
const de_SplitShardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.kinesis#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_StartStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartStreamEncryptionCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_StartStreamEncryptionCommand = de_StartStreamEncryptionCommand;
const de_StartStreamEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "KMSAccessDeniedException":
        case "com.amazonaws.kinesis#KMSAccessDeniedException":
            throw await de_KMSAccessDeniedExceptionRes(parsedOutput, context);
        case "KMSDisabledException":
        case "com.amazonaws.kinesis#KMSDisabledException":
            throw await de_KMSDisabledExceptionRes(parsedOutput, context);
        case "KMSInvalidStateException":
        case "com.amazonaws.kinesis#KMSInvalidStateException":
            throw await de_KMSInvalidStateExceptionRes(parsedOutput, context);
        case "KMSNotFoundException":
        case "com.amazonaws.kinesis#KMSNotFoundException":
            throw await de_KMSNotFoundExceptionRes(parsedOutput, context);
        case "KMSOptInRequired":
        case "com.amazonaws.kinesis#KMSOptInRequired":
            throw await de_KMSOptInRequiredRes(parsedOutput, context);
        case "KMSThrottlingException":
        case "com.amazonaws.kinesis#KMSThrottlingException":
            throw await de_KMSThrottlingExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_StopStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StopStreamEncryptionCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_StopStreamEncryptionCommand = de_StopStreamEncryptionCommand;
const de_StopStreamEncryptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_SubscribeToShardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SubscribeToShardCommandError(output, context);
    }
    const contents = { EventStream: de_SubscribeToShardEventStream(output.body, context) };
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
exports.de_SubscribeToShardCommand = de_SubscribeToShardCommand;
const de_SubscribeToShardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_UpdateShardCountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateShardCountCommandError(output, context);
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
exports.de_UpdateShardCountCommand = de_UpdateShardCountCommand;
const de_UpdateShardCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.kinesis#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ValidationException":
        case "com.amazonaws.kinesis#ValidationException":
            throw await de_ValidationExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_UpdateStreamModeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateStreamModeCommandError(output, context);
    }
    await (0, smithy_client_1.collectBody)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
exports.de_UpdateStreamModeCommand = de_UpdateStreamModeCommand;
const de_UpdateStreamModeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidArgumentException":
        case "com.amazonaws.kinesis#InvalidArgumentException":
            throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.kinesis#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.kinesis#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.kinesis#ResourceNotFoundException":
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
const de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ExpiredIteratorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ExpiredIteratorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_ExpiredNextTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ExpiredNextTokenException({
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
const de_KMSAccessDeniedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.KMSAccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_KMSDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.KMSDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_KMSInvalidStateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.KMSInvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_KMSNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.KMSNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_KMSOptInRequiredRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.KMSOptInRequired({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_KMSThrottlingExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.KMSThrottlingException({
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
const de_ProvisionedThroughputExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ProvisionedThroughputExceededException({
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
const de_ValidationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const de_SubscribeToShardEventStream = (output, context) => {
    return context.eventStreamMarshaller.deserialize(output, async (event) => {
        if (event["SubscribeToShardEvent"] != null) {
            return {
                SubscribeToShardEvent: await de_SubscribeToShardEvent_event(event["SubscribeToShardEvent"], context),
            };
        }
        if (event["ResourceNotFoundException"] != null) {
            return {
                ResourceNotFoundException: await de_ResourceNotFoundException_event(event["ResourceNotFoundException"], context),
            };
        }
        if (event["ResourceInUseException"] != null) {
            return {
                ResourceInUseException: await de_ResourceInUseException_event(event["ResourceInUseException"], context),
            };
        }
        if (event["KMSDisabledException"] != null) {
            return {
                KMSDisabledException: await de_KMSDisabledException_event(event["KMSDisabledException"], context),
            };
        }
        if (event["KMSInvalidStateException"] != null) {
            return {
                KMSInvalidStateException: await de_KMSInvalidStateException_event(event["KMSInvalidStateException"], context),
            };
        }
        if (event["KMSAccessDeniedException"] != null) {
            return {
                KMSAccessDeniedException: await de_KMSAccessDeniedException_event(event["KMSAccessDeniedException"], context),
            };
        }
        if (event["KMSNotFoundException"] != null) {
            return {
                KMSNotFoundException: await de_KMSNotFoundException_event(event["KMSNotFoundException"], context),
            };
        }
        if (event["KMSOptInRequired"] != null) {
            return {
                KMSOptInRequired: await de_KMSOptInRequired_event(event["KMSOptInRequired"], context),
            };
        }
        if (event["KMSThrottlingException"] != null) {
            return {
                KMSThrottlingException: await de_KMSThrottlingException_event(event["KMSThrottlingException"], context),
            };
        }
        if (event["InternalFailureException"] != null) {
            return {
                InternalFailureException: await de_InternalFailureException_event(event["InternalFailureException"], context),
            };
        }
        return { $unknown: output };
    });
};
const de_InternalFailureException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_InternalFailureExceptionRes(parsedOutput, context);
};
const de_KMSAccessDeniedException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_KMSAccessDeniedExceptionRes(parsedOutput, context);
};
const de_KMSDisabledException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_KMSDisabledExceptionRes(parsedOutput, context);
};
const de_KMSInvalidStateException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_KMSInvalidStateExceptionRes(parsedOutput, context);
};
const de_KMSNotFoundException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_KMSNotFoundExceptionRes(parsedOutput, context);
};
const de_KMSOptInRequired_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_KMSOptInRequiredRes(parsedOutput, context);
};
const de_KMSThrottlingException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_KMSThrottlingExceptionRes(parsedOutput, context);
};
const de_ResourceInUseException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_ResourceInUseExceptionRes(parsedOutput, context);
};
const de_ResourceNotFoundException_event = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    return de_ResourceNotFoundExceptionRes(parsedOutput, context);
};
const de_SubscribeToShardEvent_event = async (output, context) => {
    const contents = {};
    const data = await parseBody(output.body, context);
    Object.assign(contents, de_SubscribeToShardEvent(data, context));
    return contents;
};
const de_InternalFailureExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0, smithy_client_1._json)(body);
    const exception = new models_0_1.InternalFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, body);
};
const se_GetShardIteratorInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ShardId: [],
        ShardIteratorType: [],
        StartingSequenceNumber: [],
        StreamARN: [],
        StreamName: [],
        Timestamp: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_ListShardsInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ExclusiveStartShardId: [],
        MaxResults: [],
        NextToken: [],
        ShardFilter: (_) => se_ShardFilter(_, context),
        StreamARN: [],
        StreamCreationTimestamp: (_) => Math.round(_.getTime() / 1000),
        StreamName: [],
    });
};
const se_ListStreamConsumersInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        MaxResults: [],
        NextToken: [],
        StreamARN: [],
        StreamCreationTimestamp: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_PutRecordInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Data: context.base64Encoder,
        ExplicitHashKey: [],
        PartitionKey: [],
        SequenceNumberForOrdering: [],
        StreamARN: [],
        StreamName: [],
    });
};
const se_PutRecordsInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Records: (_) => se_PutRecordsRequestEntryList(_, context),
        StreamARN: [],
        StreamName: [],
    });
};
const se_PutRecordsRequestEntry = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        Data: context.base64Encoder,
        ExplicitHashKey: [],
        PartitionKey: [],
    });
};
const se_PutRecordsRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_PutRecordsRequestEntry(entry, context);
    });
};
const se_ShardFilter = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ShardId: [],
        Timestamp: (_) => Math.round(_.getTime() / 1000),
        Type: [],
    });
};
const se_StartingPosition = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        SequenceNumber: [],
        Timestamp: (_) => Math.round(_.getTime() / 1000),
        Type: [],
    });
};
const se_SubscribeToShardInput = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        ConsumerARN: [],
        ShardId: [],
        StartingPosition: (_) => se_StartingPosition(_, context),
    });
};
const de_Consumer = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConsumerARN: smithy_client_1.expectString,
        ConsumerCreationTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ConsumerName: smithy_client_1.expectString,
        ConsumerStatus: smithy_client_1.expectString,
    });
};
const de_ConsumerDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConsumerARN: smithy_client_1.expectString,
        ConsumerCreationTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        ConsumerName: smithy_client_1.expectString,
        ConsumerStatus: smithy_client_1.expectString,
        StreamARN: smithy_client_1.expectString,
    });
};
const de_ConsumerList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Consumer(entry, context);
    });
    return retVal;
};
const de_DescribeStreamConsumerOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConsumerDescription: (_) => de_ConsumerDescription(_, context),
    });
};
const de_DescribeStreamOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        StreamDescription: (_) => de_StreamDescription(_, context),
    });
};
const de_DescribeStreamSummaryOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        StreamDescriptionSummary: (_) => de_StreamDescriptionSummary(_, context),
    });
};
const de_GetRecordsOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ChildShards: smithy_client_1._json,
        MillisBehindLatest: smithy_client_1.expectLong,
        NextShardIterator: smithy_client_1.expectString,
        Records: (_) => de_RecordList(_, context),
    });
};
const de_ListStreamConsumersOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Consumers: (_) => de_ConsumerList(_, context),
        NextToken: smithy_client_1.expectString,
    });
};
const de_ListStreamsOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        HasMoreStreams: smithy_client_1.expectBoolean,
        NextToken: smithy_client_1.expectString,
        StreamNames: smithy_client_1._json,
        StreamSummaries: (_) => de_StreamSummaryList(_, context),
    });
};
const de__Record = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ApproximateArrivalTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        Data: context.base64Decoder,
        EncryptionType: smithy_client_1.expectString,
        PartitionKey: smithy_client_1.expectString,
        SequenceNumber: smithy_client_1.expectString,
    });
};
const de_RecordList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de__Record(entry, context);
    });
    return retVal;
};
const de_RegisterStreamConsumerOutput = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        Consumer: (_) => de_Consumer(_, context),
    });
};
const de_StreamDescription = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        EncryptionType: smithy_client_1.expectString,
        EnhancedMonitoring: smithy_client_1._json,
        HasMoreShards: smithy_client_1.expectBoolean,
        KeyId: smithy_client_1.expectString,
        RetentionPeriodHours: smithy_client_1.expectInt32,
        Shards: smithy_client_1._json,
        StreamARN: smithy_client_1.expectString,
        StreamCreationTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StreamModeDetails: smithy_client_1._json,
        StreamName: smithy_client_1.expectString,
        StreamStatus: smithy_client_1.expectString,
    });
};
const de_StreamDescriptionSummary = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ConsumerCount: smithy_client_1.expectInt32,
        EncryptionType: smithy_client_1.expectString,
        EnhancedMonitoring: smithy_client_1._json,
        KeyId: smithy_client_1.expectString,
        OpenShardCount: smithy_client_1.expectInt32,
        RetentionPeriodHours: smithy_client_1.expectInt32,
        StreamARN: smithy_client_1.expectString,
        StreamCreationTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StreamModeDetails: smithy_client_1._json,
        StreamName: smithy_client_1.expectString,
        StreamStatus: smithy_client_1.expectString,
    });
};
const de_StreamSummary = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        StreamARN: smithy_client_1.expectString,
        StreamCreationTimestamp: (_) => (0, smithy_client_1.expectNonNull)((0, smithy_client_1.parseEpochTimestamp)((0, smithy_client_1.expectNumber)(_))),
        StreamModeDetails: smithy_client_1._json,
        StreamName: smithy_client_1.expectString,
        StreamStatus: smithy_client_1.expectString,
    });
};
const de_StreamSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_StreamSummary(entry, context);
    });
    return retVal;
};
const de_SubscribeToShardEvent = (output, context) => {
    return (0, smithy_client_1.take)(output, {
        ChildShards: smithy_client_1._json,
        ContinuationSequenceNumber: smithy_client_1.expectString,
        MillisBehindLatest: smithy_client_1.expectLong,
        Records: (_) => de_RecordList(_, context),
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0, smithy_client_1.withBaseException)(KinesisServiceException_1.KinesisServiceException);
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
        "x-amz-target": `Kinesis_20131202.${operation}`,
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
