import { updatePassword, deleteUser as deleteUser$1 } from 'aws-amplify/auth';
import { getLogger } from '../utils.mjs';

const logger = getLogger('Auth');
const changePassword = async ({ currentPassword, newPassword, }) => {
    try {
        logger.debug('calling Auth.updatePassword');
        await updatePassword({
            oldPassword: currentPassword,
            newPassword,
        });
        logger.debug('Auth.updatePassword was successful');
        return Promise.resolve();
    }
    catch (e) {
        logger.debug('Auth.updatePassword failed with error', e);
        return Promise.reject(e);
    }
};
const deleteUser = async () => {
    try {
        logger.debug('calling Auth.deleteUser');
        await deleteUser$1();
        logger.debug('Auth.deleteUser was successful');
        return Promise.resolve();
    }
    catch (e) {
        logger.debug('Auth.deleteUser failed with error', e);
        return Promise.reject(e);
    }
};

export { changePassword, deleteUser };
