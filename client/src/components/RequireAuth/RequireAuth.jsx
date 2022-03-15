import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { routes } from '../../routes';
import useAuth from './useAuth';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.user ? <Outlet /> : <Navigate to={routes.signIn} state={{ from: location }} replace />;
};

export default RequireAuth;
