import { createMachine, sendUpdate } from 'xstate';
import { sendUserAttributeVerificationCode, confirmUserAttribute } from 'aws-amplify/auth';
import { runValidators } from '../../../validators/index.mjs';
import ACTIONS from '../actions.mjs';
import { defaultServices } from '../defaultServices.mjs';

function verifyUserAttributesActor() {
    return createMachine({
        id: 'verifyUserAttributesActor',
        initial: 'selectUserAttributes',
        predictableActionArguments: true,
        states: {
            selectUserAttributes: {
                initial: 'edit',
                exit: ['clearError', 'clearTouched', 'sendUpdate'],
                states: {
                    edit: {
                        entry: 'sendUpdate',
                        on: {
                            SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                            SKIP: { target: '#verifyUserAttributesActor.resolved' },
                            CHANGE: { actions: 'handleInput' },
                        },
                    },
                    submit: {
                        tags: 'pending',
                        entry: ['clearError', 'sendUpdate'],
                        invoke: {
                            src: 'sendUserAttributeVerificationCode',
                            onDone: {
                                actions: [
                                    'setSelectedUserAttribute',
                                    'setCodeDeliveryDetails',
                                ],
                                target: '#verifyUserAttributesActor.confirmVerifyUserAttribute',
                            },
                            onError: {
                                actions: 'setRemoteError',
                                target: 'edit',
                            },
                        },
                    },
                },
            },
            confirmVerifyUserAttribute: {
                initial: 'edit',
                exit: ['clearError', 'clearFormValues', 'clearTouched'],
                states: {
                    edit: {
                        entry: 'sendUpdate',
                        on: {
                            SUBMIT: { actions: 'handleSubmit', target: 'submit' },
                            SKIP: '#verifyUserAttributesActor.resolved',
                            CHANGE: { actions: 'handleInput' },
                        },
                    },
                    submit: {
                        tags: 'pending',
                        entry: ['clearError', 'sendUpdate'],
                        invoke: {
                            src: 'confirmVerifyUserAttribute',
                            onDone: {
                                actions: [
                                    'setConfirmAttributeCompleteStep',
                                    'clearSelectedUserAttribute',
                                ],
                                target: '#verifyUserAttributesActor.resolved',
                            },
                            onError: {
                                actions: 'setRemoteError',
                                target: 'edit',
                            },
                        },
                    },
                },
            },
            resolved: { type: 'final', data: ({ step }) => ({ step }) },
        },
    }, {
        // sendUpdate is a HOC
        actions: { ...ACTIONS, sendUpdate: sendUpdate() },
        services: {
            sendUserAttributeVerificationCode({ formValues: { unverifiedAttr } }) {
                const input = {
                    userAttributeKey: unverifiedAttr,
                };
                return sendUserAttributeVerificationCode(input);
            },
            async confirmVerifyUserAttribute({ formValues: { confirmation_code: confirmationCode }, selectedUserAttribute, }) {
                const input = {
                    confirmationCode,
                    userAttributeKey: selectedUserAttribute,
                };
                return confirmUserAttribute(input);
            },
            async validateFields(context) {
                return runValidators(context.formValues, context.touched, context.passwordSettings, [
                    defaultServices.validateFormPassword,
                    defaultServices.validateConfirmPassword,
                ]);
            },
        },
    });
}

export { verifyUserAttributesActor };
