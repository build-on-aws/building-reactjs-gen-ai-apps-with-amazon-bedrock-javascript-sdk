/// <reference types="react" />
import { AuthEventTypes } from '@aws-amplify/ui';
export interface TwoButtonSubmitFooterProps {
    cancelButtonSendType: AuthEventTypes;
    cancelButtonText: string;
    submitButtonText?: JSX.Element;
}
export declare const TwoButtonSubmitFooter: (props: TwoButtonSubmitFooterProps) => JSX.Element;
