'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionListener = void 0;
const isBrowser_1 = require("../isBrowser");
const stateChangeListeners = new Set();
class SessionListener {
    constructor() {
        this.listenerActive = false;
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        // Setup state listeners
        if ((0, isBrowser_1.isBrowser)()) {
            document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
            this.listenerActive = true;
        }
    }
    addStateChangeListener(listener, notifyOnAdd = false) {
        // No-op if document listener is not active
        if (!this.listenerActive) {
            return;
        }
        stateChangeListeners.add(listener);
        // Notify new handlers of the current status on add
        if (notifyOnAdd) {
            listener(this.getSessionState());
        }
    }
    removeStateChangeListener(handler) {
        // No-op if document listener is not active
        if (!this.listenerActive) {
            return;
        }
        stateChangeListeners.delete(handler);
    }
    handleVisibilityChange() {
        this.notifyHandlers();
    }
    notifyHandlers() {
        const sessionState = this.getSessionState();
        stateChangeListeners.forEach(listener => {
            listener(sessionState);
        });
    }
    getSessionState() {
        if ((0, isBrowser_1.isBrowser)() && document.visibilityState !== 'hidden') {
            return 'started';
        }
        // If, for any reason, document is undefined the session will never start
        return 'ended';
    }
}
exports.SessionListener = SessionListener;
//# sourceMappingURL=SessionListener.js.map
