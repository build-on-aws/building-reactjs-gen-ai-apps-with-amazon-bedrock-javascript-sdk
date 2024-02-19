import { IconsContextInterface } from './IconsContext';
export declare function useIcons<Key extends keyof IconsContextInterface>(component?: Key): IconsContextInterface[Key] | undefined;
