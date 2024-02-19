export declare const resolveCachedSession: () => Promise<{
    sessionId: string;
    userId: string | undefined;
}>;
export declare const updateCachedSession: (newUserId?: string, currentSessionId?: string, currentUserId?: string) => void;
