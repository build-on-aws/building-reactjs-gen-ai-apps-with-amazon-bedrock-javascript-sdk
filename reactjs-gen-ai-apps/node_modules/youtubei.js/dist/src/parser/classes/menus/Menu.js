import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
class Menu extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parseArray(data.items);
        this.top_level_buttons = Parser.parseArray(data.topLevelButtons);
        if (Reflect.has(data, 'accessibility') && Reflect.has(data.accessibility, 'accessibilityData')) {
            this.label = data.accessibility.accessibilityData.label;
        }
    }
    // XXX: alias for consistency
    get contents() {
        return this.items;
    }
}
Menu.type = 'Menu';
export default Menu;
//# sourceMappingURL=Menu.js.map