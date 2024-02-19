'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObject = exports.headObject = exports.copyObject = exports.abortMultipartUpload = exports.listParts = exports.completeMultipartUpload = exports.uploadPart = exports.createMultipartUpload = exports.putObject = exports.listObjectsV2 = exports.getPresignedGetObjectUrl = exports.getObject = exports.SERVICE_NAME = void 0;
var base_1 = require("./base");
Object.defineProperty(exports, "SERVICE_NAME", { enumerable: true, get: function () { return base_1.SERVICE_NAME; } });
var getObject_1 = require("./getObject");
Object.defineProperty(exports, "getObject", { enumerable: true, get: function () { return getObject_1.getObject; } });
Object.defineProperty(exports, "getPresignedGetObjectUrl", { enumerable: true, get: function () { return getObject_1.getPresignedGetObjectUrl; } });
var listObjectsV2_1 = require("./listObjectsV2");
Object.defineProperty(exports, "listObjectsV2", { enumerable: true, get: function () { return listObjectsV2_1.listObjectsV2; } });
var putObject_1 = require("./putObject");
Object.defineProperty(exports, "putObject", { enumerable: true, get: function () { return putObject_1.putObject; } });
var createMultipartUpload_1 = require("./createMultipartUpload");
Object.defineProperty(exports, "createMultipartUpload", { enumerable: true, get: function () { return createMultipartUpload_1.createMultipartUpload; } });
var uploadPart_1 = require("./uploadPart");
Object.defineProperty(exports, "uploadPart", { enumerable: true, get: function () { return uploadPart_1.uploadPart; } });
var completeMultipartUpload_1 = require("./completeMultipartUpload");
Object.defineProperty(exports, "completeMultipartUpload", { enumerable: true, get: function () { return completeMultipartUpload_1.completeMultipartUpload; } });
var listParts_1 = require("./listParts");
Object.defineProperty(exports, "listParts", { enumerable: true, get: function () { return listParts_1.listParts; } });
var abortMultipartUpload_1 = require("./abortMultipartUpload");
Object.defineProperty(exports, "abortMultipartUpload", { enumerable: true, get: function () { return abortMultipartUpload_1.abortMultipartUpload; } });
var copyObject_1 = require("./copyObject");
Object.defineProperty(exports, "copyObject", { enumerable: true, get: function () { return copyObject_1.copyObject; } });
var headObject_1 = require("./headObject");
Object.defineProperty(exports, "headObject", { enumerable: true, get: function () { return headObject_1.headObject; } });
var deleteObject_1 = require("./deleteObject");
Object.defineProperty(exports, "deleteObject", { enumerable: true, get: function () { return deleteObject_1.deleteObject; } });
//# sourceMappingURL=index.js.map
