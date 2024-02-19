import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
export default class GridVideo extends YTNode {
    static type: string;
    id: string;
    title: Text;
    thumbnails: Thumbnail[];
    thumbnail_overlays: ObservedArray<YTNode>;
    rich_thumbnail: YTNode;
    published: Text;
    duration: Text | null;
    author: Author;
    views: Text;
    short_view_count: Text;
    endpoint: NavigationEndpoint;
    menu: Menu | null;
    buttons?: ObservedArray<YTNode>;
    upcoming?: Date;
    upcoming_text?: Text;
    is_reminder_set?: boolean;
    constructor(data: RawNode);
    get is_upcoming(): boolean;
}
