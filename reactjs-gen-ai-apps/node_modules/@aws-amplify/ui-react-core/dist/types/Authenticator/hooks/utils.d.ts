import { AuthenticatorRoute } from '@aws-amplify/ui';
import { AuthenticatorRouteComponentKey, Defaults, Overrides } from './types';
export declare const isComponentRouteKey: (route: AuthenticatorRoute) => route is AuthenticatorRouteComponentKey;
export declare function resolveAuthenticatorComponents<FieldType>(defaults: Defaults<FieldType>, overrides?: Overrides<FieldType>): Defaults<FieldType>;
