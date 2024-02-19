import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import ItemSectionHeader from './ItemSectionHeader.js';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader.js';
import CommentsHeader from './comments/CommentsHeader.js';
class ItemSection extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.header = Parser.parseItem(data.header, [CommentsHeader, ItemSectionHeader, ItemSectionTabbedHeader]);
        this.contents = Parser.parseArray(data.contents);
        if (data.targetId || data.sectionIdentifier) {
            this.target_id = data.target_id || data.sectionIdentifier;
        }
        if (data.continuations) {
            this.continuation = (_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a.at(0)) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation;
        }
    }
}
ItemSection.type = 'ItemSection';
export default ItemSection;
//# sourceMappingURL=ItemSection.js.map