import NavigationEndpoint from '../NavigationEndpoint.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class AnalyticsShortsCarouselCard extends YTNode {
    static type: string;
    title: string;
    shorts: {
        description: string;
        thumbnail_url: string;
        endpoint: NavigationEndpoint;
    }[];
    constructor(data: RawNode);
}
