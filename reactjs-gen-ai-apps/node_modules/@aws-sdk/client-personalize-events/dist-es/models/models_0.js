import { SENSITIVE_STRING, } from "@smithy/smithy-client";
import { PersonalizeEventsServiceException as __BaseException } from "./PersonalizeEventsServiceException";
export class InvalidInputException extends __BaseException {
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
export class ResourceInUseException extends __BaseException {
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
export class ResourceNotFoundException extends __BaseException {
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
export const EventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.itemId && { itemId: SENSITIVE_STRING }),
    ...(obj.properties && { properties: SENSITIVE_STRING }),
    ...(obj.impression && { impression: SENSITIVE_STRING }),
});
export const PutEventsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.userId && { userId: SENSITIVE_STRING }),
    ...(obj.eventList && { eventList: SENSITIVE_STRING }),
});
export const ItemFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.properties && { properties: SENSITIVE_STRING }),
});
export const PutItemsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.items && { items: obj.items.map((item) => ItemFilterSensitiveLog(item)) }),
});
export const UserFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.properties && { properties: SENSITIVE_STRING }),
});
export const PutUsersRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.users && { users: obj.users.map((item) => UserFilterSensitiveLog(item)) }),
});
