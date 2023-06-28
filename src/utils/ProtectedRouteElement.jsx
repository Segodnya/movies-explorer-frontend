import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ component: Component, ...props }) => {
  console.log(props);
  return props.isLoggedIn ? (
    <Component {...props} replace />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRouteElement;
