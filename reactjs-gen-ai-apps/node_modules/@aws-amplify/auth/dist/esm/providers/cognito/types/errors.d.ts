export declare enum AssociateSoftwareTokenException {
    ConcurrentModificationException = "ConcurrentModificationException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceNotFoundException = "ResourceNotFoundException",
    SoftwareTokenMFANotFoundException = "SoftwareTokenMFANotFoundException"
}
export declare enum ChangePasswordException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    InvalidPasswordException = "InvalidPasswordException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum ConfirmDeviceException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidPasswordException = "InvalidPasswordException",
    InvalidUserPoolConfigurationException = "InvalidUserPoolConfigurationException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UsernameExistsException = "UsernameExistsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum ConfirmForgotPasswordException {
    CodeMismatchException = "CodeMismatchException",
    ExpiredCodeException = "ExpiredCodeException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidPasswordException = "InvalidPasswordException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyFailedAttemptsException = "TooManyFailedAttemptsException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum ConfirmSignUpException {
    AliasExistsException = "AliasExistsException",
    CodeMismatchException = "CodeMismatchException",
    ExpiredCodeException = "ExpiredCodeException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyFailedAttemptsException = "TooManyFailedAttemptsException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum DeleteUserAttributesException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum DeleteUserException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum ForgetDeviceException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    InvalidUserPoolConfigurationException = "InvalidUserPoolConfigurationException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum ForgotPasswordException {
    CodeDeliveryFailureException = "CodeDeliveryFailureException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidEmailRoleAccessPolicyException = "InvalidEmailRoleAccessPolicyException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidSmsRoleAccessPolicyException = "InvalidSmsRoleAccessPolicyException",
    InvalidSmsRoleTrustRelationshipException = "InvalidSmsRoleTrustRelationshipException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum GetUserException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum GetIdException {
    ExternalServiceException = "ExternalServiceException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceConflictException = "ResourceConflictException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException"
}
export declare enum GetCredentialsForIdentityException {
    ExternalServiceException = "ExternalServiceException",
    InternalErrorException = "InternalErrorException",
    InvalidIdentityPoolConfigurationException = "InvalidIdentityPoolConfigurationException",
    InvalidParameterException = "InvalidParameterException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceConflictException = "ResourceConflictException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException"
}
export declare enum GetUserAttributeVerificationException {
    CodeDeliveryFailureException = "CodeDeliveryFailureException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidEmailRoleAccessPolicyException = "InvalidEmailRoleAccessPolicyException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidSmsRoleAccessPolicyException = "InvalidSmsRoleAccessPolicyException",
    InvalidSmsRoleTrustRelationshipException = "InvalidSmsRoleTrustRelationshipException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum GlobalSignOutException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException"
}
export declare enum InitiateAuthException {
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidSmsRoleAccessPolicyException = "InvalidSmsRoleAccessPolicyException",
    InvalidSmsRoleTrustRelationshipException = "InvalidSmsRoleTrustRelationshipException",
    InvalidUserPoolConfigurationException = "InvalidUserPoolConfigurationException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum ResendConfirmationException {
    CodeDeliveryFailureException = "CodeDeliveryFailureException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidEmailRoleAccessPolicyException = "InvalidEmailRoleAccessPolicyException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidSmsRoleAccessPolicyException = "InvalidSmsRoleAccessPolicyException",
    InvalidSmsRoleTrustRelationshipException = "InvalidSmsRoleTrustRelationshipException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum RespondToAuthChallengeException {
    AliasExistsException = "AliasExistsException",
    CodeMismatchException = "CodeMismatchException",
    ExpiredCodeException = "ExpiredCodeException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidPasswordException = "InvalidPasswordException",
    InvalidSmsRoleAccessPolicyException = "InvalidSmsRoleAccessPolicyException",
    InvalidSmsRoleTrustRelationshipException = "InvalidSmsRoleTrustRelationshipException",
    InvalidUserPoolConfigurationException = "InvalidUserPoolConfigurationException",
    MFAMethodNotFoundException = "MFAMethodNotFoundException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    SoftwareTokenMFANotFoundException = "SoftwareTokenMFANotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum SetUserMFAPreferenceException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum SignUpException {
    CodeDeliveryFailureException = "CodeDeliveryFailureException",
    InternalErrorException = "InternalErrorException",
    InvalidEmailRoleAccessPolicyException = "InvalidEmailRoleAccessPolicyException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidPasswordException = "InvalidPasswordException",
    InvalidSmsRoleAccessPolicyException = "InvalidSmsRoleAccessPolicyException",
    InvalidSmsRoleTrustRelationshipException = "InvalidSmsRoleTrustRelationshipException",
    NotAuthorizedException = "NotAuthorizedException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UsernameExistsException = "UsernameExistsException"
}
export declare enum UpdateUserAttributesException {
    AliasExistsException = "AliasExistsException",
    CodeDeliveryFailureException = "CodeDeliveryFailureException",
    CodeMismatchException = "CodeMismatchException",
    ExpiredCodeException = "ExpiredCodeException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidEmailRoleAccessPolicyException = "InvalidEmailRoleAccessPolicyException",
    InvalidLambdaResponseException = "InvalidLambdaResponseException",
    InvalidParameterException = "InvalidParameterException",
    InvalidSmsRoleAccessPolicyException = "InvalidSmsRoleAccessPolicyException",
    InvalidSmsRoleTrustRelationshipException = "InvalidSmsRoleTrustRelationshipException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UnexpectedLambdaException = "UnexpectedLambdaException",
    UserLambdaValidationException = "UserLambdaValidationException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum VerifySoftwareTokenException {
    CodeMismatchException = "CodeMismatchException",
    EnableSoftwareTokenMFAException = "EnableSoftwareTokenMFAException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    InvalidUserPoolConfigurationException = "InvalidUserPoolConfigurationException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    SoftwareTokenMFANotFoundException = "SoftwareTokenMFANotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum VerifyUserAttributeException {
    AliasExistsException = "AliasExistsException",
    CodeMismatchException = "CodeMismatchException",
    ExpiredCodeException = "ExpiredCodeException",
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    LimitExceededException = "LimitExceededException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum UpdateDeviceStatusException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    InvalidUserPoolConfigurationException = "InvalidUserPoolConfigurationException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare enum ListDevicesException {
    ForbiddenException = "ForbiddenException",
    InternalErrorException = "InternalErrorException",
    InvalidParameterException = "InvalidParameterException",
    InvalidUserPoolConfigurationException = "InvalidUserPoolConfigurationException",
    NotAuthorizedException = "NotAuthorizedException",
    PasswordResetRequiredException = "PasswordResetRequiredException",
    ResourceNotFoundException = "ResourceNotFoundException",
    TooManyRequestsException = "TooManyRequestsException",
    UserNotConfirmedException = "UserNotConfirmedException",
    UserNotFoundException = "UserNotFoundException"
}
export declare const SETUP_TOTP_EXCEPTION = "SetUpTOTPException";
