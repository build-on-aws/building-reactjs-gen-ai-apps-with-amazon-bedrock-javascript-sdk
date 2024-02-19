import { YTNode } from '../helpers.js';
import Parser from '../index.js';
class TwoColumnBrowseResults extends YTNode {
    constructor(data) {
        super();
        this.tabs = Parser.parse(data.tabs);
        this.secondary_contents = Parser.parse(data.secondaryContents);
    }
}
TwoColumnBrowseResults.type = 'TwoColumnBrowseResults';
export default TwoColumnBrowseResults;
//# sourceMappingURL=TwoColumnBrowseResults.js.map