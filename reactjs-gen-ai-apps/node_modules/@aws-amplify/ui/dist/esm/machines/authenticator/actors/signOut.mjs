import { createMachine } from 'xstate';
import { signOut } from 'aws-amplify/auth';

const signOutActor = () => {
    return createMachine({
        initial: 'pending',
        id: 'signOutActor',
        predictableActionArguments: true,
        states: {
            pending: {
                tags: 'pending',
                invoke: {
                    src: 'signOut',
                    onDone: 'resolved',
                    onError: 'rejected',
                },
            },
            resolved: { type: 'final' },
            rejected: { type: 'final' },
        },
    }, {
        services: {
            signOut: () => signOut(),
        },
    });
};

export { signOutActor };
