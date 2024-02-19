import { YTNode } from '../helpers.js';
import Parser from '../index.js';
class TwoColumnSearchResults extends YTNode {
    constructor(data) {
        super();
        this.primary_contents = Parser.parse(data.primaryContents);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
TwoColumnSearchResults.type = 'TwoColumnSearchResults';
export default TwoColumnSearchResults;
//# sourceMappingURL=TwoColumnSearchResults.js.map