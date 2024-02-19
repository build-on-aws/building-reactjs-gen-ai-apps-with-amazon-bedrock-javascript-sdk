import React__default from 'react';

const FilterChildren = ({ allowedFilters, children = null, targetFilter, }) => {
    const showContent = Array.isArray(allowedFilters) &&
        allowedFilters.some((filter) => filter === targetFilter);
    return showContent ? React__default.createElement(React__default.Fragment, null, children) : null;
};

export { FilterChildren };
