import React, { createContext, useState } from "react";

export const ChildContext = createContext();

export const ChildProvider = ({ children }) => {
    const [kids, setKids]=useState([{name:'hania', age: 1.5, weight: 11}])
    const store ={ kids, setKids}
    return (
        <ChildContext.Provider value={{kids, setKids}}>
            {children}
        </ChildContext.Provider>
    );
};