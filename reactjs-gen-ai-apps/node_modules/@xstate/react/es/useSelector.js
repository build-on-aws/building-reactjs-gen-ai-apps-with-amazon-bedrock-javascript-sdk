import { useCallback, useRef } from 'react';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import { isActorWithState } from './useActor';
import { getServiceSnapshot, isService } from './utils';
var defaultCompare = function (a, b) { return a === b; };
var defaultGetSnapshot = function (a, initialStateCacheRef) {
    if (isService(a)) {
        // A status of 0 = interpreter not started
        if (a.status === 0 && initialStateCacheRef.current) {
            return initialStateCacheRef.current;
        }
        var snapshot = getServiceSnapshot(a);
        initialStateCacheRef.current = a.status === 0 ? snapshot : null;
        return snapshot;
    }
    return isActorWithState(a) ? a.state : undefined;
};
export function useSelector(actor, selector, compare, getSnapshot) {
    if (compare === void 0) { compare = defaultCompare; }
    var initialStateCacheRef = useRef(null);
    var subscribe = useCallback(function (handleStoreChange) {
        var unsubscribe = actor.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [actor]);
    var boundGetSnapshot = useCallback(function () {
        if (getSnapshot) {
            return getSnapshot(actor);
        }
        return defaultGetSnapshot(actor, initialStateCacheRef);
    }, [actor, getSnapshot]);
    var selectedSnapshot = useSyncExternalStoreWithSelector(subscribe, boundGetSnapshot, boundGetSnapshot, selector, compare);
    return selectedSnapshot;
}
