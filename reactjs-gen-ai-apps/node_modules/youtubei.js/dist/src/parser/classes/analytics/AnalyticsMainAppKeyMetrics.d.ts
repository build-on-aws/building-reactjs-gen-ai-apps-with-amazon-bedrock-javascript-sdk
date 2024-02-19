import DataModelSection from './DataModelSection.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class AnalyticsMainAppKeyMetrics extends YTNode {
    static type: string;
    period: string;
    sections: DataModelSection[];
    constructor(data: RawNode);
}
