export declare const completeOAuthFlow: ({ currentUrl, userAgentValue, clientId, redirectUri, responseType, domain, preferPrivateSession, }: {
    currentUrl: string;
    userAgentValue: string;
    clientId: string;
    redirectUri: string;
    responseType: string;
    domain: string;
    preferPrivateSession?: boolean | undefined;
}) => Promise<void>;
