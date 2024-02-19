import { HttpRequest as __HttpRequest } from "@smithy/protocol-http";
import { _json, collectBody, decorateServiceException as __decorateServiceException, expectBoolean as __expectBoolean, expectInt32 as __expectInt32, expectLong as __expectLong, expectNonNull as __expectNonNull, expectNumber as __expectNumber, expectString as __expectString, parseEpochTimestamp as __parseEpochTimestamp, take, withBaseException, } from "@smithy/smithy-client";
import { KinesisServiceException as __BaseException } from "../models/KinesisServiceException";
import { AccessDeniedException, ExpiredIteratorException, ExpiredNextTokenException, InternalFailureException, InvalidArgumentException, KMSAccessDeniedException, KMSDisabledException, KMSInvalidStateException, KMSNotFoundException, KMSOptInRequired, KMSThrottlingException, LimitExceededException, ProvisionedThroughputExceededException, ResourceInUseException, ResourceNotFoundException, ValidationException, } from "../models/models_0";
export const se_AddTagsToStreamCommand = async (input, context) => {
    const headers = sharedHeaders("AddTagsToStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_CreateStreamCommand = async (input, context) => {
    const headers = sharedHeaders("CreateStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DecreaseStreamRetentionPeriodCommand = async (input, context) => {
    const headers = sharedHeaders("DecreaseStreamRetentionPeriod");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeleteStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DeregisterStreamConsumerCommand = async (input, context) => {
    const headers = sharedHeaders("DeregisterStreamConsumer");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeLimitsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeLimits");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeStreamCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeStreamConsumerCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStreamConsumer");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DescribeStreamSummaryCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeStreamSummary");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_DisableEnhancedMonitoringCommand = async (input, context) => {
    const headers = sharedHeaders("DisableEnhancedMonitoring");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_EnableEnhancedMonitoringCommand = async (input, context) => {
    const headers = sharedHeaders("EnableEnhancedMonitoring");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetRecordsCommand = async (input, context) => {
    const headers = sharedHeaders("GetRecords");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_GetShardIteratorCommand = async (input, context) => {
    const headers = sharedHeaders("GetShardIterator");
    let body;
    body = JSON.stringify(se_GetShardIteratorInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_IncreaseStreamRetentionPeriodCommand = async (input, context) => {
    const headers = sharedHeaders("IncreaseStreamRetentionPeriod");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListShardsCommand = async (input, context) => {
    const headers = sharedHeaders("ListShards");
    let body;
    body = JSON.stringify(se_ListShardsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListStreamConsumersCommand = async (input, context) => {
    const headers = sharedHeaders("ListStreamConsumers");
    let body;
    body = JSON.stringify(se_ListStreamConsumersInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListStreamsCommand = async (input, context) => {
    const headers = sharedHeaders("ListStreams");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_ListTagsForStreamCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsForStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_MergeShardsCommand = async (input, context) => {
    const headers = sharedHeaders("MergeShards");
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
export const se_PutRecordsCommand = async (input, context) => {
    const headers = sharedHeaders("PutRecords");
    let body;
    body = JSON.stringify(se_PutRecordsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RegisterStreamConsumerCommand = async (input, context) => {
    const headers = sharedHeaders("RegisterStreamConsumer");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_RemoveTagsFromStreamCommand = async (input, context) => {
    const headers = sharedHeaders("RemoveTagsFromStream");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SplitShardCommand = async (input, context) => {
    const headers = sharedHeaders("SplitShard");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_StartStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StartStreamEncryption");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_StopStreamEncryptionCommand = async (input, context) => {
    const headers = sharedHeaders("StopStreamEncryption");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_SubscribeToShardCommand = async (input, context) => {
    const headers = sharedHeaders("SubscribeToShard");
    let body;
    body = JSON.stringify(se_SubscribeToShardInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateShardCountCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateShardCount");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const se_UpdateStreamModeCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateStreamMode");
    let body;
    body = JSON.stringify(_json(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
export const de_AddTagsToStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_AddTagsToStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_CreateStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CreateStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_DecreaseStreamRetentionPeriodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DecreaseStreamRetentionPeriodCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_DeleteStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeleteStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_DeregisterStreamConsumerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DeregisterStreamConsumerCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_DescribeLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DescribeLimitsCommandError(output, context);
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
export const de_DescribeStreamCommand = async (output, context) => {
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
export const de_DescribeStreamConsumerCommand = async (output, context) => {
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
export const de_DescribeStreamSummaryCommand = async (output, context) => {
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
export const de_DisableEnhancedMonitoringCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_DisableEnhancedMonitoringCommandError(output, context);
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
export const de_EnableEnhancedMonitoringCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_EnableEnhancedMonitoringCommandError(output, context);
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
export const de_GetRecordsCommand = async (output, context) => {
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
export const de_GetShardIteratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_GetShardIteratorCommandError(output, context);
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
export const de_IncreaseStreamRetentionPeriodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_IncreaseStreamRetentionPeriodCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_ListShardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListShardsCommandError(output, context);
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
export const de_ListStreamConsumersCommand = async (output, context) => {
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
export const de_ListStreamsCommand = async (output, context) => {
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
export const de_ListTagsForStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_ListTagsForStreamCommandError(output, context);
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
export const de_MergeShardsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_MergeShardsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_PutRecordsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_PutRecordsCommandError(output, context);
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
export const de_RegisterStreamConsumerCommand = async (output, context) => {
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
export const de_RemoveTagsFromStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_RemoveTagsFromStreamCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_SplitShardCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_SplitShardCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_StartStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StartStreamEncryptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_StopStreamEncryptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_StopStreamEncryptionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
export const de_SubscribeToShardCommand = async (output, context) => {
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
export const de_UpdateShardCountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateShardCountCommandError(output, context);
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
export const de_UpdateStreamModeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_UpdateStreamModeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
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
    const deserialized = _json(body);
    const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ExpiredIteratorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ExpiredIteratorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_ExpiredNextTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ExpiredNextTokenException({
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
const de_KMSAccessDeniedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new KMSAccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new KMSDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSInvalidStateExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new KMSInvalidStateException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new KMSNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSOptInRequiredRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new KMSOptInRequired({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const de_KMSThrottlingExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new KMSThrottlingException({
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
const de_ProvisionedThroughputExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ProvisionedThroughputExceededException({
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
const de_ValidationExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = _json(body);
    const exception = new ValidationException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
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
    const deserialized = _json(body);
    const exception = new InternalFailureException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return __decorateServiceException(exception, body);
};
const se_GetShardIteratorInput = (input, context) => {
    return take(input, {
        ShardId: [],
        ShardIteratorType: [],
        StartingSequenceNumber: [],
        StreamARN: [],
        StreamName: [],
        Timestamp: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_ListShardsInput = (input, context) => {
    return take(input, {
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
    return take(input, {
        MaxResults: [],
        NextToken: [],
        StreamARN: [],
        StreamCreationTimestamp: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_PutRecordInput = (input, context) => {
    return take(input, {
        Data: context.base64Encoder,
        ExplicitHashKey: [],
        PartitionKey: [],
        SequenceNumberForOrdering: [],
        StreamARN: [],
        StreamName: [],
    });
};
const se_PutRecordsInput = (input, context) => {
    return take(input, {
        Records: (_) => se_PutRecordsRequestEntryList(_, context),
        StreamARN: [],
        StreamName: [],
    });
};
const se_PutRecordsRequestEntry = (input, context) => {
    return take(input, {
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
    return take(input, {
        ShardId: [],
        Timestamp: (_) => Math.round(_.getTime() / 1000),
        Type: [],
    });
};
const se_StartingPosition = (input, context) => {
    return take(input, {
        SequenceNumber: [],
        Timestamp: (_) => Math.round(_.getTime() / 1000),
        Type: [],
    });
};
const se_SubscribeToShardInput = (input, context) => {
    return take(input, {
        ConsumerARN: [],
        ShardId: [],
        StartingPosition: (_) => se_StartingPosition(_, context),
    });
};
const de_Consumer = (output, context) => {
    return take(output, {
        ConsumerARN: __expectString,
        ConsumerCreationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ConsumerName: __expectString,
        ConsumerStatus: __expectString,
    });
};
const de_ConsumerDescription = (output, context) => {
    return take(output, {
        ConsumerARN: __expectString,
        ConsumerCreationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        ConsumerName: __expectString,
        ConsumerStatus: __expectString,
        StreamARN: __expectString,
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
    return take(output, {
        ConsumerDescription: (_) => de_ConsumerDescription(_, context),
    });
};
const de_DescribeStreamOutput = (output, context) => {
    return take(output, {
        StreamDescription: (_) => de_StreamDescription(_, context),
    });
};
const de_DescribeStreamSummaryOutput = (output, context) => {
    return take(output, {
        StreamDescriptionSummary: (_) => de_StreamDescriptionSummary(_, context),
    });
};
const de_GetRecordsOutput = (output, context) => {
    return take(output, {
        ChildShards: _json,
        MillisBehindLatest: __expectLong,
        NextShardIterator: __expectString,
        Records: (_) => de_RecordList(_, context),
    });
};
const de_ListStreamConsumersOutput = (output, context) => {
    return take(output, {
        Consumers: (_) => de_ConsumerList(_, context),
        NextToken: __expectString,
    });
};
const de_ListStreamsOutput = (output, context) => {
    return take(output, {
        HasMoreStreams: __expectBoolean,
        NextToken: __expectString,
        StreamNames: _json,
        StreamSummaries: (_) => de_StreamSummaryList(_, context),
    });
};
const de__Record = (output, context) => {
    return take(output, {
        ApproximateArrivalTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        Data: context.base64Decoder,
        EncryptionType: __expectString,
        PartitionKey: __expectString,
        SequenceNumber: __expectString,
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
    return take(output, {
        Consumer: (_) => de_Consumer(_, context),
    });
};
const de_StreamDescription = (output, context) => {
    return take(output, {
        EncryptionType: __expectString,
        EnhancedMonitoring: _json,
        HasMoreShards: __expectBoolean,
        KeyId: __expectString,
        RetentionPeriodHours: __expectInt32,
        Shards: _json,
        StreamARN: __expectString,
        StreamCreationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        StreamModeDetails: _json,
        StreamName: __expectString,
        StreamStatus: __expectString,
    });
};
const de_StreamDescriptionSummary = (output, context) => {
    return take(output, {
        ConsumerCount: __expectInt32,
        EncryptionType: __expectString,
        EnhancedMonitoring: _json,
        KeyId: __expectString,
        OpenShardCount: __expectInt32,
        RetentionPeriodHours: __expectInt32,
        StreamARN: __expectString,
        StreamCreationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        StreamModeDetails: _json,
        StreamName: __expectString,
        StreamStatus: __expectString,
    });
};
const de_StreamSummary = (output, context) => {
    return take(output, {
        StreamARN: __expectString,
        StreamCreationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
        StreamModeDetails: _json,
        StreamName: __expectString,
        StreamStatus: __expectString,
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
    return take(output, {
        ChildShards: _json,
        ContinuationSequenceNumber: __expectString,
        MillisBehindLatest: __expectLong,
        Records: (_) => de_RecordList(_, context),
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
