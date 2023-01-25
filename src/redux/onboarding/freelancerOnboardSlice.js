import { createSlice } from "@reduxjs/toolkit";
import {
    addBio,
    addExperience,
    addIntroduction,
    addRole,
    addSkills,
    addWageRate,
    getFreelancerdata,
    addAgencyDetails,
    getAccountSetting,
    postchangemail,
    emailvarifyOtp,
    resetPassword,
} from "../../api/freelancer/onboardAPIs";
const initialState = {
    userData: "",
    isLoading: false,
    isOtpSend: false,
    isOtpVerify: false,
    isResetPassword: false,
};
const freelancerOnboardingSlice = createSlice({
    name: "freelancerOnboarding",
    initialState,
    reducers: {},
    extraReducers: {
        [getFreelancerdata.pending]: (state) => {
            state.isLoading = true;
        },
        [getFreelancerdata.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        },
        [getFreelancerdata.rejected]: (state) => {
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
        [addBio.pending]: (state) => {
            state.isLoading = true;
        },
        [addBio.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [addBio.rejected]: (state) => {
            state.isLoading = false;
        },
        [addRole.pending]: (state) => {
            state.isLoading = true;
        },
        [addRole.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [addRole.rejected]: (state) => {
            state.isLoading = false;
        },
        [addExperience.pending]: (state) => {
            state.isLoading = true;
        },
        [addExperience.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [addExperience.rejected]: (state) => {
            state.isLoading = false;
        },
        [addSkills.pending]: (state) => {
            state.isLoading = true;
        },
        [addSkills.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [addSkills.rejected]: (state) => {
            state.isLoading = false;
        },
        [addWageRate.pending]: (state) => {
            state.isLoading = true;
        },
        [addWageRate.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [addWageRate.rejected]: (state) => {
            state.isLoading = false;
        },
        [addAgencyDetails.pending]: (state) => {
            state.isLoading = true;
        },
        [addAgencyDetails.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [addAgencyDetails.rejected]: (state) => {
            state.isLoading = false;
        },
        [getAccountSetting.pending]: (state) => {
            state.isLoading = true;
        },
        [getAccountSetting.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.userData = action.payload;
        },
        [getAccountSetting.rejected]: (state) => {
            state.isLoading = false;
        },
        [postchangemail.pending]: (state) => {
            state.isLoading = true;
        },
        [postchangemail.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isOtpSend = action.payload;
        },
        [postchangemail.rejected]: (state) => {
            state.isLoading = false;
        },
        [emailvarifyOtp.pending]: (state) => {
            state.isLoading = true;
        },
        [emailvarifyOtp.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isOtpVerify = action.payload;
        },
        [emailvarifyOtp.rejected]: (state) => {
            state.isLoading = false;
        },
        [resetPassword.pending]: (state) => {
            state.isLoading = true;
        },
        [resetPassword.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isResetPassword = action.payload;
        },
        [resetPassword.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});
// export const { setToken } = freelancerOnboardingSlice.actions;
export default freelancerOnboardingSlice.reducer;
