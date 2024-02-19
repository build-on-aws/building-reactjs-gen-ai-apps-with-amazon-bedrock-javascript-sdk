'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAuthStrategy = void 0;
// Default behavior is to use the primary auth mode for an API,
// so we are returning an empty array so that DataStore will default
// to using the primary auth mode.
const defaultAuthStrategy = () => [];
exports.defaultAuthStrategy = defaultAuthStrategy;
//# sourceMappingURL=defaultAuthStrategy.js.map
