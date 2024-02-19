'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionTracker = void 0;
const utils_1 = require("@aws-amplify/core/internals/utils");
const core_1 = require("@aws-amplify/core");
const logger = new core_1.ConsoleLogger('SessionTracker');
class SessionTracker {
    constructor(eventRecorder, options) {
        this.options = {};
        this.eventRecorder = eventRecorder;
        this.initialEventSent = false;
        this.sessionTrackingActive = false;
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
            utils_1.sessionListener.addStateChangeListener(this.handleStateChange, !this.initialEventSent);
            this.sessionTrackingActive = true;
        }
    }
    cleanup() {
        if (this.sessionTrackingActive) {
            utils_1.sessionListener.removeStateChangeListener(this.handleStateChange);
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
            SESSION_START_EVENT: utils_1.SESSION_START_EVENT,
            attributes,
        });
        this.eventRecorder(utils_1.SESSION_START_EVENT, attributes);
        // NOTE: The initial event will not be re-sent on re-configuration (e.g. to add additional custom attributes)
        if (!this.initialEventSent) {
            this.initialEventSent = true;
        }
    }
    sessionStopped() {
        const attributes = this.options.attributes ?? {};
        logger.debug('Recording automatically tracked page view event', {
            SESSION_STOP_EVENT: utils_1.SESSION_STOP_EVENT,
            attributes,
        });
        this.eventRecorder(utils_1.SESSION_STOP_EVENT, attributes);
    }
}
exports.SessionTracker = SessionTracker;
//# sourceMappingURL=SessionTracker.native.js.map
