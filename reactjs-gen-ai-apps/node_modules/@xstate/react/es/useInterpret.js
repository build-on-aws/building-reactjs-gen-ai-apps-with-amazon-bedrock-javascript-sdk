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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
import { useEffect, useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { interpret, InterpreterStatus, State, toObserver } from 'xstate';
import useConstant from './useConstant';
export function useIdleInterpreter(getMachine, options) {
    var machine = useConstant(function () {
        return typeof getMachine === 'function' ? getMachine() : getMachine;
    });
    if (process.env.NODE_ENV !== 'production' &&
        typeof getMachine !== 'function') {
        var _a = __read(useState(machine), 1), initialMachine = _a[0];
        if (getMachine !== initialMachine) {
            console.warn('Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
                'Please make sure that you pass the same Machine as argument each time.');
        }
    }
    var context = options.context, guards = options.guards, actions = options.actions, activities = options.activities, services = options.services, delays = options.delays, rehydratedState = options.state, interpreterOptions = __rest(options, ["context", "guards", "actions", "activities", "services", "delays", "state"]);
    var service = useConstant(function () {
        var machineConfig = {
            context: context,
            guards: guards,
            actions: actions,
            activities: activities,
            services: services,
            delays: delays
        };
        var machineWithConfig = machine.withConfig(machineConfig, function () { return (__assign(__assign({}, machine.context), context)); });
        return interpret(machineWithConfig, interpreterOptions);
    });
    // Make sure options are kept updated when they change.
    // This mutation assignment is safe because the service instance is only used
    // in one place -- this hook's caller.
    useIsomorphicLayoutEffect(function () {
        Object.assign(service.machine.options.actions, actions);
        Object.assign(service.machine.options.guards, guards);
        Object.assign(service.machine.options.activities, activities);
        Object.assign(service.machine.options.services, services);
        Object.assign(service.machine.options.delays, delays);
    }, [actions, guards, activities, services, delays]);
    return service;
}
export function useInterpret(getMachine) {
    var _a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        _a[_i - 1] = arguments[_i];
    }
    var _b = __read(_a, 2), _c = _b[0], options = _c === void 0 ? {} : _c, observerOrListener = _b[1];
    var service = useIdleInterpreter(getMachine, options);
    useEffect(function () {
        if (!observerOrListener) {
            return;
        }
        var sub = service.subscribe(toObserver(observerOrListener));
        return function () {
            sub.unsubscribe();
        };
    }, [observerOrListener]);
    useEffect(function () {
        var rehydratedState = options.state;
        service.start(rehydratedState ? State.create(rehydratedState) : undefined);
        return function () {
            service.stop();
            service.status = InterpreterStatus.NotStarted;
        };
    }, []);
    return service;
}
