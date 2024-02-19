import React from 'react';
export interface FilterChildrenProps {
    children?: React.ReactNode;
    /**
     * string values to match against `targetFilter` against
     */
    allowedFilters?: string[];
    targetFilter?: string;
}
export declare const FilterChildren: ({ allowedFilters, children, targetFilter, }: FilterChildrenProps) => JSX.Element | null;
