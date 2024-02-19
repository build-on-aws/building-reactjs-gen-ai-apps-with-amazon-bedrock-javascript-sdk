// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { formatTimezoneOffset } from './format-timezone-offset';
import { isIsoDateOnly } from './is-iso-date-only';
export function formatDateRange(startDate, endDate, timeOffset) {
    const isDateOnly = isIsoDateOnly(startDate) && isIsoDateOnly(endDate);
    const formattedStartOffset = isDateOnly ? '' : formatTimezoneOffset(startDate, timeOffset.startDate);
    const formattedEndOffset = isDateOnly ? '' : formatTimezoneOffset(endDate, timeOffset.endDate);
    return startDate + formattedStartOffset + ' ' + '—' + ' ' + endDate + formattedEndOffset;
}
//# sourceMappingURL=format-date-range.js.map