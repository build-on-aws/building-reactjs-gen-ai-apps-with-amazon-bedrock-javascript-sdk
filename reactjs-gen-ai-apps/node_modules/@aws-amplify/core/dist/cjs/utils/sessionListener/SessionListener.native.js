'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionListener = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const stateChangeListeners = new Set();
const isActive = (appState) => appState === 'active';
const isInactive = (appState) => appState === 'inactive' || appState === 'background';
class SessionListener {
    constructor() {
        this.handleStateChange = this.handleStateChange.bind(this);
        // Setup state listeners
        (0, react_native_1.loadAppState)().addEventListener('change', this.handleStateChange);
    }
    addStateChangeListener(listener, notifyOnAdd = false) {
        stateChangeListeners.add(listener);
        // Notify new handlers of the current state on add if the current state has been determined
        if (notifyOnAdd && this.currentAppState !== undefined) {
            listener(this.getSessionState());
        }
    }
    removeStateChangeListener(handler) {
        stateChangeListeners.delete(handler);
    }
    handleStateChange(nextAppState) {
        if ((this.currentAppState === undefined ||
            isInactive(this.currentAppState)) &&
            isActive(nextAppState)) {
            this.notifyHandlers('started');
        }
        else if (isActive(this.currentAppState) && isInactive(nextAppState)) {
            this.notifyHandlers('ended');
        }
        this.currentAppState = nextAppState;
    }
    notifyHandlers(state) {
        stateChangeListeners.forEach(listener => {
            listener(state);
        });
    }
    getSessionState() {
        if (isActive(this.currentAppState)) {
            return 'started';
        }
        // Consider any other app state as ended
        return 'ended';
    }
}
exports.SessionListener = SessionListener;
//# sourceMappingURL=SessionListener.native.js.map
