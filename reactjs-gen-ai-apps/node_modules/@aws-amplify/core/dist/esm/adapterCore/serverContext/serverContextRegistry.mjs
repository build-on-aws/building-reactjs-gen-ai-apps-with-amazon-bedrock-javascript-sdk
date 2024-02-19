// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const storage = new WeakMap();
function createToken() {
    return {
        value: Symbol('AmplifyServerContextToken'),
    };
}
const serverContextRegistry = {
    register(context) {
        const token = createToken();
        storage.set(token, context);
        return { token };
    },
    deregister(contextSpec) {
        return storage.delete(contextSpec.token);
    },
    get(contextSpec) {
        return storage.get(contextSpec.token);
    },
};

export { serverContextRegistry };
//# sourceMappingURL=serverContextRegistry.mjs.map
