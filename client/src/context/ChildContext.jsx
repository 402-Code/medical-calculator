import React, { createContext, useState } from 'react';
// import TEMP_KIDS from '../components/mocks/tempKids';

export const ChildContext = createContext();

export const ChildProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log('user in ctx', user);
  return <ChildContext.Provider value={{ user, setUser }}>{children}</ChildContext.Provider>;
};
