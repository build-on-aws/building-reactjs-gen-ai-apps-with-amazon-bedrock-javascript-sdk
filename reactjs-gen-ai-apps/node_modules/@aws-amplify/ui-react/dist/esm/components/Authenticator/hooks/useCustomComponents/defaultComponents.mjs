import { SignIn } from '../../SignIn/SignIn.mjs';
import { SignUp } from '../../SignUp/SignUp.mjs';
import { ConfirmSignUp } from '../../ConfirmSignUp/ConfirmSignUp.mjs';
import { ForceNewPassword } from '../../ForceNewPassword/ForceNewPassword.mjs';
import { SetupTotp } from '../../SetupTotp/SetupTotp.mjs';
import { ConfirmSignIn } from '../../ConfirmSignIn/ConfirmSignIn.mjs';
import { ConfirmVerifyUser } from '../../VerifyUser/ConfirmVerifyUser.mjs';
import { VerifyUser } from '../../VerifyUser/VerifyUser.mjs';
import { ConfirmResetPassword } from '../../ForgotPassword/ConfirmResetPassword.mjs';
import { ForgotPassword } from '../../ForgotPassword/ForgotPassword.mjs';

const defaultComponents = {
    // @ts-ignore
    Header: () => null,
    SignIn: {
        Header: SignIn.Header,
        Footer: SignIn.Footer,
    },
    SignUp: {
        Header: SignUp.Header,
        FormFields: SignUp.FormFields,
        Footer: SignUp.Footer,
    },
    ConfirmSignUp: {
        Header: ConfirmSignUp.Header,
        Footer: ConfirmSignUp.Footer,
    },
    SetupTotp: {
        Header: SetupTotp.Header,
        Footer: SetupTotp.Footer,
    },
    ConfirmResetPassword: {
        Header: ConfirmResetPassword.Header,
        Footer: ConfirmResetPassword.Footer,
    },
    ConfirmSignIn: {
        Header: ConfirmSignIn.Header,
        Footer: ConfirmSignIn.Footer,
    },
    VerifyUser: {
        Header: VerifyUser.Header,
        Footer: VerifyUser.Footer,
    },
    ConfirmVerifyUser: {
        Header: ConfirmVerifyUser.Header,
        // @ts-ignore
        Footer: ConfirmVerifyUser.Footer,
    },
    ForceNewPassword: {
        Header: ForceNewPassword.Header,
        Footer: ForceNewPassword.Footer,
        FormFields: ForceNewPassword.FormFields,
    },
    ForgotPassword: {
        Header: ForgotPassword.Header,
        Footer: ForgotPassword.Footer,
    },
    // @ts-ignore
    Footer: () => null,
};

export { defaultComponents };
