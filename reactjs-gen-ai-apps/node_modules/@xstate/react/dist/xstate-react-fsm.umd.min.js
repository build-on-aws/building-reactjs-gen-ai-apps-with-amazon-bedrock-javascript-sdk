!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@xstate/fsm"),require("react")):"function"==typeof define&&define.amd?define(["exports","@xstate/fsm","react"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).XStateReactFSM={},e.XStateFSM,e.React)}(this,(function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var o=r(n),c=u(n);var a=n.useLayoutEffect;function f(e){var t={exports:{}};return e(t,t.exports),t.exports
/**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */}var i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=o.default.useState,l=o.default.useEffect,d=o.default.useLayoutEffect,v=o.default.useDebugValue;function p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var b="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),u=r[0].inst,o=r[1];return d((function(){u.value=n,u.getSnapshot=t,p(u)&&o({inst:u})}),[e,n,t]),l((function(){return p(u)&&o({inst:u}),e((function(){p(u)&&o({inst:u})}))}),[e]),v(n),n},y={useSyncExternalStore:void 0!==o.default.useSyncExternalStore?o.default.useSyncExternalStore:b};
/**
     * @license React
     * use-sync-external-store-shim.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
f((function(e,t){}));var S=f((function(e){e.exports=y}));
/**
     * @license React
     * use-sync-external-store-shim/with-selector.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */var h="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},x=S.useSyncExternalStore,E=o.default.useRef,g=o.default.useEffect,j=o.default.useMemo,m=o.default.useDebugValue,O={useSyncExternalStoreWithSelector:function(e,t,n,r,u){var o=E(null);if(null===o.current){var c={hasValue:!1,value:null};o.current=c}else c=o.current;o=j((function(){function e(e){if(!f){if(f=!0,o=e,e=r(e),void 0!==u&&c.hasValue){var t=c.value;if(u(t,e))return a=t}return a=e}if(t=a,h(o,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(o=e,a=n)}var o,a,f=!1,i=void 0===n?null:n;return[function(){return e(t())},null===i?void 0:function(){return e(i())}]}),[t,n,r,u]);var a=x(e,o[0],o[1]);return g((function(){c.hasValue=!0,c.value=a}),[a]),m(a),a}};
/**
     * @license React
     * use-sync-external-store-shim/with-selector.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
f((function(e,t){}));var w=f((function(e){e.exports=O}));function M(e){return e}var _=function(e,t){return!1===t.changed};function R(e){var t=n.useCallback((function(){return function(e){var t;return e.subscribe((function(e){t=e})).unsubscribe(),t}(e)}),[e]),r=n.useCallback((function(t){return e.subscribe(t).unsubscribe}),[e]);return[w.useSyncExternalStoreWithSelector(r,t,t,M,_),e.send,e]}e.useMachine=function(e,r){var u,o,f=n.useRef(),i=
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,u,o=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)c.push(r.value)}catch(e){u={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(u)throw u.error}}return c}((u=function(){var n=[],u=t.interpret(t.createMachine(e.config,r||e._options)),o=u.send;return u.send=function(e){u.status!==t.InterpreterStatus.NotStarted?(o(e),f.current=u.state):n.push(e)},[u,n]},(o=c.useRef()).current||(o.current={v:u()}),o.current.v),2),s=i[0],l=i[1];a((function(){r&&(s._machine._options=r)}));var d=R(s);return n.useEffect((function(){return s.start(f.current),l.forEach(s.send),f.current=s.state,function(){s.stop()}}),[]),d},e.useService=R,Object.defineProperty(e,"__esModule",{value:!0})}));
