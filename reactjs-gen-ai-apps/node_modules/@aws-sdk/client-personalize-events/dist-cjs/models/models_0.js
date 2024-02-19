"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutUsersRequestFilterSensitiveLog = exports.UserFilterSensitiveLog = exports.PutItemsRequestFilterSensitiveLog = exports.ItemFilterSensitiveLog = exports.PutEventsRequestFilterSensitiveLog = exports.EventFilterSensitiveLog = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.InvalidInputException = void 0;
const smithy_client_1 = require("@smithy/smithy-client");
const PersonalizeEventsServiceException_1 = require("./PersonalizeEventsServiceException");
class InvalidInputException extends PersonalizeEventsServiceException_1.PersonalizeEventsServiceException {
    constructor(opts) {
        super({
            name: "InvalidInputException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidInputException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidInputException.prototype);
    }
}
exports.InvalidInputException = InvalidInputException;
class ResourceInUseException extends PersonalizeEventsServiceException_1.PersonalizeEventsServiceException {
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
exports.ResourceInUseException = ResourceInUseException;
class ResourceNotFoundException extends PersonalizeEventsServiceException_1.PersonalizeEventsServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
exports.ResourceNotFoundException = ResourceNotFoundException;
const EventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.itemId && { itemId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.properties && { properties: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.impression && { impression: smithy_client_1.SENSITIVE_STRING }),
});
exports.EventFilterSensitiveLog = EventFilterSensitiveLog;
const PutEventsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.userId && { userId: smithy_client_1.SENSITIVE_STRING }),
    ...(obj.eventList && { eventList: smithy_client_1.SENSITIVE_STRING }),
});
exports.PutEventsRequestFilterSensitiveLog = PutEventsRequestFilterSensitiveLog;
const ItemFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.properties && { properties: smithy_client_1.SENSITIVE_STRING }),
});
exports.ItemFilterSensitiveLog = ItemFilterSensitiveLog;
const PutItemsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.items && { items: obj.items.map((item) => (0, exports.ItemFilterSensitiveLog)(item)) }),
});
exports.PutItemsRequestFilterSensitiveLog = PutItemsRequestFilterSensitiveLog;
const UserFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.properties && { properties: smithy_client_1.SENSITIVE_STRING }),
});
exports.UserFilterSensitiveLog = UserFilterSensitiveLog;
const PutUsersRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.users && { users: obj.users.map((item) => (0, exports.UserFilterSensitiveLog)(item)) }),
});
exports.PutUsersRequestFilterSensitiveLog = PutUsersRequestFilterSensitiveLog;
