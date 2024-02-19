"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMachine = void 0;
var react_1 = require("react");
var with_selector_1 = require("use-sync-external-store/shim/with-selector");
var xstate_1 = require("xstate");
var useInterpret_1 = require("./useInterpret");
var utils_1 = require("./utils");
function identity(a) {
    return a;
}
function useMachine(getMachine) {
    var _a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        _a[_i - 1] = arguments[_i];
    }
    var _b = __read(_a, 1), _c = _b[0], options = _c === void 0 ? {} : _c;
    // using `useIdleInterpreter` allows us to subscribe to the service *before* we start it
    // so we don't miss any notifications
    var service = (0, useInterpret_1.useIdleInterpreter)(getMachine, options);
    var getSnapshot = (0, react_1.useCallback)(function () {
        if (service.status === xstate_1.InterpreterStatus.NotStarted) {
            return (options.state
                ? xstate_1.State.create(options.state)
                : service.machine.initialState);
        }
        return service.getSnapshot();
    }, [service]);
    var isEqual = (0, react_1.useCallback)(function (prevState, nextState) {
        return (0, utils_1.isInterpreterStateEqual)(service, prevState, nextState);
    }, [service]);
    var subscribe = (0, react_1.useCallback)(function (handleStoreChange) {
        var unsubscribe = service.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [service]);
    var storeSnapshot = (0, with_selector_1.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getSnapshot, identity, isEqual);
    (0, react_1.useEffect)(function () {
        var rehydratedState = options.state;
        service.start(rehydratedState ? xstate_1.State.create(rehydratedState) : undefined);
        return function () {
            service.stop();
            service.status = xstate_1.InterpreterStatus.NotStarted;
        };
    }, []);
    return [storeSnapshot, service.send, service];
}
exports.useMachine = useMachine;
