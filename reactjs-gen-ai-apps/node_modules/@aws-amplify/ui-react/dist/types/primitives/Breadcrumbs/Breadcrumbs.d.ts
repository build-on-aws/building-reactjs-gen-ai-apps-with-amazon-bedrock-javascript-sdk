import { BaseBreadcrumbProps, ForwardRefPrimitive } from '../types';
import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbLink } from './BreadcrumbLink';
import { BreadcrumbSeparator } from './BreadcrumbSeparator';
import { BreadcrumbContainer } from './BreadcrumbContainer';
type BreadcrumbsType = ForwardRefPrimitive<BaseBreadcrumbProps, 'nav'> & {
    Link: typeof BreadcrumbLink;
    Item: typeof BreadcrumbItem;
    Separator: typeof BreadcrumbSeparator;
    Container: typeof BreadcrumbContainer;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/breadcrumbs)
 */
declare const Breadcrumbs: BreadcrumbsType;
export { Breadcrumbs };
