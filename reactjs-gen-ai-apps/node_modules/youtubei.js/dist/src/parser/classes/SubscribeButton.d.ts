import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscriptionNotificationToggleButton from './SubscriptionNotificationToggleButton.js';
import Text from './misc/Text.js';
export default class SubscribeButton extends YTNode {
    static type: string;
    title: Text;
    subscribed: boolean;
    enabled: boolean;
    item_type: string;
    channel_id: string;
    show_preferences: boolean;
    subscribed_text: Text;
    unsubscribed_text: Text;
    notification_preference_button: SubscriptionNotificationToggleButton | null;
    endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
