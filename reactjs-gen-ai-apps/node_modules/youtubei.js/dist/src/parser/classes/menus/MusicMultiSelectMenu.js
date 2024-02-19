import { YTNode } from '../../helpers.js';
import Parser from '../../index.js';
import Text from '../misc/Text.js';
import MusicMenuItemDivider from './MusicMenuItemDivider.js';
import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.js';
class MusicMultiSelectMenu extends YTNode {
    constructor(data) {
        var _a;
        super();
        if (Reflect.has(data, 'title') && Reflect.has(data.title, 'musicMenuTitleRenderer')) {
            this.title = new Text((_a = data.title.musicMenuTitleRenderer) === null || _a === void 0 ? void 0 : _a.primaryText);
        }
        this.options = Parser.parseArray(data.options, [MusicMultiSelectMenuItem, MusicMenuItemDivider]);
    }
}
MusicMultiSelectMenu.type = 'MusicMultiSelectMenu';
export default MusicMultiSelectMenu;
//# sourceMappingURL=MusicMultiSelectMenu.js.map