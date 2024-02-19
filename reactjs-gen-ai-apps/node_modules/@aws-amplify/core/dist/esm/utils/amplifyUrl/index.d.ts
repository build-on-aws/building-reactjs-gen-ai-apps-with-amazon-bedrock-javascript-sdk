declare const AmplifyUrl: {
    new (url: string | URL, base?: string | URL | undefined): URL;
    prototype: URL;
    createObjectURL(obj: Blob | MediaSource): string;
    revokeObjectURL(url: string): void;
};
declare const AmplifyUrlSearchParams: {
    new (init?: string | Record<string, string> | URLSearchParams | string[][] | undefined): URLSearchParams;
    prototype: URLSearchParams;
    toString(): string;
};
export { AmplifyUrl, AmplifyUrlSearchParams };
