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
exports.useService = exports.useMachine = void 0;
var fsm_1 = require("@xstate/fsm");
var react_1 = require("react");
var use_isomorphic_layout_effect_1 = require("use-isomorphic-layout-effect");
var with_selector_1 = require("use-sync-external-store/shim/with-selector");
var useConstant_1 = require("./useConstant");
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
function useMachine(stateMachine, options) {
    var persistedStateRef = (0, react_1.useRef)();
    if (process.env.NODE_ENV !== 'production') {
        var _a = __read((0, react_1.useState)(stateMachine), 1), initialMachine = _a[0];
        if (stateMachine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var _b = __read((0, useConstant_1.default)(function () {
        var queue = [];
        var service = (0, fsm_1.interpret)((0, fsm_1.createMachine)(stateMachine.config, options ? options : stateMachine._options));
        var send = service.send;
        service.send = function (event) {
            if (service.status === fsm_1.InterpreterStatus.NotStarted) {
                queue.push(event);
                return;
            }
            send(event);
            persistedStateRef.current = service.state;
        };
        return [service, queue];
    }), 2), service = _b[0], queue = _b[1];
    (0, use_isomorphic_layout_effect_1.default)(function () {
        if (options) {
            service._machine._options = options;
        }
    });
    var useServiceResult = useService(service);
    (0, react_1.useEffect)(function () {
        service.start(persistedStateRef.current);
        queue.forEach(service.send);
        persistedStateRef.current = service.state;
        return function () {
            service.stop();
        };
    }, []);
    return useServiceResult;
}
exports.useMachine = useMachine;
var isEqual = function (_prevState, nextState) { return nextState.changed === false; };
function useService(service) {
    var getSnapshot = (0, react_1.useCallback)(function () { return getServiceState(service); }, [service]);
    var subscribe = (0, react_1.useCallback)(function (handleStoreChange) {
        var unsubscribe = service.subscribe(handleStoreChange).unsubscribe;
        return unsubscribe;
    }, [service]);
    var storeSnapshot = (0, with_selector_1.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getSnapshot, identity, isEqual);
    return [storeSnapshot, service.send, service];
}
exports.useService = useService;
