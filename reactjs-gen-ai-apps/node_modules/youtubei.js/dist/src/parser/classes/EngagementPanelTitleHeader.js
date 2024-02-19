import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import Text from './misc/Text.js';
import Button from './Button.js';
class EngagementPanelTitleHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        this.visibility_button = Parser.parseItem(data.visibilityButton, Button);
    }
}
EngagementPanelTitleHeader.type = 'EngagementPanelTitleHeader';
export default EngagementPanelTitleHeader;
//# sourceMappingURL=EngagementPanelTitleHeader.js.map