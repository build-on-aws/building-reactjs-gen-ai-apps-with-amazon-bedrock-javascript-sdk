import { timeToSeconds } from '../../utils/Utils.js';
import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import ExpandableMetadata from './ExpandableMetadata.js';
import MetadataBadge from './MetadataBadge.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ThumbnailOverlayTimeStatus from './ThumbnailOverlayTimeStatus.js';
import Menu from './menus/Menu.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
class Video extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        const overlay_time_status = ((_a = data.thumbnailOverlays
            .find((overlay) => overlay.thumbnailOverlayTimeStatusRenderer)) === null || _a === void 0 ? void 0 : _a.thumbnailOverlayTimeStatusRenderer.text) || 'N/A';
        this.id = data.videoId;
        this.title = new Text(data.title);
        if (Reflect.has(data, 'descriptionSnippet')) {
            this.description_snippet = new Text(data.descriptionSnippet);
        }
        if (Reflect.has(data, 'detailedMetadataSnippets')) {
            this.snippets = data.detailedMetadataSnippets.map((snippet) => ({
                text: new Text(snippet.snippetText),
                hover_text: new Text(snippet.snippetHoverText)
            }));
        }
        this.expandable_metadata = Parser.parseItem(data.expandableMetadata, ExpandableMetadata);
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
        if (Reflect.has(data, 'richThumbnail')) {
            this.rich_thumbnail = Parser.parseItem(data.richThumbnail);
        }
        this.author = new Author(data.ownerText, data.ownerBadges, (_c = (_b = data.channelThumbnailSupportedRenderers) === null || _b === void 0 ? void 0 : _b.channelThumbnailWithLinkRenderer) === null || _c === void 0 ? void 0 : _c.thumbnail);
        this.badges = Parser.parseArray(data.badges, MetadataBadge);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.published = new Text(data.publishedTimeText);
        this.view_count = new Text(data.viewCountText);
        this.short_view_count = new Text(data.shortViewCountText);
        if (Reflect.has(data, 'upcomingEventData')) {
            this.upcoming = new Date(Number(`${data.upcomingEventData.startTime}000`));
        }
        this.duration = {
            text: data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString(),
            seconds: timeToSeconds(data.lengthText ? new Text(data.lengthText).toString() : new Text(overlay_time_status).toString())
        };
        this.show_action_menu = !!data.showActionMenu;
        this.is_watched = !!data.isWatched;
        this.menu = Parser.parseItem(data.menu, Menu);
        if (Reflect.has(data, 'searchVideoResultEntityKey')) {
            this.search_video_result_entity_key = data.searchVideoResultEntityKey;
        }
    }
    get description() {
        var _a;
        if (this.snippets) {
            return this.snippets.map((snip) => snip.text.toString()).join('');
        }
        return ((_a = this.description_snippet) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    }
    get is_live() {
        var _a;
        return this.badges.some((badge) => {
            if (badge.style === 'BADGE_STYLE_TYPE_LIVE_NOW' || badge.label === 'LIVE')
                return true;
        }) || ((_a = this.thumbnail_overlays.firstOfType(ThumbnailOverlayTimeStatus)) === null || _a === void 0 ? void 0 : _a.style) === 'LIVE';
    }
    get is_upcoming() {
        return this.upcoming && this.upcoming > new Date();
    }
    get is_premiere() {
        return this.badges.some((badge) => badge.label === 'PREMIERE');
    }
    get is_4k() {
        return this.badges.some((badge) => badge.label === '4K');
    }
    get has_captions() {
        return this.badges.some((badge) => badge.label === 'CC');
    }
    get best_thumbnail() {
        return this.thumbnails[0];
    }
}
Video.type = 'Video';
export default Video;
//# sourceMappingURL=Video.js.map