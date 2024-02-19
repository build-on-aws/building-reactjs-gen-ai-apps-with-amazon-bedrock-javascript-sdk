import React from 'react';
import { AnyComponent, MergeProps } from '../../types';
import { FormHandle, FormProviderProps } from './types';
/**
 * @param Child `Form` base component wrapped inside `FormProvider`
 * @returns Composed `Form` component exposing `FormContext` values to descendents
 */
export default function withFormProvider<ChildComp extends AnyComponent, ChildProps extends React.ComponentPropsWithRef<ChildComp>, Props extends MergeProps<FormProviderProps, ChildProps>>(Child: ChildComp): React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<FormHandle>>;
