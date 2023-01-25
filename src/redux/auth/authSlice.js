import { createSlice } from "@reduxjs/toolkit";
import {
  loginEnterprise,
  loginFreelancer,
  resendOtpEnterprise,
  resendOtpFreelancer,
  signUpEnterprise,
  signUpFreelancer,
  verifyOtpEnterprise,
  verifyOtpFreelancer,
} from "../../api/authAPIs";
import jwt_decode from "jwt-decode";

const initialState = {
  token: null,
  otp: "",
  userData: null,
  type: null,
  isLoading: false,
  isVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      let data = jwt_decode(action.payload);
      state.userData = data;
    },
    setIsVerified: (state) => {
      state.isVerified = true;
    },
    setUserType: (state, action) => {
      state.type = action.payload;
    },
    setLogout: (state) => {
      state.token = null;
      state.type = null;
      state.userData = null;
      state.isVerified = false;
    },
    setUserData: (state, action) => {
      console.log(state, action, "lkjhghjklkjh");
      state.userData = action.payload;
    },
  },
  extraReducers: {
    [loginEnterprise.pending]: (state) => {
      state.isLoading = true;
    },
    [loginEnterprise.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.type = "enterprise";
      let data = jwt_decode(action.payload.token);
      state.userData = data;
      // if (data?.steps_completed === 3) {
      //   state.isVerified = true;
      // }
    },
    [loginEnterprise.rejected]: (state) => {
      state.isLoading = false;
    },
    [loginFreelancer.pending]: (state) => {
      state.isLoading = true;
    },
    [loginFreelancer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.type = "freelancer";
      let data = jwt_decode(action.payload.token);
      state.userData = data;
      // let data = jwt_decode(action.payload.token);
      // if (data?.steps_completed === 6) {
      //   state.isVerified = true;
      // }
    },
    [loginFreelancer.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUpEnterprise.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpEnterprise.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.type = "enterprise";
      let data = jwt_decode(action.payload.token);
      state.userData = data;
    },
    [signUpEnterprise.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUpFreelancer.pending]: (state) => {
      state.isLoading = true;
    },
    [signUpFreelancer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
      state.type = "freelancer";
      let data = jwt_decode(action.payload.token);
      state.userData = data;
    },
    [signUpFreelancer.rejected]: (state) => {
      state.isLoading = false;
    },
    [verifyOtpEnterprise.pending]: (state) => {
      state.isLoading = true;
    },
    [verifyOtpEnterprise.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
    },
    [verifyOtpEnterprise.rejected]: (state) => {
      state.isLoading = false;
    },
    [verifyOtpFreelancer.pending]: (state) => {
      state.isLoading = true;
    },
    [verifyOtpFreelancer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.token = action.payload.token;
    },
    [verifyOtpFreelancer.rejected]: (state) => {
      state.isLoading = false;
    },
    [resendOtpEnterprise.pending]: (state) => {
      state.isLoading = true;
    },
    [resendOtpEnterprise.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [resendOtpEnterprise.rejected]: (state) => {
      state.isLoading = false;
    },
    [resendOtpFreelancer.pending]: (state) => {
      state.isLoading = true;
    },
    [resendOtpFreelancer.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [resendOtpFreelancer.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setToken, setIsVerified, setUserType, setLogout, setUserData } =
  authSlice.actions;

export default authSlice.reducer;
