var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { createMachine, interpret, InterpreterStatus } from '@xstate/fsm';
import { useCallback, useEffect, useRef, useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { useSyncExternalStoreWithSelector } from 'use-sync-external-store/shim/with-selector';
import useConstant from './useConstant';
function identity(a) {
    return a;
}
var getServiceState = function (service) {
    var currentValue;
    service
        .subscribe(function (state) {
        currentValue = state;
    })
        .unsubscribe();
    return currentValue;
};
export function useMachine(stateMachine, options) {
    var persistedStateRef = useRef();
    if (process.env.NODE_ENV !== 'production') {
        var _a = __read(useState(stateMachine), 1), initialMachine = _a[0];
        if (stateMachine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var _b = __read(useConstant(function () {
        var queue = [];
        var service = interpret(createMachine(stateMachine.config, options ? options : stateMachine._options));
        var send = service.send;
        service.send = function (event) {
            if (service.status === InterpreterStatus.NotStarted) {
                queue.push(event);
                return;
            }
            send(event);
            persistedStateRef.current = service.state;
        };
        return [service, queue];
    }), 2), service = _b[0], queue = _b[1];
    useIsomorphicLayoutEffect(function () {
        if (options) {
            service._machine._options = options;
        }
    });
    var useServiceResult = useService(service);
    useEffect(function () {
        service.start(persistedStateRef.current);
        queue.forEach(service.send);
        persistedStateRef.current = service.state;
        return function () {
            service.stop();
        };
    }, []);
    return useServiceResult;
}
var isEqual = function (_prevState, nextState) { return nextState.changed === false; };
export function useService(service) {
    var getSnapshot = useCallback(function () { return getServiceState(service); }, [service]);
    var subscribe = useCallback(function (handleStoreChange) {
        var unsubscribe = service.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [service]);
    var storeSnapshot = useSyncExternalStoreWithSelector(subscribe, getSnapshot, getSnapshot, identity, isEqual);
    return [storeSnapshot, service.send, service];
}
