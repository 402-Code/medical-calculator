import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import routes from '../../routes';
import useAuth from './useAuth';

const RequireAuth = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user?.email ? <Outlet /> : <Navigate to={routes.signIn} state={{ from: location }} replace />;
};

export default RequireAuth;
