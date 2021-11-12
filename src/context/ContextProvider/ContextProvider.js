import React, { createContext } from 'react';
import useFirebase from './../../Firebase/useFirebase';

export const AllContext = createContext();

const ContextProvider = ({ children }) => {
    const contexts = useFirebase();
    return (
        <div>
            <AllContext.Provider value={contexts} >
                {children}
            </AllContext.Provider>
        </div>
    );
};

export default ContextProvider;