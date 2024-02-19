// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React from 'react';
import styles from './styles.css.js';
import { getStickyClassNames } from '../utils';
import { useStickyCellStyles } from '../sticky-columns';
import { getTableCellRoleProps } from '../table-role';
import { useMergeRefs } from '../../internal/hooks/use-merge-refs/index.js';
export const TableTdElement = React.forwardRef(({ className, style, children, wrapLines, isRowHeader, isFirstRow, isLastRow, isSelected, isNextSelected, isPrevSelected, nativeAttributes, onClick, onMouseEnter, onMouseLeave, isEvenRow, stripedRows, isVisualRefresh, hasSelection, hasFooter, columnId, colIndex, stickyState, tableRole, }, ref) => {
    const Element = isRowHeader ? 'th' : 'td';
    nativeAttributes = Object.assign(Object.assign({}, nativeAttributes), getTableCellRoleProps({ tableRole, isRowHeader, colIndex }));
    const stickyStyles = useStickyCellStyles({
        stickyColumns: stickyState,
        columnId,
        getClassName: props => getStickyClassNames(styles, props),
    });
    const mergedRef = useMergeRefs(stickyStyles.ref, ref);
    return (React.createElement(Element, Object.assign({ style: Object.assign(Object.assign({}, style), stickyStyles.style), className: clsx(className, styles['body-cell'], wrapLines && styles['body-cell-wrap'], isFirstRow && styles['body-cell-first-row'], isLastRow && styles['body-cell-last-row'], isSelected && styles['body-cell-selected'], isNextSelected && styles['body-cell-next-selected'], isPrevSelected && styles['body-cell-prev-selected'], !isEvenRow && stripedRows && styles['body-cell-shaded'], stripedRows && styles['has-striped-rows'], isVisualRefresh && styles['is-visual-refresh'], hasSelection && styles['has-selection'], hasFooter && styles['has-footer'], stickyStyles.className), onClick: onClick, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, ref: mergedRef }, nativeAttributes), children));
});
//# sourceMappingURL=td-element.js.map