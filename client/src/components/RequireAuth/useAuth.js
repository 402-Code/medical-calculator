import { useContext } from 'react';
import { ChildContext } from '../../context/ChildContext';

const useAuth = () => {
  return useContext(ChildContext);
};

export default useAuth;
