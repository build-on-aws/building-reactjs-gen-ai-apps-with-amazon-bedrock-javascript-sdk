var _HomeFeed_page, _HomeFeed_actions, _HomeFeed_continuation;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Parser, { SectionListContinuation } from '../index.js';
import MusicCarouselShelf from '../classes/MusicCarouselShelf.js';
import SectionList from '../classes/SectionList.js';
import SingleColumnBrowseResults from '../classes/SingleColumnBrowseResults.js';
import MusicTastebuilderShelf from '../classes/MusicTastebuilderShelf.js';
import { InnertubeError } from '../../utils/Utils.js';
import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
class HomeFeed {
    constructor(response, actions) {
        var _a, _b, _c, _d, _e, _f;
        _HomeFeed_page.set(this, void 0);
        _HomeFeed_actions.set(this, void 0);
        _HomeFeed_continuation.set(this, void 0);
        __classPrivateFieldSet(this, _HomeFeed_actions, actions, "f");
        __classPrivateFieldSet(this, _HomeFeed_page, Parser.parseResponse(response.data), "f");
        const tab = (_a = __classPrivateFieldGet(this, _HomeFeed_page, "f").contents) === null || _a === void 0 ? void 0 : _a.item().as(SingleColumnBrowseResults).tabs.get({ selected: true });
        if (!tab)
            throw new InnertubeError('Could not find Home tab.');
        if (tab.key('content').isNull()) {
            if (!__classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents)
                throw new InnertubeError('Continuation did not have any content.');
            __classPrivateFieldSet(this, _HomeFeed_continuation, __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).continuation, "f");
            this.sections = (_b = __classPrivateFieldGet(this, _HomeFeed_page, "f").continuation_contents.as(SectionListContinuation).contents) === null || _b === void 0 ? void 0 : _b.as(MusicCarouselShelf);
            return;
        }
        this.header = (_d = (_c = tab.content) === null || _c === void 0 ? void 0 : _c.as(SectionList).header) === null || _d === void 0 ? void 0 : _d.as(ChipCloud);
        __classPrivateFieldSet(this, _HomeFeed_continuation, (_e = tab.content) === null || _e === void 0 ? void 0 : _e.as(SectionList).continuation, "f");
        this.sections = (_f = tab.content) === null || _f === void 0 ? void 0 : _f.as(SectionList).contents.as(MusicCarouselShelf, MusicTastebuilderShelf);
    }
    /**
     * Retrieves home feed continuation.
     */
    getContinuation() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _HomeFeed_continuation, "f"))
                throw new InnertubeError('Continuation not found.');
            const response = yield __classPrivateFieldGet(this, _HomeFeed_actions, "f").execute('/browse', {
                client: 'YTMUSIC',
                continuation: __classPrivateFieldGet(this, _HomeFeed_continuation, "f")
            });
            return new HomeFeed(response, __classPrivateFieldGet(this, _HomeFeed_actions, "f"));
        });
    }
    applyFilter(target_filter) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let cloud_chip;
            if (typeof target_filter === 'string') {
                cloud_chip = (_b = (_a = this.header) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip).get({ text: target_filter });
                if (!cloud_chip)
                    throw new InnertubeError('Could not find filter with given name.', { available_filters: this.filters });
            }
            else if (target_filter === null || target_filter === void 0 ? void 0 : target_filter.is(ChipCloudChip)) {
                cloud_chip = target_filter;
            }
            if (!cloud_chip)
                throw new InnertubeError('Invalid filter', { available_filters: this.filters });
            if (cloud_chip === null || cloud_chip === void 0 ? void 0 : cloud_chip.is_selected)
                return this;
            if (!cloud_chip.endpoint)
                throw new InnertubeError('Selected filter does not have an endpoint.');
            const response = yield cloud_chip.endpoint.call(__classPrivateFieldGet(this, _HomeFeed_actions, "f"), { client: 'YTMUSIC' });
            return new HomeFeed(response, __classPrivateFieldGet(this, _HomeFeed_actions, "f"));
        });
    }
    get filters() {
        var _a, _b;
        return ((_b = (_a = this.header) === null || _a === void 0 ? void 0 : _a.chips) === null || _b === void 0 ? void 0 : _b.as(ChipCloudChip).map((chip) => chip.text)) || [];
    }
    get has_continuation() {
        return !!__classPrivateFieldGet(this, _HomeFeed_continuation, "f");
    }
    get page() {
        return __classPrivateFieldGet(this, _HomeFeed_page, "f");
    }
}
_HomeFeed_page = new WeakMap(), _HomeFeed_actions = new WeakMap(), _HomeFeed_continuation = new WeakMap();
export default HomeFeed;
//# sourceMappingURL=HomeFeed.js.map