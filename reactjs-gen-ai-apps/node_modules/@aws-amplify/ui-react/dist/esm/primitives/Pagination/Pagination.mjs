import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import { View } from '../View/View.mjs';
import { usePaginationItems } from './usePaginationItems.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const PaginationPrimitive = ({ className, currentPage = 1, totalPages, hasMorePages = false, siblingCount, currentPageLabel, pageLabel, previousLabel, nextLabel, onNext, onPrevious, onChange, ...rest }, ref) => {
    const paginationItems = usePaginationItems({
        currentPage,
        totalPages,
        hasMorePages,
        siblingCount,
        currentPageLabel,
        pageLabel,
        previousLabel,
        nextLabel,
        onNext,
        onPrevious,
        onChange,
    });
    return (React.createElement(View, { as: "nav", className: classNames(ComponentClassName.Pagination, className), ref: ref, ...rest },
        React.createElement(Flex, { as: "ol", justifyContent: "center", alignItems: "center", gap: "inherit" }, paginationItems)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/pagination)
 */
const Pagination = primitiveWithForwardRef(PaginationPrimitive);
Pagination.displayName = 'Pagination';

export { Pagination };
