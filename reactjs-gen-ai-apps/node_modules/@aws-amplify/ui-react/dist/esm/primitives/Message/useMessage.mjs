import * as React from 'react';

const MessageContext = React.createContext({
    dismissed: false,
    setDismissed: () => { },
});
const useMessage = () => React.useContext(MessageContext);

export { MessageContext, useMessage };
