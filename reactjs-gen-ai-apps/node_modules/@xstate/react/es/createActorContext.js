var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { useInterpret } from './useInterpret';
import { useActor as useActorUnbound } from './useActor';
import { useSelector as useSelectorUnbound } from './useSelector';
export function createActorContext(machine, interpreterOptions, observerOrListener) {
    var ReactContext = React.createContext(null);
    var OriginalProvider = ReactContext.Provider;
    function Provider(_a) {
        var children = _a.children, _b = _a.machine, providedMachine = _b === void 0 ? machine : _b, options = _a.options;
        var actor = useInterpret(providedMachine, __assign(__assign({}, interpreterOptions), options), observerOrListener);
        return React.createElement(OriginalProvider, { value: actor }, children);
    }
    Provider.displayName = "ActorProvider(".concat(machine.id, ")");
    function useContext() {
        var actor = React.useContext(ReactContext);
        if (!actor) {
            throw new Error("You used a hook from \"".concat(Provider.displayName, "\" but it's not inside a <").concat(Provider.displayName, "> component."));
        }
        return actor;
    }
    function useActor() {
        var actor = useContext();
        return useActorUnbound(actor);
    }
    function useSelector(selector, compare) {
        var actor = useContext();
        return useSelectorUnbound(actor, selector, compare);
    }
    return {
        Provider: Provider,
        useActorRef: useContext,
        useActor: useActor,
        useSelector: useSelector
    };
}
