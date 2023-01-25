import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import enterpriseOnboarding from "./onboarding/enterpriseOnboardSlice";
import freelancerOnboarding from "./onboarding/freelancerOnboardSlice";
import gigsEnterprise from "./enterprise/gigsEnterpriseSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import createGig from "./enterprise/createGigSlice";
import reviewsAndPayments from "./enterprise/reviewsAndPaymentSlice";
import gigs from "./freelancer/gigsSlice";
import searchGig from "./search/gigSearchSlice";
const reducers = combineReducers({
  auth: authReducer,
enterprise: enterpriseOnboarding,
  freelancer: freelancerOnboarding,
  createGig: createGig,
  gigs: gigs,
  gigsEnterprise,
  reviewsAndPayments,
  searchGig,
});
// whitelist
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth", "createGig"], // only auth will be persisted
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default store;
