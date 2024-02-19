import { ServiceException as __ServiceException, } from "@smithy/smithy-client";
export { __ServiceException };
export class KinesisServiceException extends __ServiceException {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, KinesisServiceException.prototype);
    }
}
