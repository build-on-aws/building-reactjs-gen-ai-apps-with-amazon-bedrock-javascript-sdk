import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode } from '../index.js';
import { Text, Thumbnail } from '../misc.js';
import Factoid from './Factoid.js';
import NavigationEndpoint from './NavigationEndpoint.js';
export default class VideoDescriptionHeader extends YTNode {
    static type: string;
    channel: Text;
    channel_navigation_endpoint?: NavigationEndpoint;
    channel_thumbnail: Thumbnail[];
    factoids: ObservedArray<Factoid>;
    publish_date: Text;
    title: Text;
    views: Text;
    constructor(data: RawNode);
}
