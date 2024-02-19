import React from 'react';
import { AutosuggestItemsHandlers, AutosuggestItemsState } from './options-controller';
import { AutosuggestProps } from './interfaces';
export interface AutosuggestOptionsListProps extends Pick<AutosuggestProps, 'enteredTextLabel' | 'virtualScroll' | 'selectedAriaLabel' | 'renderHighlightedAriaLive'> {
    statusType: AutosuggestProps.StatusType;
    autosuggestItemsState: AutosuggestItemsState;
    autosuggestItemsHandlers: AutosuggestItemsHandlers;
    highlightedOptionId?: string;
    highlightText: string;
    listId: string;
    controlId: string;
    handleLoadMore: () => void;
    hasDropdownStatus?: boolean;
    listBottom?: React.ReactNode;
    ariaDescribedby?: string;
}
export default function AutosuggestOptionsList({ statusType, autosuggestItemsState, autosuggestItemsHandlers, highlightedOptionId, highlightText, listId, controlId, enteredTextLabel, handleLoadMore, hasDropdownStatus, virtualScroll, selectedAriaLabel, renderHighlightedAriaLive, listBottom, ariaDescribedby, }: AutosuggestOptionsListProps): JSX.Element;
//# sourceMappingURL=options-list.d.ts.map