import { lazy } from "react";
import RouteConstant from "../constants";
export const DashboardRoutes = [
    {
        path: RouteConstant.HOME,
        element: lazy(() => import("../../pages/DashboardPage")),
    },
];
const userType = localStorage.getItem("type");
export const NestedDashboardRoutes = [
    {
        index: true,
        path: RouteConstant.HOME,
        element: lazy(() => import("../../components/Home")),
    },
    {
        index: true,
        path: RouteConstant.NON_MEMBER,
        element: lazy(() =>
            import("../../components/Freelancer/nonMember/nonMember")
        ),
    },
    {
        index: true,
        path: RouteConstant.DASHBOARD,
        element: lazy(() => import("../../components/Freelancer/ActiveUser")),
    },
    {
        index: false,

        path: RouteConstant.MY_PROFILE,

        element: lazy(() =>
            import("../../components/Freelancer/Profile/index")
        ),
    },

    {
        index: false,
        path: RouteConstant.EDIT_PROFILE,
        element: lazy(() =>
            import("../../components/Freelancer/Profile/EditProfile")
        ),
    },

    {
        index: true,
        path: RouteConstant.EXPLORE_GIGS,
        element: lazy(() =>
            import("../../components/Freelancer/GigList/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.GIG_TEMPLATE,
        element: lazy(() =>
            import("../../components/Enterprise/ChooseTemplate")
        ),
    },
    {
        index: false,
        path: RouteConstant.CREATE_GIG,
        element: lazy(() => import("../../components/Enterprise/CreateGig")),
    },
    {
        index: false,
        path: RouteConstant.REVIEW_GIG_DETAILS,
        element: lazy(() =>
            import("../../components/Enterprise/ReviewGigDetails")
        ),
    },
    {
        index: false,
        path: RouteConstant.MILESTONE_DETAILS,
        element: lazy(() =>
            import("../../components/Enterprise/Milestone/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.EXPLORE_TALENT,
        element: lazy(() =>
            import("../../components/Enterprise/ExploreTalent/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.GIG_MILESTONE + "/:gigId",
        element: lazy(() =>
            import("../../components/Enterprise/Milestone/MilestoneHomepage")
        ),
    },
    {
        index: false,
        path: RouteConstant.FREELANCER_PROFILE + "/:id",
        element: lazy(() =>
            import("../../components/Enterprise/FreelancerProfile/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.BIDS_AND_OFFERS,
        element: lazy(() =>
            userType !== "freelancer"
                ? import("../../components/Enterprise/BidsAndOffers/index")
                : import("../../components/Freelancer/BidsAndOffers/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.BIDS_AND_OFFERS_DETAILS + "/:id",
        element: lazy(() =>
            import("../../components/Freelancer/BidsAndOffersDetail/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.GIG_STATUS,
        element: lazy(() =>
            userType !== "freelancer"
                ? import("../../components/Enterprise/GigStatus/index")
                : import("../../components/Freelancer/GigStatus/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.GIG_DETAILS + "/:id",
        element: lazy(() =>
            userType !== "freelancer"
                ? import("../../components/Enterprise/GigDetail/index")
                : import("../../components/Freelancer/GigDetail/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.MILESTONE_TIMELINE,
        element: lazy(() =>
            userType !== "freelancer"
                ? import("../../components/Enterprise/GigDetail/index")
                : import(
                      "../../components/Freelancer/GigStatus/MilestoneTimeline"
                  )
        ),
    },
    {
        index: false,
        path: RouteConstant.ACCOUNT_SETTINGS,
        element: lazy(() =>
            userType !== "freelancer"
                ? import("../../components/Enterprise/AccountSettings/index")
                : import("../../components/Freelancer/AccountSettings/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.INVOICES,
        element: lazy(() =>
            import("../../components/Enterprise/Invoices/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.SEARCH_RESULTS + "/:search",
        element: lazy(() =>
            import("../../components/Enterprise/Search/SearchResults")
        ),
    },
    {
        index: false,
        path: RouteConstant.REVIEWS_AND_RATINGS,
        element: lazy(() =>
            import("../../components/Enterprise/ReviewsAndRatings/index")
        ),
    },
    {
        index: false,
        path: RouteConstant.PAYMENTS,
        element: lazy(() =>
            import("../../components/Freelancer/Payments/index")
        ),
    },
];
