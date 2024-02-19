/// <reference types="react" />
import { BaseCollectionProps, ElementType } from '../types';
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/collection)
 */
export declare const Collection: {
    <Item, Element_1 extends ElementType>({ className, isSearchable, isPaginated, items, itemsPerPage, searchFilter, searchLabel, searchNoResultsFound, searchPlaceholder, type, testId, ...rest }: BaseCollectionProps<Item, Element_1>): JSX.Element;
    displayName: string;
};
