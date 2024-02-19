import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import EmojiRun from './EmojiRun.js';
import TextRun from './TextRun.js';
export interface Run {
    text: string;
    toString(): string;
    toHTML(): string;
}
export declare function escape(text: string): string;
export default class Text {
    text?: string;
    runs?: (EmojiRun | TextRun)[];
    endpoint?: NavigationEndpoint;
    constructor(data: RawNode);
    /**
     * Converts the text to HTML.
     * @returns The HTML.
     */
    toHTML(): string | undefined;
    /**
     * Checks if the text is empty.
     * @returns Whether the text is empty.
     */
    isEmpty(): boolean;
    /**
     * Converts the text to a string.
     * @returns The text.
     */
    toString(): string;
}
