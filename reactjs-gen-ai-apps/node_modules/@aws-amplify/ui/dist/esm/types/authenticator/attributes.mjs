/** Array of auth fields that we supply defaults with */
const signUpFieldsWithDefault = [
    'birthdate',
    'email',
    'family_name',
    'given_name',
    'middle_name',
    'name',
    'nickname',
    'phone_number',
    'preferred_username',
    'profile',
    'website',
];
/** Array of auth fields that we do not supply defaults with */
const signUpFieldsWithoutDefault = [
    'address',
    'gender',
    'locale',
    'picture',
    'updated_at',
    'zoneinfo',
];
/** Array of known login mechanisms */
const LoginMechanismArray = [
    'username',
    'email',
    'phone_number',
];
const authFieldsWithDefaults = [
    ...LoginMechanismArray,
    ...signUpFieldsWithDefault,
    'confirmation_code',
    'password',
    'confirm_password',
];
const isAuthFieldsWithDefaults = (field) => {
    return authFieldsWithDefaults.includes(field);
};

export { LoginMechanismArray, authFieldsWithDefaults, isAuthFieldsWithDefaults, signUpFieldsWithDefault, signUpFieldsWithoutDefault };
