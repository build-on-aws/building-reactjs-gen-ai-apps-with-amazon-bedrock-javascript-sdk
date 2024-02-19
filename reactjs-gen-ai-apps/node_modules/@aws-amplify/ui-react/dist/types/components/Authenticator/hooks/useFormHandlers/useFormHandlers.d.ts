import * as React from 'react';
export declare function useFormHandlers(): {
    handleBlur: (event: React.FocusEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLFormElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
