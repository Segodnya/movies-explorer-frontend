import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ component: Component, ...props }) => {
  console.log(props);
  const isUserLoaded = props.isLoggedIn || !props.isLoading;

  return props.isLoggedIn ? (
    isUserLoaded && <Component {...props} replace />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedRouteElement;
