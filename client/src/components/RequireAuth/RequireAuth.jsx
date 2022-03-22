import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import routes from '../../routes';
import useAuth from './useAuth';
import LoadingInProcess from '../LoadingInProcess/LoadingInProcess';

const RequireAuth = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <LoadingInProcess />;
  return user?.email ? <Outlet /> : <Navigate to={routes.signIn} state={{ from: location }} replace />;
};

export default RequireAuth;
