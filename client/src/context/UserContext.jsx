import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

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

  return <UserContext.Provider value={{ user, isLoading, setLoading, setUser }}>{children}</UserContext.Provider>;
};
