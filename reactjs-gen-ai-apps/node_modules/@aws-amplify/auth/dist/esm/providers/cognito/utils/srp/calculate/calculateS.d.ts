import { AuthBigInteger } from '../BigInteger';
/**
 * @internal
 */
export declare const calculateS: ({ a, g, k, x, B, N, U, }: {
    a: AuthBigInteger;
    g: AuthBigInteger;
    k: AuthBigInteger;
    x: AuthBigInteger;
    B: AuthBigInteger;
    N: AuthBigInteger;
    U: AuthBigInteger;
}) => Promise<AuthBigInteger>;
