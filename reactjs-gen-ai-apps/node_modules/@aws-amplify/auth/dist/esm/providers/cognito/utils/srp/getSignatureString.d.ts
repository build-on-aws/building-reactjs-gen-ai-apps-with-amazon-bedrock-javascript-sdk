import { SourceData } from '@smithy/types';
export declare const getSignatureString: ({ userPoolName, username, challengeParameters, dateNow, hkdf, }: {
    userPoolName: string;
    username: string;
    challengeParameters: Record<string, any>;
    dateNow: string;
    hkdf: SourceData;
}) => string;
