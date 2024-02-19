/**
 * This class is intended to be deprecated and replaced by `signRequest` and `presignUrl` functions from
 * `clients/middleware/signing/signer/signatureV4`.
 *
 * TODO: refactor the logics here into `signRequest` and `presignUrl` functions and remove this class.
 *
 * @internal
 * @deprecated
 */
export declare class Signer {
    /**
    * Sign a HTTP request, add 'Authorization' header to request param
    * @method sign
    * @memberof Signer
    * @static
    *
    * @param {object} request - HTTP request object
    <pre>
    request: {
        method: GET | POST | PUT ...
        url: ...,
        headers: {
            header1: ...
        },
        data: data
    }
    </pre>
    * @param {object} access_info - AWS access credential info
    <pre>
    access_info: {
        access_key: ...,
        secret_key: ...,
        session_token: ...
    }
    </pre>
    * @param {object} [service_info] - AWS service type and region, optional,
    *                                  if not provided then parse out from url
    <pre>
    service_info: {
        service: ...,
        region: ...
    }
    </pre>
    *
    * @returns {object} Signed HTTP request
    */
    static sign(request: {
        headers: any;
        body?: BodyInit;
        data?: any;
        url: string;
        method: string;
    }, accessInfo: {
        access_key: string;
        secret_key: string;
        session_token: string;
    }, serviceInfo: {
        service: string;
        region: string;
    }): any;
    static signUrl(urlToSign: string, accessInfo: any, serviceInfo?: any, expiration?: number): string;
    static signUrl(request: any, accessInfo: any, serviceInfo?: any, expiration?: number): string;
}
