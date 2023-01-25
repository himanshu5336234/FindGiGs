import { AuthRoutes } from "./Auth";
import { OnboardRoutes } from "./Onboard";

export const PublicRoutesArray = [...AuthRoutes];
export const PrivateRoutesArray = [...OnboardRoutes];
