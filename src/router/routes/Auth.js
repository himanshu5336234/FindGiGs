import { lazy } from "react";
import RouteConstant from "../constants";

export const AuthRoutes = [
  {
    path: RouteConstant.ENTERPRISE_LOGIN,
    type: "enterprise",
    element: lazy(() => import("../../pages/LoginPage")),
  },
  {
    path: RouteConstant.ENTERPRISE_SIGNUP,
    type: "enterprise",
    element: lazy(() => import("../../pages/SignUpPage")),
  },
  {
    path: RouteConstant.FREELANCER_LOGIN,
    type: "freelancer",
    element: lazy(() => import("../../pages/LoginPage")),
  },
  {
    path: RouteConstant.FREELANCER_SIGNUP,
    type: "freelancer",
    element: lazy(() => import("../../pages/SignUpPage")),
  },
];
