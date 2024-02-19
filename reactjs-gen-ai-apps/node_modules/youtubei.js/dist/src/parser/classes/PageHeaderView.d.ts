import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import ContentPreviewImageView from './ContentPreviewImageView.js';
import DynamicTextView from './DynamicTextView.js';
export default class PageHeaderView extends YTNode {
    static type: string;
    image: ContentPreviewImageView | null;
    title: DynamicTextView | null;
    constructor(data: RawNode);
}
