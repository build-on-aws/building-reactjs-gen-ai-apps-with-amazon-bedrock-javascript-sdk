import { YTNode } from '../helpers.js';
import Parser from '../index.js';
class Grid extends YTNode {
    constructor(data) {
        var _a, _b, _c;
        super();
        this.items = Parser.parseArray(data.items);
        if (Reflect.has(data, 'header')) {
            this.header = Parser.parseItem(data.header);
        }
        if (Reflect.has(data, 'isCollapsible')) {
            this.is_collapsible = data.isCollapsible;
        }
        if (Reflect.has(data, 'visibleRowCount')) {
            this.visible_row_count = data.visibleRowCount;
        }
        if (Reflect.has(data, 'targetId')) {
            this.target_id = data.targetId;
        }
        this.continuation = ((_c = (_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.nextContinuationData) === null || _c === void 0 ? void 0 : _c.continuation) || null;
    }
    // XXX: Alias for consistency.
    get contents() {
        return this.items;
    }
}
Grid.type = 'Grid';
export default Grid;
//# sourceMappingURL=Grid.js.map