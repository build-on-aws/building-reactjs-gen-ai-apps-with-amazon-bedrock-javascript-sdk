import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class SecondarySearchContainer extends YTNode {
    constructor(data) {
        super();
        this.contents = Parser.parseArray(data.contents);
    }
}
SecondarySearchContainer.type = 'SecondarySearchContainer';
export default SecondarySearchContainer;
//# sourceMappingURL=SecondarySearchContainer.js.map