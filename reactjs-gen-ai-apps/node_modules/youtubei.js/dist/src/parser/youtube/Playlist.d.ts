import Feed from '../../core/mixins/Feed.js';
import Message from '../classes/Message.js';
import type Thumbnail from '../classes/misc/Thumbnail.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type { ObservedArray } from '../helpers.js';
import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { IBrowseResponse } from '../types/ParsedResponse.js';
declare class Playlist extends Feed<IBrowseResponse> {
    #private;
    info: {
        subtitle: import("../misc.js").Text | null;
        author: import("../misc.js").Author;
        thumbnails: Thumbnail[];
        total_items: string;
        views: string;
        last_updated: string;
        can_share: boolean;
        can_delete: boolean;
        is_editable: boolean;
        privacy: string;
        title?: string | undefined;
        description?: string | undefined;
        type?: string | undefined;
    };
    menu: import("../helpers.js").YTNode;
    endpoint?: NavigationEndpoint;
    messages: ObservedArray<Message>;
    constructor(actions: Actions, data: ApiResponse | IBrowseResponse, already_parsed?: boolean);
    get items(): ObservedArray<import("../nodes.js").Video | import("../nodes.js").CompactVideo | import("../nodes.js").GridVideo | import("../nodes.js").PlaylistPanelVideo | import("../nodes.js").PlaylistVideo | import("../nodes.js").ReelItem | import("../nodes.js").WatchCardCompactVideo>;
    getContinuation(): Promise<Playlist>;
}
export default Playlist;
