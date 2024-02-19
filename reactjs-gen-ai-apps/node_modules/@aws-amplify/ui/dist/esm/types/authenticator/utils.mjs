import { UnverifiedContactMethodType } from './user.mjs';

const isUnverifiedContactMethodType = (value) => Object.values(UnverifiedContactMethodType).findIndex((val) => val === value) >= 0;

export { isUnverifiedContactMethodType };
