import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode } from '../index.js';
import ExpandableMetadata from './ExpandableMetadata.js';
import MetadataBadge from './MetadataBadge.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
export default class Video extends YTNode {
    static type: string;
    id: string;
    title: Text;
    description_snippet?: Text;
    snippets?: {
        text: Text;
        hover_text: Text;
    }[];
    expandable_metadata: ExpandableMetadata | null;
    thumbnails: Thumbnail[];
    thumbnail_overlays: ObservedArray<YTNode>;
    rich_thumbnail?: YTNode;
    author: Author;
    badges: MetadataBadge[];
    endpoint: NavigationEndpoint;
    published: Text;
    view_count: Text;
    short_view_count: Text;
    upcoming?: Date;
    duration: {
        text: string;
        seconds: number;
    };
    show_action_menu: boolean;
    is_watched: boolean;
    menu: Menu | null;
    search_video_result_entity_key?: string;
    constructor(data: RawNode);
    get description(): string;
    get is_live(): boolean;
    get is_upcoming(): boolean | undefined;
    get is_premiere(): boolean;
    get is_4k(): boolean;
    get has_captions(): boolean;
    get best_thumbnail(): Thumbnail | undefined;
}
