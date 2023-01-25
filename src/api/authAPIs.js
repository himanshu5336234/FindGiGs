import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiGet, apiPost, DEV_URL } from "./index";
import jwt_decode from "jwt-decode";

const ENTERPRISE_SIGN_UP = "/user/employer/signup";
const ENTERPRISE_VERIFY_OTP = "/user/employer/otp/verify";
const ENTERPRISE_LOGIN = "/user/employer/login";
const ENTERPRISE_RESEND_OTP = "/user/employer/otp/resend";

const FREELANCER_SIGN_UP = "/user/freelancer/signup";
const FREELANCER_VERIFY_OTP = "/user/freelancer/otp/verify";
const FREELANCER_LOGIN = "/user/freelancer/login";
const FREELANCER_RESEND_OTP = "/user/freelancer/otp/resend";

export const loginEnterprise = createAsyncThunk(
    "auth/loginEnterprise",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + ENTERPRISE_LOGIN,
                payload?.record
            );
            message.success(res?.data?.message);
            localStorage.setItem("authToken", res?.data?.token);
            localStorage.setItem("type", "enterprise");
            localStorage.setItem("otpVerified", true);
            let data = jwt_decode(res?.data?.token);
            if (data?.steps_completed === 3) {
                payload.navigate("/home");
            } else {
                payload.navigate("/welcome");
            }
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const loginFreelancer = createAsyncThunk(
    "auth/loginFreelancer",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + FREELANCER_LOGIN,
                payload?.record
            );
            localStorage.setItem("authToken", res?.data?.token);
            localStorage.setItem("type", "freelancer");
            localStorage.setItem("otpVerified", true);
            message.success(res?.data?.message);
            let data = jwt_decode(res?.data?.token);
            if (data?.steps_completed === 6) {
                payload.navigate("/home");
            } else {
                payload.navigate("/welcome");
            }
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const signUpEnterprise = createAsyncThunk(
    "auth/signUpEnterprise",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + ENTERPRISE_SIGN_UP,
                payload?.record
            );
            localStorage.setItem("authToken", res?.data?.token);
            localStorage.setItem("type", "enterprise");
            message.success(res?.data?.message);
            payload.setSendOtp(true);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const verifyOtpEnterprise = createAsyncThunk(
    "auth/verifyOtpEnterprise",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + ENTERPRISE_VERIFY_OTP,
                payload?.record
            );
            localStorage.setItem("authToken", res?.data?.token);
            localStorage.setItem("otpVerified", true);
            message.success(res?.data?.message);
            payload.navigate("/welcome");
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const resendOtpEnterprise = createAsyncThunk(
    "auth/resendOtpEnterprise",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(DEV_URL + ENTERPRISE_RESEND_OTP);
            payload?.setTimer(30);
            message.success(res?.data?.message);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const signUpFreelancer = createAsyncThunk(
    "auth/signUpFreelancer",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + FREELANCER_SIGN_UP,
                payload?.record
            );
            localStorage.setItem("authToken", res?.data?.token);
            localStorage.setItem("type", "freelancer");
            message.success(res?.data?.message);
            payload.setSendOtp(true);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const verifyOtpFreelancer = createAsyncThunk(
    "auth/verifyOtpFreelancer",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + FREELANCER_VERIFY_OTP,
                payload?.record
            );
            localStorage.setItem("authToken", res?.data?.token);
            localStorage.setItem("otpVerified", true);
            message.success(res?.data?.message);
            payload.navigate("/onboarding/agency");
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const resendOtpFreelancer = createAsyncThunk(
    "auth/resendOtpFreelancer",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(DEV_URL + FREELANCER_RESEND_OTP);
            payload?.setTimer(30);
            message.success(res?.data?.message);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
