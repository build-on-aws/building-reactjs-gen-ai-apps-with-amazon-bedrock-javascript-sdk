import { AmplifyErrorMap, AssertionFunction } from '../types';
import { AmplifyError } from './AmplifyError';
export declare const createAssertionFunction: (errorMap: AmplifyErrorMap, AssertionError?: typeof AmplifyError) => AssertionFunction;
