import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { Button } from '../Button/Button.mjs';
import { Flex } from '../Flex/Flex.mjs';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import { View } from '../View/View.mjs';
import { IconChevronLeft } from '../Icon/icons/IconChevronLeft.mjs';
import { IconChevronRight } from '../Icon/icons/IconChevronRight.mjs';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.mjs';
import { ComponentText } from '../shared/constants.mjs';

const PAGINATION_CURRENT_TEST_ID = 'current';
const PAGINATION_ELLIPSIS_TEST_ID = 'ellipsis';
const PaginationItem = ({ type, page, currentPage, currentPageLabel = ComponentText.PaginationItem.currentPageLabel, isDisabled, onClick, ariaLabel, ...rest }) => {
    const icons = useIcons('pagination');
    const nextClasses = classNames(ComponentClassName.PaginationItem, classNameModifier(ComponentClassName.PaginationItem, 'link'), classNameModifierByFlag(ComponentClassName.PaginationItem, 'disabled', isDisabled));
    const previousClasses = classNames(ComponentClassName.PaginationItem, classNameModifier(ComponentClassName.PaginationItem, 'link'), classNameModifierByFlag(ComponentClassName.PaginationItem, 'disabled', isDisabled));
    switch (type) {
        case 'page':
            return (React.createElement(View, { as: "li" }, page === currentPage ? (React.createElement(Button, { "aria-current": "page", size: "small", variation: "link", className: classNames(ComponentClassName.PaginationItem, classNameModifier(ComponentClassName.PaginationItem, 'current')), testId: PAGINATION_CURRENT_TEST_ID, ...rest },
                React.createElement(VisuallyHidden, null,
                    currentPageLabel,
                    ":"),
                page)) : (React.createElement(Button, { className: ComponentClassName.PaginationItem, size: "small", variation: "link", onClick: () => {
                    onClick?.();
                }, ariaLabel: ariaLabel, ...rest }, page))));
        case 'next':
            return (React.createElement(View, { as: "li" },
                React.createElement(Button, { className: nextClasses, size: "small", variation: "link", isDisabled: isDisabled, onClick: () => {
                        onClick?.();
                    }, ariaLabel: ariaLabel, ...rest }, icons?.next ?? React.createElement(IconChevronRight, null))));
        case 'previous':
            return (React.createElement(View, { as: "li" },
                React.createElement(Button, { className: previousClasses, size: "small", variation: "link", isDisabled: isDisabled, onClick: () => {
                        onClick?.();
                    }, ariaLabel: ariaLabel, ...rest }, icons?.previous ?? React.createElement(IconChevronLeft, null))));
        case 'ellipsis':
            return (React.createElement(View, { as: "li" },
                React.createElement(Flex, { as: "span", className: classNameModifier(ComponentClassName.PaginationItem, 'ellipsis'), testId: PAGINATION_ELLIPSIS_TEST_ID, ...rest }, "\u2026")));
        // No match type found
    }
    return React.createElement(View, { as: "li" });
};
PaginationItem.displayName = 'PaginationItem';

export { PAGINATION_CURRENT_TEST_ID, PAGINATION_ELLIPSIS_TEST_ID, PaginationItem };
