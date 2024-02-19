import * as React from 'react';
import { MessageColorTheme } from '../types';
export interface MessageContextType {
    colorTheme?: MessageColorTheme;
    dismissed?: boolean;
    setDismissed: (dismissed: boolean) => void;
}
export declare const MessageContext: React.Context<MessageContextType>;
export declare const useMessage: () => MessageContextType;
