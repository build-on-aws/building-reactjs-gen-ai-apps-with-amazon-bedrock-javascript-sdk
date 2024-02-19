import { ForwardRefPrimitive } from '../types';
import { BaseTabsProps } from './types';
import { TabsItem } from './TabsItem';
import { TabList } from './TabsList';
import { TabPanel } from './TabsPanel';
import { TabsContainer } from './TabsContainer';
type TabsType = ForwardRefPrimitive<BaseTabsProps, 'div'> & {
    Panel: typeof TabPanel;
    Item: typeof TabsItem;
    List: typeof TabList;
    Container: typeof TabsContainer;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */
export declare const Tabs: TabsType;
export {};
