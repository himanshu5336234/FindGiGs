import { createSlice } from "@reduxjs/toolkit";
import {
  addCompanyDetails,
  addIndustrySector,
  addIntroduction,
  getEnterprisedata,
} from "../../api/enterprise/onboardAPIs";

const initialState = {
  userData: "",
  isLoading: false,
};

const enterpriseOnboardingSlice = createSlice({
  name: "enterpriseOnboarding",
  initialState,
  reducers: {},
  extraReducers: {
    [getEnterprisedata.pending]: (state) => {
      state.isLoading = true;
    },
    [getEnterprisedata.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    },
    [getEnterprisedata.rejected]: (state) => {
      state.isLoading = false;
    },
    [addIntroduction.pending]: (state) => {
      state.isLoading = true;
    },
    [addIntroduction.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addIntroduction.rejected]: (state) => {
      state.isLoading = false;
    },
    [addCompanyDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [addCompanyDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addCompanyDetails.rejected]: (state) => {
      state.isLoading = false;
    },
    [addIndustrySector.pending]: (state) => {
      state.isLoading = true;
    },
    [addIndustrySector.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [addIndustrySector.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export const { setToken } = freelancerOnboardingSlice.actions;

export default enterpriseOnboardingSlice.reducer;
