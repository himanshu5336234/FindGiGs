import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiGet, apiPost, DEV_URL } from "..";
import jwt_decode from "jwt-decode";
import { setToken } from "../../redux/auth/authSlice";

const GET_ENTERPRISE_DATA = "/user/employer/details";

const ADD_INTRODUCTION = "/user/employer/name";
const ADD_COMPANY_DETAILS = "/user/company/details";
const ADD_INDUSTRY_SECTOR = "/user/company/type-name";

export const getEnterprisedata = createAsyncThunk(
  "enterpriseOnboarding/getEnterprisedata",
  async (payload, thunkAPI) => {
    try {
      const data = jwt_decode(localStorage.getItem("authToken"));
      console.log(data, "jwt data");
      const id = data?.id;
      let res = await apiGet(DEV_URL + GET_ENTERPRISE_DATA + "/" + id);
      payload?.setTabIndex(data?.steps_completed);
      return res?.data?.userData;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);

export const addIntroduction = createAsyncThunk(
  "enterpriseOnboarding/addIntroduction",
  async (payload, thunkAPI) => {
    try {
      let res = await apiPost(DEV_URL + ADD_INTRODUCTION, payload?.record);
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

export const addCompanyDetails = createAsyncThunk(
  "enterpriseOnboarding/addCompanyDetails",
  async (payload, thunkAPI) => {
    try {
      let res = await apiPost(DEV_URL + ADD_COMPANY_DETAILS, payload?.record);
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

export const addIndustrySector = createAsyncThunk(
  "enterpriseOnboarding/addIndustrySector",
  async (payload, thunkAPI) => {
    try {
      let res = await apiPost(DEV_URL + ADD_INDUSTRY_SECTOR, payload?.record);
      message.success(res?.data?.message);
      payload?.navigate("/onboarding/success");
      return res?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);
