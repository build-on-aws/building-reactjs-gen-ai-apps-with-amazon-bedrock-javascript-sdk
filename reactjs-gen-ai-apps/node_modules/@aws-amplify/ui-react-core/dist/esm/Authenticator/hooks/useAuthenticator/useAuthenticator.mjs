import React__default, { useCallback } from 'react';
import { useSelector } from '@xstate/react';
import { getServiceFacade } from '@aws-amplify/ui';
import 'aws-amplify/auth';
import { AuthenticatorContext } from '../../context/AuthenticatorContext.mjs';
import { USE_AUTHENTICATOR_ERROR } from './constants.mjs';
import { getQRFields, getMachineFields, getComparator, defaultComparator } from './utils.mjs';

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/connected-components/authenticator/headless#useauthenticator-hook)
 */
function useAuthenticator(selector) {
    const context = React__default.useContext(AuthenticatorContext);
    if (!context) {
        throw new Error(USE_AUTHENTICATOR_ERROR);
    }
    const { service } = context;
    const { send } = service;
    const xstateSelector = useCallback((state) => ({ ...getServiceFacade({ send, state }) }), [send]);
    const comparator = selector ? getComparator(selector) : defaultComparator;
    // the purpose of `context.authStatus`is to intentionally override `facade.authStatus`. `facade.authStatus` does
    // not update on external sign in events (for example when a user is not using the `Authenticator`).
    const { authStatus } = context;
    const facade = useSelector(service, xstateSelector, comparator);
    const { route, totpSecretCode, unverifiedUserAttributes, user, ...rest } = facade;
    // do not memoize output. `service.getSnapshot` reference remains stable preventing
    // `fields` from updating with current form state on value changes
    const serviceSnapshot = service.getSnapshot();
    // legacy `QRFields` values only used for SetupTotp page to retrieve issuer information, will be removed in future
    const QRFields = route === 'setupTotp' ? getQRFields(serviceSnapshot) : null;
    // legacy `formFields` values required until form state is removed from state machine
    const fields = getMachineFields(route, serviceSnapshot, unverifiedUserAttributes);
    return {
        ...rest,
        authStatus,
        route,
        totpSecretCode,
        unverifiedUserAttributes,
        user,
        /** @deprecated For internal use only */
        fields,
        QRFields,
    };
}

export { useAuthenticator as default };
