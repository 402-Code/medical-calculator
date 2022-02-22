import React, { createContext, useState } from 'react';
import TEMP_KIDS from '../components/mocks/tempKids';

export const ChildContext = createContext();

export const ChildProvider = ({ children }) => {
  const [kids, setKids] = useState(TEMP_KIDS);
  return <ChildContext.Provider value={{ kids, setKids }}>{children}</ChildContext.Provider>;
};
