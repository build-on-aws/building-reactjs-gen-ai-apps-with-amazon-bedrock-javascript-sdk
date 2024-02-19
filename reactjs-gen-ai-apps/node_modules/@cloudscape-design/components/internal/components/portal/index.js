// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
/**
 * A safe react portal component that renders to a provided node.
 * If a node isn't provided, it creates one under document.body.
 */
export default function Portal({ container, children }) {
    const [activeContainer, setActiveContainer] = useState(container !== null && container !== void 0 ? container : null);
    useLayoutEffect(() => {
        if (container) {
            setActiveContainer(container);
            return;
        }
        const newContainer = document.createElement('div');
        document.body.appendChild(newContainer);
        setActiveContainer(newContainer);
        return () => {
            document.body.removeChild(newContainer);
            setActiveContainer(null);
        };
    }, [container]);
    return activeContainer && createPortal(children, activeContainer);
}
//# sourceMappingURL=index.js.map