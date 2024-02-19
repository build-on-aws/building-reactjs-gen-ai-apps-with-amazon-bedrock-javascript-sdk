/** Federated IDPs that Authenticator supports */
var FederatedIdentityProviders;
(function (FederatedIdentityProviders) {
    FederatedIdentityProviders["Apple"] = "Apple";
    FederatedIdentityProviders["Amazon"] = "Amazon";
    FederatedIdentityProviders["Facebook"] = "Facebook";
    FederatedIdentityProviders["Google"] = "Google";
})(FederatedIdentityProviders || (FederatedIdentityProviders = {}));
/**
 * Cognito user contact method types that have not been verified as valid
 */
var UnverifiedContactMethodType;
(function (UnverifiedContactMethodType) {
    UnverifiedContactMethodType["Email"] = "email";
    UnverifiedContactMethodType["PhoneNumber"] = "phone_number";
})(UnverifiedContactMethodType || (UnverifiedContactMethodType = {}));

export { FederatedIdentityProviders, UnverifiedContactMethodType };
