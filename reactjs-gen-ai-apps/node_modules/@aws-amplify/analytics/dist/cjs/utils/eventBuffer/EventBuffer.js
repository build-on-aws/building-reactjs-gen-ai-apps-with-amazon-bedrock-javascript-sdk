'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBuffer = void 0;
const core_1 = require("@aws-amplify/core");
const logger = new core_1.ConsoleLogger('EventBuffer');
class EventBuffer {
    constructor(config, getAnalyticsClient) {
        this.list = [];
        this.config = config;
        this.getAnalyticsClient = getAnalyticsClient;
        this.startEventLoop();
    }
    append(...events) {
        for (const event of events) {
            if (this.list.length + 1 > this.config.bufferSize) {
                logger.debug(`Exceed ${typeof event} event buffer limits, event dropped`);
                continue;
            }
            this.list.push(event);
        }
    }
    flushAll() {
        return this.submitEvents(this.list.length);
    }
    release() {
        this.list = [];
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    get length() {
        return this.list.length;
    }
    head(count) {
        return this.list.splice(0, count);
    }
    insertAtBeginning(...data) {
        this.list.unshift(...data);
    }
    startEventLoop() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        const { flushSize, flushInterval } = this.config;
        setInterval(() => {
            this.submitEvents(flushSize);
        }, flushInterval);
    }
    submitEvents(count) {
        const events = this.head(count);
        if (events.length === 0) {
            return Promise.resolve();
        }
        return this.getAnalyticsClient()(events).then(result => {
            if (result.length > 0) {
                this.insertAtBeginning(...result);
            }
        });
    }
}
exports.EventBuffer = EventBuffer;
//# sourceMappingURL=EventBuffer.js.map
