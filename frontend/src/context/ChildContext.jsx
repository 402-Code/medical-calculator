import React, { createContext, useState } from "react";

export const ChildContext = createContext();

export const ChildProvider = ({ children }) => {
    const [kids, setKids]=useState([{name:'hania', age: '1.5', weight: '11', height: '98', bmi:21, gender: 'female'}]);
    return (
        <ChildContext.Provider value={{kids, setKids}}>
            {children}
        </ChildContext.Provider>
    );
};
