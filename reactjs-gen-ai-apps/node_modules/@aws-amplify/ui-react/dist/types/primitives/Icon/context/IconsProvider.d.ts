import * as React from 'react';
import { IconsContextInterface } from './IconsContext';
interface IconProviderProps {
    children: React.ReactNode;
    icons?: IconsContextInterface;
}
export { IconsContextInterface };
export declare function IconsProvider({ children, icons, }: IconProviderProps): JSX.Element;
