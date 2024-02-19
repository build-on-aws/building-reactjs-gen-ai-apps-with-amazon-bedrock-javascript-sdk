import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import Button from './Button.js';
import ChannelHeaderLinks from './ChannelHeaderLinks.js';
import SubscribeButton from './SubscribeButton.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
export default class C4TabbedHeader extends YTNode {
    static type: string;
    author: Author;
    banner?: Thumbnail[];
    tv_banner?: Thumbnail[];
    mobile_banner?: Thumbnail[];
    subscribers?: Text;
    videos_count?: Text;
    sponsor_button?: Button | null;
    subscribe_button?: SubscribeButton | Button | null;
    header_links?: ChannelHeaderLinks | null;
    channel_handle?: Text;
    channel_id?: string;
    constructor(data: RawNode);
}
