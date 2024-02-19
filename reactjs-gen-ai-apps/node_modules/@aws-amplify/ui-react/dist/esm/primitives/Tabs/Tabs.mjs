import * as React from 'react';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { TabsItem } from './TabsItem.mjs';
import { TabList } from './TabsList.mjs';
import { TabPanel } from './TabsPanel.mjs';
import { TabsContainer } from './TabsContainer.mjs';

const TabsPrimitive = ({ items, indicatorPosition, justifyContent, spacing, ...rest }, ref) => {
    return (React.createElement(TabsContainer, { ...rest, ref: ref },
        React.createElement(TabList, { indicatorPosition: indicatorPosition, justifyContent: justifyContent, spacing: spacing }, items?.map(({ value, label, content, ...rest }) => (React.createElement(TabsItem, { ...rest, key: value, value: value }, label)))),
        items?.map(({ value, content, isDisabled }) => (React.createElement(TabPanel, { key: value, value: value, isDisabled: isDisabled }, content)))));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */
const Tabs = Object.assign(primitiveWithForwardRef(TabsPrimitive), {
    Item: TabsItem,
    List: TabList,
    Panel: TabPanel,
    Container: TabsContainer,
});
Tabs.displayName = 'Tabs';

export { Tabs };
