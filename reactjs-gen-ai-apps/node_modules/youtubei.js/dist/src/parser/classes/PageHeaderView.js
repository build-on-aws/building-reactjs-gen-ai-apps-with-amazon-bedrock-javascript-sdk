import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import ContentPreviewImageView from './ContentPreviewImageView.js';
import DynamicTextView from './DynamicTextView.js';
class PageHeaderView extends YTNode {
    constructor(data) {
        super();
        this.image = Parser.parseItem(data.image, ContentPreviewImageView);
        this.title = Parser.parseItem(data.title, DynamicTextView);
    }
}
PageHeaderView.type = 'PageHeaderView';
export default PageHeaderView;
//# sourceMappingURL=PageHeaderView.js.map