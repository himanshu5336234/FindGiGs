import { lazy } from "react";
import RouteConstant from "../constants";

export const OnboardRoutes = [
    {
        path: RouteConstant.WELCOME,
        element: lazy(() => import("../../pages/WelcomePage")),
    },
    {
        path: RouteConstant.NON_MEMBER,
        element: lazy(() =>
            import("../../components/Freelancer/nonMember/nonMember")
        ),
    },
    {
        path: RouteConstant.ONBOARDING,
        element: lazy(() => import("../../pages/OnboardingPage")),
    },
    {
        path: RouteConstant.ONBOARDING_SUCCESS,
        element: lazy(() => import("../../pages/OnboardSuccessPage")),
    },
    {
        path: RouteConstant.AGENCY,
        element: lazy(() =>
            import("../../components/Freelancer/Agency/AgencyHomepage")
        ),
    },
    {
        path: RouteConstant.AGENCY_DETAILS,
        element: lazy(() =>
            import("../../components/Freelancer/Agency/AgencyDetail")
        ),
    },
];
