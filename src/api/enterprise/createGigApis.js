import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiGet, apiPost, apiPut, DEV_URL, JOB_DEV_URL } from "..";

const CREATE_GIG = "/gig/create";
const UPDATE_GIG = "/gig/update";
const GET_GIG_TEMPLATE_DATA = "/gig/static/gigType";
const GET_GIG = "/gig/details";
const UPLOAD_FILE = "/user/upload/file";
const POST_GIG = "/gig/post";

export const getCreatedGigData = createAsyncThunk(
  "createGig/getCreatedGigData",
  async (payload, thunkAPI) => {
    try {
      let res = await apiGet(JOB_DEV_URL + GET_GIG + "/" + payload?.gigId);
      return res?.data?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);

export const getGigTemplateData = createAsyncThunk(
  "createGig/getGigTemplateData",
  async (payload, thunkAPI) => {
    try {
      let res = await apiGet(JOB_DEV_URL + GET_GIG_TEMPLATE_DATA);
      return res?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);

export const createGig = createAsyncThunk(
  "createGig/createGig",
  async (payload, thunkAPI) => {
    try {
      let res = await apiPost(JOB_DEV_URL + CREATE_GIG, payload?.record);
      localStorage.setItem("gigCreated", true);
      message.success(res?.data?.message);
      payload?.proceedToNextTab();
      return res?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);

export const updateGig = createAsyncThunk(
  "createGig/updateGig",
  async (payload, thunkAPI) => {
    try {
      let res = await apiPut(JOB_DEV_URL + UPDATE_GIG, payload?.record);
      message.success(res?.data?.message);
      payload?.proceedToNextTab && payload?.proceedToNextTab();
      payload?.navigate && payload?.navigate("/home/review-gig-details");
      return res?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);

export const uploadFile = createAsyncThunk(
  "createGig/uploadFile",
  async (payload, thunkAPI) => {
    try {
      let res = await apiPost(DEV_URL + UPLOAD_FILE, payload?.record);
      payload?.onSuccess("ok");
      console.log(payload);
      message.success(res?.data?.message);
      payload?.proceedToNextTab();
      return res?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);

export const postGig = createAsyncThunk(
  "createGig/postGig",
  async (payload, thunkAPI) => {
    try {
      let res = await apiGet(JOB_DEV_URL + POST_GIG + "/" + payload?.gigId);
      message.success(res?.data?.message);
      payload?.setModalVisible(true);
      return res?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);
