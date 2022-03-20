import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const ChildProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const getMe = async () => {
    // setLoading(true);
    try {
      const { data } = await axios.get('/api/auth/me', { withCredentials: true });
      setUser(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMe();
  }, [isLoading]);

  return <UserContext.Provider value={{ user, isLoading, refresh: getMe }}>{children}</UserContext.Provider>;
};
