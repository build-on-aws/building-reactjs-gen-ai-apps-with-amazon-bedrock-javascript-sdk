type ChangePasswordInput = {
    currentPassword: string;
    newPassword: string;
};
export declare const changePassword: ({ currentPassword, newPassword, }: ChangePasswordInput) => Promise<void>;
export declare const deleteUser: () => Promise<void>;
export {};
