"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.de_PutUsersCommand = exports.de_PutItemsCommand = exports.de_PutEventsCommand = exports.se_PutUsersCommand = exports.se_PutItemsCommand = exports.se_PutEventsCommand = void 0;
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const models_0_1 = require("../models/models_0");
const PersonalizeEventsServiceException_1 = require("../models/PersonalizeEventsServiceException");
const se_PutEventsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/events";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        eventList: (_) => se_EventList(_, context),
        sessionId: [],
        trackingId: [],
        userId: [],
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PutEventsCommand = se_PutEventsCommand;
const se_PutItemsCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/items";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        datasetArn: [],
        items: (_) => se_ItemList(_, context),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PutItemsCommand = se_PutItemsCommand;
const se_PutUsersCommand = async (input, context) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const headers = {
        "content-type": "application/json",
    };
    const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/users";
    let body;
    body = JSON.stringify((0, smithy_client_1.take)(input, {
        datasetArn: [],
        users: (_) => se_UserList(_, context),
    }));
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.se_PutUsersCommand = se_PutUsersCommand;
const de_PutEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutEventsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_PutEventsCommand = de_PutEventsCommand;
const de_PutEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalizeevents#InvalidInputException":
            throw await de_InvalidInputExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_PutItemsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutItemsCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_PutItemsCommand = de_PutItemsCommand;
const de_PutItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalizeevents#InvalidInputException":
            throw await de_InvalidInputExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.personalizeevents#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.personalizeevents#ResourceNotFoundException":
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
const de_PutUsersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_PutUsersCommandError(output, context);
    }
    const contents = (0, smithy_client_1.map)({
        $metadata: deserializeMetadata(output),
    });
    await (0, smithy_client_1.collectBody)(output.body, context);
    return contents;
};
exports.de_PutUsersCommand = de_PutUsersCommand;
const de_PutUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseErrorBody(output.body, context),
    };
    const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInputException":
        case "com.amazonaws.personalizeevents#InvalidInputException":
            throw await de_InvalidInputExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.personalizeevents#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.personalizeevents#ResourceNotFoundException":
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
const throwDefaultError = (0, smithy_client_1.withBaseException)(PersonalizeEventsServiceException_1.PersonalizeEventsServiceException);
const de_InvalidInputExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.InvalidInputException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0, smithy_client_1.map)({});
    const data = parsedOutput.body;
    const doc = (0, smithy_client_1.take)(data, {
        message: smithy_client_1.expectString,
    });
    Object.assign(contents, doc);
    const exception = new models_0_1.ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0, smithy_client_1.decorateServiceException)(exception, parsedOutput.body);
};
const se_Event = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        eventId: [],
        eventType: [],
        eventValue: smithy_client_1.serializeFloat,
        impression: smithy_client_1._json,
        itemId: [],
        metricAttribution: smithy_client_1._json,
        properties: smithy_client_1.LazyJsonString.fromObject,
        recommendationId: [],
        sentAt: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_EventList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_Event(entry, context);
    });
};
const se_Item = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        itemId: [],
        properties: smithy_client_1.LazyJsonString.fromObject,
    });
};
const se_ItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_Item(entry, context);
    });
};
const se_User = (input, context) => {
    return (0, smithy_client_1.take)(input, {
        properties: smithy_client_1.LazyJsonString.fromObject,
        userId: [],
    });
};
const se_UserList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_User(entry, context);
    });
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => (0, smithy_client_1.collectBody)(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
