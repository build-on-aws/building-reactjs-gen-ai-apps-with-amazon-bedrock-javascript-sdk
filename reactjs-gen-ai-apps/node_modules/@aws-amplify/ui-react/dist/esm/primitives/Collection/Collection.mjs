import { ComponentClassName, classNames } from '@aws-amplify/ui';
import * as React from 'react';
import debounce from 'lodash/debounce.js';
import { Flex } from '../Flex/Flex.mjs';
import { Grid } from '../Grid/Grid.mjs';
import { Text } from '../Text/Text.mjs';
import { Pagination } from '../Pagination/Pagination.mjs';
import { usePagination } from '../Pagination/usePagination.mjs';
import { SearchField } from '../SearchField/SearchField.mjs';
import { ComponentText } from '../shared/constants.mjs';
import { strHasLength } from '../shared/utils.mjs';
import { getPageCount, getItemsAtPage, itemHasText } from './utils.mjs';

const DEFAULT_PAGE_SIZE = 10;
const TYPEAHEAD_DELAY_MS = 300;
const ListCollection = ({ children, direction = 'column', items, ...rest }) => (React.createElement(Flex, { direction: direction, ...rest }, Array.isArray(items) ? items.map(children) : null));
const GridCollection = ({ children, items, ...rest }) => (React.createElement(Grid, { ...rest }, Array.isArray(items) ? items.map(children) : null));
const renderCollectionOrNoResultsFound = (collection, items, searchNoResultsFound) => {
    if (items.length) {
        return collection;
    }
    if (searchNoResultsFound) {
        return searchNoResultsFound;
    }
    return (React.createElement(Flex, { justifyContent: "center" },
        React.createElement(Text, null, ComponentText.Collection.searchNoResultsFound)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/collection)
 */
const Collection = ({ className, isSearchable, isPaginated, items, itemsPerPage = DEFAULT_PAGE_SIZE, searchFilter = itemHasText, searchLabel = ComponentText.Collection.searchButtonLabel, searchNoResultsFound, searchPlaceholder, type = 'list', testId, ...rest }) => {
    const [searchText, setSearchText] = React.useState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onSearch = React.useCallback(debounce(setSearchText, TYPEAHEAD_DELAY_MS), [setSearchText]);
    // Make sure that items are iterable
    items = Array.isArray(items) ? items : [];
    // Filter items by text
    if (isSearchable && strHasLength(searchText)) {
        items = items.filter((item) => searchFilter(item, searchText));
    }
    // Pagination
    const pagination = usePagination({
        totalPages: getPageCount(items.length, itemsPerPage),
    });
    if (isPaginated) {
        items = getItemsAtPage(items, pagination.currentPage, itemsPerPage);
    }
    const collection = type === 'list' ? (React.createElement(ListCollection, { className: ComponentClassName.CollectionItems, items: items, ...rest })) : type === 'grid' ? (React.createElement(GridCollection, { className: ComponentClassName.CollectionItems, items: items, ...rest })) : null;
    return (React.createElement(Flex, { testId: testId, className: classNames(ComponentClassName.Collection, className) },
        isSearchable ? (React.createElement(Flex, { className: ComponentClassName.CollectionSearch },
            React.createElement(SearchField, { label: searchLabel, placeholder: searchPlaceholder, onChange: (e) => onSearch(e.target.value), onClear: () => setSearchText('') }))) : null,
        renderCollectionOrNoResultsFound(collection, items, searchNoResultsFound),
        isPaginated ? (React.createElement(Flex, { className: ComponentClassName.CollectionPagination },
            React.createElement(Pagination, { ...pagination }))) : null));
};
Collection.displayName = 'Collection';

export { Collection };
