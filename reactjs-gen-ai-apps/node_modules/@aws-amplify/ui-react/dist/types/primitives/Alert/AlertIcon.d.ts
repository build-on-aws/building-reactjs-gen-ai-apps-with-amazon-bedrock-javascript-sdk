/// <reference types="react" />
import { AlertVariations, ViewProps } from '../types';
interface AlertIconProps extends Pick<ViewProps, 'role' | 'ariaLabel'> {
    variation?: AlertVariations;
    ariaHidden?: boolean;
}
/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
export declare const AlertIcon: {
    ({ variation, ariaHidden, ariaLabel, role, }: AlertIconProps): JSX.Element | null;
    displayName: string;
};
export {};
