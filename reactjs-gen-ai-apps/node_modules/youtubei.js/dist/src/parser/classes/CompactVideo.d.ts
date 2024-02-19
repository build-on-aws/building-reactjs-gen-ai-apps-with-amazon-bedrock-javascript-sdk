import { YTNode, type ObservedArray, type SuperParsedResult } from '../helpers.js';
import { type RawNode } from '../index.js';
import Menu from './menus/Menu.js';
import MetadataBadge from './MetadataBadge.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
export default class CompactVideo extends YTNode {
    static type: string;
    id: string;
    thumbnails: Thumbnail[];
    rich_thumbnail?: SuperParsedResult<YTNode>;
    title: Text;
    author: Author;
    view_count: Text;
    short_view_count: Text;
    published: Text;
    badges: MetadataBadge[];
    duration: {
        text: string;
        seconds: number;
    };
    thumbnail_overlays: ObservedArray<YTNode>;
    endpoint: NavigationEndpoint;
    menu: Menu | null;
    constructor(data: RawNode);
    get best_thumbnail(): Thumbnail;
    get is_fundraiser(): boolean;
    get is_live(): boolean;
    get is_new(): boolean;
    get is_premiere(): boolean;
}
