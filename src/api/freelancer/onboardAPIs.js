import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiGet, apiPost, DEV_URL } from "..";
import jwt_decode from "jwt-decode";
import { setToken } from "../../redux/auth/authSlice";
const GET_FREELANCER_DATA = "/user/freelancer/details";
const ADD_INTRODUCTION = "/user/freelancer/nameAndNumber";
const ADD_BIO = "/user/freelancer/about";
const ADD_ROLE = "/user/freelancer/addJobrole";
const ADD_EXPERIENCE = "/user/freelancer/addExperience";
const ADD_SKILLS = "/user/freelancer/addSkills";
const ADD_WAGE_RATE = "/user/freelancer/addWages";
const ADD_AGENCY_DETAILS = "/user/freelancer/agency/signup";
const GET_SETTING_PROFILE = "/user/freelancer/get-freelancer-settings";
const POST_CHANGE_MAIL = "/user/freelancer/change-login-credential";
const POST_VARIFY_MAILOTP = "/user/freelancer/settings-otp-verify";
const RESET_PASSWORD = "/user/freelancer/reset-password";
export const getFreelancerdata = createAsyncThunk(
    "freelancingOnboarding/getFreelancerdata",
    async (payload, thunkAPI) => {
        try {
            const data = jwt_decode(localStorage.getItem("authToken"));
            console.log(data, "jwt data");
            const id = data?.freelancer_id;
            let res = await apiGet(DEV_URL + GET_FREELANCER_DATA + "/" + id);
            payload?.setTabIndex(data?.steps_completed);
            return res?.data?.flDetails;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const addIntroduction = createAsyncThunk(
    "freelancingOnboarding/addIntroduction",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + ADD_INTRODUCTION,
                payload?.record
            );
            if (res?.data?.token) {
                localStorage.setItem("authToken", res?.data?.token);
                payload?.dispatch(setToken(res?.data?.token));
            }
            message.success(res?.data?.message);
            payload?.proceedToNextTab();
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const addBio = createAsyncThunk(
    "freelancingOnboarding/addBio",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(DEV_URL + ADD_BIO, payload?.record);
            if (res?.data?.token) {
                localStorage.setItem("authToken", res?.data?.token);
                payload?.dispatch(setToken(res?.data?.token));
            }
            message.success(res?.data?.message);
            payload?.proceedToNextTab();
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const addRole = createAsyncThunk(
    "freelancingOnboarding/addRole",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(DEV_URL + ADD_ROLE, payload?.record);
            if (res?.data?.token) {
                localStorage.setItem("authToken", res?.data?.token);
                payload?.dispatch(setToken(res?.data?.token));
            }
            message.success(res?.data?.message);
            payload?.proceedToNextTab();
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const addExperience = createAsyncThunk(
    "freelancingOnboarding/addExperience",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(DEV_URL + ADD_EXPERIENCE, payload?.record);
            if (res?.data?.token) {
                localStorage.setItem("authToken", res?.data?.token);
                payload?.dispatch(setToken(res?.data?.token));
            }
            message.success(res?.data?.message);
            payload?.proceedToNextTab();
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const addSkills = createAsyncThunk(
    "freelancingOnboarding/addSkills",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(DEV_URL + ADD_SKILLS, payload?.record);
            if (res?.data?.token) {
                localStorage.setItem("authToken", res?.data?.token);
                payload?.dispatch(setToken(res?.data?.token));
            }
            message.success(res?.data?.message);
            payload?.proceedToNextTab();
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const addWageRate = createAsyncThunk(
    "freelancingOnboarding/addWageRate",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(DEV_URL + ADD_WAGE_RATE, payload?.record);
            message.success(res?.data?.message);
            payload?.navigate("/onboarding/success");
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const addAgencyDetails = createAsyncThunk(
    "freelancingOnboarding/addAgencyDetails",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                DEV_URL + ADD_AGENCY_DETAILS,
                payload?.record
            );
            message.success(res?.data?.message);
            // payload?.navigate("/onboarding/success");
            payload?.setShowEmail(true);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getAccountSetting = createAsyncThunk(
    "freelancingOnboarding/getAccountSetting",
    async () => {
        try {
            let res = await apiGet(DEV_URL + GET_SETTING_PROFILE);
            message.success(res?.data?.message);
            console.log(res.data, "actionDispatched");
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const postchangemail = createAsyncThunk(
    "freelancingOnboarding/postchangemail",
    async (payload) => {
        try {
            let res = await apiPost(DEV_URL + POST_CHANGE_MAIL, payload);
            message.success(res?.data?.message);
            console.log(res, "actionDispatched");
            return res.status === 200;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const emailvarifyOtp = createAsyncThunk(
    "freelancingOnboarding/emailvarifyOtp",
    async (payload) => {
        try {
            let res = await apiPost(DEV_URL + POST_VARIFY_MAILOTP, payload);
            message.success(res?.data);
            console.log(res, "actionDispatchedVerify");
            return res.status === 200;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const resetPassword = createAsyncThunk(
    "freelancingOnboarding/resetPassword",
    async (payload) => {
        try {
            let res = await apiPost(DEV_URL + RESET_PASSWORD, payload);
            message.success(res?.data);
            console.log(res, "actionDispatchedresetPassword");
            return res.status === 200;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
