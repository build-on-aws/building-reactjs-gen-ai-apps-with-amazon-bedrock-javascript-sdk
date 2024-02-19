import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
class SortFilterSubMenu extends YTNode {
    constructor(data) {
        super();
        if (Reflect.has(data, 'title')) {
            this.title = data.title;
        }
        if (Reflect.has(data, 'icon')) {
            this.icon_type = data.icon.iconType;
        }
        if (Reflect.has(data, 'accessibility')) {
            this.label = data.accessibility.accessibilityData.label;
        }
        if (Reflect.has(data, 'tooltip')) {
            this.tooltip = data.tooltip;
        }
        if (Reflect.has(data, 'subMenuItems')) {
            this.sub_menu_items = data.subMenuItems.map((item) => {
                var _a, _b;
                return ({
                    title: item.title,
                    selected: item.selected,
                    continuation: (_b = (_a = item.continuation) === null || _a === void 0 ? void 0 : _a.reloadContinuationData) === null || _b === void 0 ? void 0 : _b.continuation,
                    endpoint: new NavigationEndpoint(item.serviceEndpoint || item.navigationEndpoint),
                    subtitle: item.subtitle || null
                });
            });
        }
    }
}
SortFilterSubMenu.type = 'SortFilterSubMenu';
export default SortFilterSubMenu;
//# sourceMappingURL=SortFilterSubMenu.js.map