import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ isAuthenticated }) {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login/freelancer" />;
}

export default PrivateRoutes;
