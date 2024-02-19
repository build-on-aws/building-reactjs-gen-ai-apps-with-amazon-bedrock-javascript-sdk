import { sessionListener, SESSION_START_EVENT, SESSION_STOP_EVENT } from '@aws-amplify/core/internals/utils';
import { ConsoleLogger } from '@aws-amplify/core';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const logger = new ConsoleLogger('SessionTracker');
class SessionTracker {
    constructor(eventRecorder, options) {
        this.options = {};
        this.eventRecorder = eventRecorder;
        this.sessionTrackingActive = false;
        this.initialEventSent = false;
        this.handleStateChange = this.handleStateChange.bind(this);
        this.configure(eventRecorder, options);
    }
    configure(eventRecorder, options) {
        this.eventRecorder = eventRecorder;
        // Clean up any existing listeners
        this.cleanup();
        // Apply defaults
        this.options = {
            attributes: options?.attributes ?? {},
        };
        // Setup state listeners
        if (!this.sessionTrackingActive) {
            sessionListener.addStateChangeListener(this.handleStateChange, !this.initialEventSent);
            this.sessionTrackingActive = true;
        }
    }
    cleanup() {
        if (this.sessionTrackingActive) {
            sessionListener.removeStateChangeListener(this.handleStateChange);
        }
        this.sessionTrackingActive = false;
    }
    handleStateChange(state) {
        if (state === 'started') {
            this.sessionStarted();
        }
        else {
            this.sessionStopped();
        }
    }
    sessionStarted() {
        const attributes = this.options.attributes ?? {};
        logger.debug('Recording automatically tracked page view event', {
            SESSION_START_EVENT,
            attributes,
        });
        this.eventRecorder(SESSION_START_EVENT, attributes);
        // NOTE: The initial event will not be re-sent on re-configuration (e.g. to add additional custom attributes)
        if (!this.initialEventSent) {
            this.initialEventSent = true;
        }
    }
    sessionStopped() {
        const attributes = this.options.attributes ?? {};
        logger.debug('Recording automatically tracked page view event', {
            SESSION_STOP_EVENT,
            attributes,
        });
        this.eventRecorder(SESSION_STOP_EVENT, attributes);
    }
}

export { SessionTracker };
//# sourceMappingURL=SessionTracker.mjs.map
