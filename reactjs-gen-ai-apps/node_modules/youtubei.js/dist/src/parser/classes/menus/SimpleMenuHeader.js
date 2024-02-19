import { YTNode } from '../../helpers.js';
import Parser from '../../index.js';
import Text from '../misc/Text.js';
class SimpleMenuHeader extends YTNode {
    constructor(data) {
        super();
        this.title = new Text(data.title);
        // @TODO: Check if this is of type `Button`.
        this.buttons = Parser.parse(data.buttons);
    }
}
SimpleMenuHeader.type = 'SimpleMenuHeader';
export default SimpleMenuHeader;
//# sourceMappingURL=SimpleMenuHeader.js.map