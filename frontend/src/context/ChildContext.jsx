import React, { createContext, useState } from "react";

export const ChildContext = createContext();

export const ChildProvider = ({ children }) => {
    const [kids, setKids]=useState(
        [
            {name:'hania', age: '1.5', weight: '11', height: '98', gender: 'female', dob: '2020-07-07'},
            {name:'czesiu', age: '5', weight: '25', height: '115', gender: 'male', dob: '1987-11-25'}
        ]);
    return (
        <ChildContext.Provider value={{kids, setKids}}>
            {children}
        </ChildContext.Provider>
    );
};
