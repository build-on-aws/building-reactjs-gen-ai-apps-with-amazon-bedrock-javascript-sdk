import * as React from 'react';

const DropZoneContext = React.createContext('inactive');
const DropZoneProvider = ({ value, children, }) => {
    return (React.createElement(DropZoneContext.Provider, { value: value }, children));
};

export { DropZoneContext, DropZoneProvider };
