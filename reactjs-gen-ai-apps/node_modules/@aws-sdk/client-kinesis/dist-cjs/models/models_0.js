"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeToShardOutputFilterSensitiveLog = exports.SubscribeToShardEventStreamFilterSensitiveLog = exports.ScalingType = exports.SubscribeToShardEventStream = exports.ValidationException = exports.ShardFilterType = exports.InternalFailureException = exports.ShardIteratorType = exports.ProvisionedThroughputExceededException = exports.KMSThrottlingException = exports.KMSOptInRequired = exports.KMSNotFoundException = exports.KMSInvalidStateException = exports.KMSDisabledException = exports.KMSAccessDeniedException = exports.ExpiredNextTokenException = exports.ExpiredIteratorException = exports.StreamStatus = exports.MetricsName = exports.EncryptionType = exports.StreamMode = exports.ConsumerStatus = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.LimitExceededException = exports.InvalidArgumentException = exports.AccessDeniedException = void 0;
const KinesisServiceException_1 = require("./KinesisServiceException");
class AccessDeniedException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
exports.AccessDeniedException = AccessDeniedException;
class InvalidArgumentException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "InvalidArgumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidArgumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    }
}
exports.InvalidArgumentException = InvalidArgumentException;
class LimitExceededException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
exports.LimitExceededException = LimitExceededException;
class ResourceInUseException extends KinesisServiceException_1.KinesisServiceException {
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
class ResourceNotFoundException extends KinesisServiceException_1.KinesisServiceException {
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
exports.ConsumerStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
};
exports.StreamMode = {
    ON_DEMAND: "ON_DEMAND",
    PROVISIONED: "PROVISIONED",
};
exports.EncryptionType = {
    KMS: "KMS",
    NONE: "NONE",
};
exports.MetricsName = {
    ALL: "ALL",
    INCOMING_BYTES: "IncomingBytes",
    INCOMING_RECORDS: "IncomingRecords",
    ITERATOR_AGE_MILLISECONDS: "IteratorAgeMilliseconds",
    OUTGOING_BYTES: "OutgoingBytes",
    OUTGOING_RECORDS: "OutgoingRecords",
    READ_PROVISIONED_THROUGHPUT_EXCEEDED: "ReadProvisionedThroughputExceeded",
    WRITE_PROVISIONED_THROUGHPUT_EXCEEDED: "WriteProvisionedThroughputExceeded",
};
exports.StreamStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
class ExpiredIteratorException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ExpiredIteratorException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredIteratorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredIteratorException.prototype);
    }
}
exports.ExpiredIteratorException = ExpiredIteratorException;
class ExpiredNextTokenException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ExpiredNextTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredNextTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredNextTokenException.prototype);
    }
}
exports.ExpiredNextTokenException = ExpiredNextTokenException;
class KMSAccessDeniedException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSAccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSAccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
    }
}
exports.KMSAccessDeniedException = KMSAccessDeniedException;
class KMSDisabledException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSDisabledException.prototype);
    }
}
exports.KMSDisabledException = KMSDisabledException;
class KMSInvalidStateException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSInvalidStateException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSInvalidStateException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
    }
}
exports.KMSInvalidStateException = KMSInvalidStateException;
class KMSNotFoundException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSNotFoundException.prototype);
    }
}
exports.KMSNotFoundException = KMSNotFoundException;
class KMSOptInRequired extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSOptInRequired",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSOptInRequired";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSOptInRequired.prototype);
    }
}
exports.KMSOptInRequired = KMSOptInRequired;
class KMSThrottlingException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "KMSThrottlingException",
            $fault: "client",
            ...opts,
        });
        this.name = "KMSThrottlingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, KMSThrottlingException.prototype);
    }
}
exports.KMSThrottlingException = KMSThrottlingException;
class ProvisionedThroughputExceededException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ProvisionedThroughputExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ProvisionedThroughputExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
    }
}
exports.ProvisionedThroughputExceededException = ProvisionedThroughputExceededException;
exports.ShardIteratorType = {
    AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER",
    AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER",
    AT_TIMESTAMP: "AT_TIMESTAMP",
    LATEST: "LATEST",
    TRIM_HORIZON: "TRIM_HORIZON",
};
class InternalFailureException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "InternalFailureException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalFailureException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalFailureException.prototype);
    }
}
exports.InternalFailureException = InternalFailureException;
exports.ShardFilterType = {
    AFTER_SHARD_ID: "AFTER_SHARD_ID",
    AT_LATEST: "AT_LATEST",
    AT_TIMESTAMP: "AT_TIMESTAMP",
    AT_TRIM_HORIZON: "AT_TRIM_HORIZON",
    FROM_TIMESTAMP: "FROM_TIMESTAMP",
    FROM_TRIM_HORIZON: "FROM_TRIM_HORIZON",
};
class ValidationException extends KinesisServiceException_1.KinesisServiceException {
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        this.name = "ValidationException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}
exports.ValidationException = ValidationException;
var SubscribeToShardEventStream;
(function (SubscribeToShardEventStream) {
    SubscribeToShardEventStream.visit = (value, visitor) => {
        if (value.SubscribeToShardEvent !== undefined)
            return visitor.SubscribeToShardEvent(value.SubscribeToShardEvent);
        if (value.ResourceNotFoundException !== undefined)
            return visitor.ResourceNotFoundException(value.ResourceNotFoundException);
        if (value.ResourceInUseException !== undefined)
            return visitor.ResourceInUseException(value.ResourceInUseException);
        if (value.KMSDisabledException !== undefined)
            return visitor.KMSDisabledException(value.KMSDisabledException);
        if (value.KMSInvalidStateException !== undefined)
            return visitor.KMSInvalidStateException(value.KMSInvalidStateException);
        if (value.KMSAccessDeniedException !== undefined)
            return visitor.KMSAccessDeniedException(value.KMSAccessDeniedException);
        if (value.KMSNotFoundException !== undefined)
            return visitor.KMSNotFoundException(value.KMSNotFoundException);
        if (value.KMSOptInRequired !== undefined)
            return visitor.KMSOptInRequired(value.KMSOptInRequired);
        if (value.KMSThrottlingException !== undefined)
            return visitor.KMSThrottlingException(value.KMSThrottlingException);
        if (value.InternalFailureException !== undefined)
            return visitor.InternalFailureException(value.InternalFailureException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(SubscribeToShardEventStream = exports.SubscribeToShardEventStream || (exports.SubscribeToShardEventStream = {}));
exports.ScalingType = {
    UNIFORM_SCALING: "UNIFORM_SCALING",
};
const SubscribeToShardEventStreamFilterSensitiveLog = (obj) => {
    if (obj.SubscribeToShardEvent !== undefined)
        return { SubscribeToShardEvent: obj.SubscribeToShardEvent };
    if (obj.ResourceNotFoundException !== undefined)
        return { ResourceNotFoundException: obj.ResourceNotFoundException };
    if (obj.ResourceInUseException !== undefined)
        return { ResourceInUseException: obj.ResourceInUseException };
    if (obj.KMSDisabledException !== undefined)
        return { KMSDisabledException: obj.KMSDisabledException };
    if (obj.KMSInvalidStateException !== undefined)
        return { KMSInvalidStateException: obj.KMSInvalidStateException };
    if (obj.KMSAccessDeniedException !== undefined)
        return { KMSAccessDeniedException: obj.KMSAccessDeniedException };
    if (obj.KMSNotFoundException !== undefined)
        return { KMSNotFoundException: obj.KMSNotFoundException };
    if (obj.KMSOptInRequired !== undefined)
        return { KMSOptInRequired: obj.KMSOptInRequired };
    if (obj.KMSThrottlingException !== undefined)
        return { KMSThrottlingException: obj.KMSThrottlingException };
    if (obj.InternalFailureException !== undefined)
        return { InternalFailureException: obj.InternalFailureException };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
exports.SubscribeToShardEventStreamFilterSensitiveLog = SubscribeToShardEventStreamFilterSensitiveLog;
const SubscribeToShardOutputFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.EventStream && { EventStream: "STREAMING_CONTENT" }),
});
exports.SubscribeToShardOutputFilterSensitiveLog = SubscribeToShardOutputFilterSensitiveLog;
