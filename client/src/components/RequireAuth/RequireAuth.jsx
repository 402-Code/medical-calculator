import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import routes from '../../routes';
import useAuth from './useAuth';

const RequireAuth = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <CircularProgress />;
  console.log(user);
  return user?.email ? <Outlet /> : <Navigate to={routes.signIn} state={{ from: location }} replace />;
};

export default RequireAuth;
