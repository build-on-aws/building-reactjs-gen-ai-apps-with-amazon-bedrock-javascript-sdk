// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { padLeftZeros } from '../strings';
export function formatTimezoneOffset(isoDate, offsetInMinutes) {
    offsetInMinutes = offsetInMinutes !== null && offsetInMinutes !== void 0 ? offsetInMinutes : 0 - new Date(isoDate).getTimezoneOffset();
    const hoursOffset = padLeftZeros(Math.floor(Math.abs(offsetInMinutes) / 60).toFixed(0), 2);
    const minuteOffset = padLeftZeros(Math.abs(offsetInMinutes % 60).toFixed(0), 2);
    const sign = offsetInMinutes < 0 ? '-' : '+';
    const formattedOffset = `${sign}${hoursOffset}:${minuteOffset}`;
    return formattedOffset;
}
//# sourceMappingURL=format-timezone-offset.js.map