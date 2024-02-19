import type { IGetNotificationMenuRequest, GetNotificationMenuEndpointOptions } from '../../types/index.js';
export declare const PATH = "/notification/get_notification_menu";
/**
 * Builds a `/get_notification_menu` request payload.
 * @param opts - The options to use.
 * @returns The payload.
 */
export declare function build(opts: GetNotificationMenuEndpointOptions): IGetNotificationMenuRequest;
