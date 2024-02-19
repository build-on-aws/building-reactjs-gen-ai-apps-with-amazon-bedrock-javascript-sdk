'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddItemBytesSize = void 0;
const getAddItemBytesSize = ({ content, timestamp, }) => content.length + timestamp.length + 8;
exports.getAddItemBytesSize = getAddItemBytesSize;
//# sourceMappingURL=getAddItemBytesSize.js.map
