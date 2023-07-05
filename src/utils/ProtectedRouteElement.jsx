import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ component: Component, ...props }) => {
  return props.isLoggedIn ? <Component {...props} replace /> : <Navigate to="/" replace />;
};

export default ProtectedRouteElement;
