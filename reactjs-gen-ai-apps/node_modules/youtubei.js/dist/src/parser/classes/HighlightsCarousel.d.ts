import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
export declare class Panel extends YTNode {
    static type: string;
    thumbnail?: {
        image: {
            url: string;
            width: number;
            height: number;
        }[];
        endpoint: NavigationEndpoint;
        on_long_press_endpoint: NavigationEndpoint;
        content_mode: string;
        crop_options: string;
    };
    background_image: {
        image: {
            url: string;
            width: number;
            height: number;
        }[];
        gradient_image: {
            url: string;
            width: number;
            height: number;
        }[];
    };
    strapline: string;
    title: string;
    description: string;
    text_on_tap_endpoint: NavigationEndpoint;
    cta: {
        icon_name: string;
        title: string;
        endpoint: NavigationEndpoint;
        accessibility_text: string;
        state: string;
    };
    constructor(data: RawNode);
}
export default class HighlightsCarousel extends YTNode {
    static type: string;
    panels: Panel[];
    constructor(data: RawNode);
}
