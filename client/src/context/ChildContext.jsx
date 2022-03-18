import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ChildContext = createContext();

export const ChildProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get('/api/auth/me', { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [isLoading]);

  console.log('user in ctx', user);
  return <ChildContext.Provider value={{ user, isLoading, setLoading }}>{children}</ChildContext.Provider>;
};
