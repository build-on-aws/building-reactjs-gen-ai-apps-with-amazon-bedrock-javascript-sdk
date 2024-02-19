"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelector = void 0;
var react_1 = require("react");
var with_selector_1 = require("use-sync-external-store/shim/with-selector");
var useActor_1 = require("./useActor");
var utils_1 = require("./utils");
var defaultCompare = function (a, b) { return a === b; };
var defaultGetSnapshot = function (a, initialStateCacheRef) {
    if ((0, utils_1.isService)(a)) {
        // A status of 0 = interpreter not started
        if (a.status === 0 && initialStateCacheRef.current) {
            return initialStateCacheRef.current;
        }
        var snapshot = (0, utils_1.getServiceSnapshot)(a);
        initialStateCacheRef.current = a.status === 0 ? snapshot : null;
        return snapshot;
    }
    return (0, useActor_1.isActorWithState)(a) ? a.state : undefined;
};
function useSelector(actor, selector, compare, getSnapshot) {
    if (compare === void 0) { compare = defaultCompare; }
    var initialStateCacheRef = (0, react_1.useRef)(null);
    var subscribe = (0, react_1.useCallback)(function (handleStoreChange) {
        var unsubscribe = actor.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [actor]);
    var boundGetSnapshot = (0, react_1.useCallback)(function () {
        if (getSnapshot) {
            return getSnapshot(actor);
        }
        return defaultGetSnapshot(actor, initialStateCacheRef);
    }, [actor, getSnapshot]);
    var selectedSnapshot = (0, with_selector_1.useSyncExternalStoreWithSelector)(subscribe, boundGetSnapshot, boundGetSnapshot, selector, compare);
    return selectedSnapshot;
}
exports.useSelector = useSelector;
