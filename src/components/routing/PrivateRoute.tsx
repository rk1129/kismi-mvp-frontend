import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "../auth/authSlice";

const PrivateRoute = ({ Component }: { Component: React.FC }) => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated) return <Component />;
  return <Navigate to={"/auth/login"} replace={true} />;
};

export default PrivateRoute;
