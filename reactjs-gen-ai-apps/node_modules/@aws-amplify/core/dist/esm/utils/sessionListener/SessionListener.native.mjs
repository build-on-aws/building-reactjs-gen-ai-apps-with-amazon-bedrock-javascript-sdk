import { loadAppState } from '@aws-amplify/react-native';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const stateChangeListeners = new Set();
const isActive = (appState) => appState === 'active';
const isInactive = (appState) => appState === 'inactive' || appState === 'background';
class SessionListener {
    constructor() {
        this.handleStateChange = this.handleStateChange.bind(this);
        // Setup state listeners
        loadAppState().addEventListener('change', this.handleStateChange);
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

export { SessionListener };
//# sourceMappingURL=SessionListener.native.mjs.map
