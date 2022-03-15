import { createContext, useContext } from 'react';
// import AuthContext from kontekst usera

// mocks ------------
const AuthContext = createContext({ auth: { user: 'jakis' } });
// -------------------

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
