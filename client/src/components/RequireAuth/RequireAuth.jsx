import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import routes from '../../routes';
import useAuth from './useAuth';

const RequireAuth = () => {
  const { user, isLoading } = useAuth();
  console.log('🚀 ~ file: RequireAuth.jsx ~ line 9 ~ RequireAuth ~ user', user);
  const location = useLocation();

  if (isLoading)
    return (
      <Box sx={{ height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  return user?.email ? <Outlet /> : <Navigate to={routes.signIn} state={{ from: location }} replace />;
};

export default RequireAuth;
