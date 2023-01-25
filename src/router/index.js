import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/404";
import LandingPage from "../pages/LandingPage";
import { isLogin } from "../utils/isLogin";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { PrivateRoutesArray, PublicRoutesArray } from "./routes";
import { DashboardRoutes, NestedDashboardRoutes } from "./routes/Dashboard";

const RoutePaths = () => {
  // const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes isAuthenticated={isLogin} />}>
        {PrivateRoutesArray.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        {DashboardRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />}>
            {NestedDashboardRoutes.map((route) => (
              <Route
                index={route.index}
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Route>
        ))}
      </Route>

      {/* Public routes are stated below */}
      <Route path="/" element={<PublicRoutes isAuthenticated={isLogin} />}>
        <Route element={<LandingPage />} index></Route>
        {PublicRoutesArray.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element type={route.type} />}
          />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export default RoutePaths;
