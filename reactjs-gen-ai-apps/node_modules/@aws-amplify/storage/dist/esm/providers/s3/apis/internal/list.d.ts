import { AmplifyClassV6 } from '@aws-amplify/core';
import { ListAllInput, ListPaginateInput, ListAllOutput, ListPaginateOutput } from '../../types';
export declare const list: (amplify: AmplifyClassV6, input?: ListAllInput | ListPaginateInput) => Promise<ListAllOutput | ListPaginateOutput>;
