import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes({ isAuthenticated }) {
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/welcome" />;
}

export default PublicRoutes;
