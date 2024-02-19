import * as React from 'react';
import { DefaultComponents } from './defaultComponents';
export interface ComponentsProviderProps {
    components?: DefaultComponents;
}
export declare const CustomComponentsContext: React.Context<ComponentsProviderProps>;
export declare const useCustomComponents: () => ComponentsProviderProps;
