import type Player from '../../../core/Player.js';
import type { RawNode } from '../../index.js';
export default class Format {
    itag: number;
    mime_type: string;
    is_type_otf: boolean;
    bitrate: number;
    average_bitrate?: number;
    width: number;
    height: number;
    init_range?: {
        start: number;
        end: number;
    };
    index_range?: {
        start: number;
        end: number;
    };
    last_modified: Date;
    content_length?: number;
    quality?: string;
    quality_label?: string;
    fps?: number;
    url?: string;
    cipher?: string;
    signature_cipher?: string;
    audio_quality?: string;
    audio_track?: {
        audio_is_default: boolean;
        display_name: string;
        id: string;
    };
    approx_duration_ms: number;
    audio_sample_rate?: number;
    audio_channels?: number;
    loudness_db?: number;
    has_audio: boolean;
    has_video: boolean;
    language?: string | null;
    is_dubbed?: boolean;
    is_descriptive?: boolean;
    is_original?: boolean;
    color_info?: {
        primaries?: string;
        transfer_characteristics?: string;
        matrix_coefficients?: string;
    };
    constructor(data: RawNode);
    /**
     * Deciphers the streaming url of the format.
     * @returns Deciphered URL.
     */
    decipher(player: Player | undefined): string;
}
