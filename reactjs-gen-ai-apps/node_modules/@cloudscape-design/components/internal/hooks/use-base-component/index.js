import { useComponentMetadata } from '@cloudscape-design/component-toolkit/internal';
import { useTelemetry } from '../use-telemetry';
import { PACKAGE_VERSION } from '../../environment';
import useFocusVisible from '../focus-visible';
/**
 * This hook is used for components which are exported to customers. The returned __internalRootRef needs to be
 * attached to the (internal) component's root DOM node. The hook takes care of attaching the metadata to this
 * root DOM node and emits the telemetry for this component.
 */
export default function useBaseComponent(componentName) {
    useTelemetry(componentName);
    useFocusVisible();
    const elementRef = useComponentMetadata(componentName, PACKAGE_VERSION);
    return { __internalRootRef: elementRef };
}
//# sourceMappingURL=index.js.map