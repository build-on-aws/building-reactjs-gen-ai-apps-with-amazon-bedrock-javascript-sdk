"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function useConstant(fn) {
    var ref = React.useRef();
    if (!ref.current) {
        ref.current = { v: fn() };
    }
    return ref.current.v;
}
exports.default = useConstant;
