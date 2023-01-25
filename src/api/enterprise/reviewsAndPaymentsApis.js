import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiGet, apiPost, DEV_URL } from "..";

const GET_REVIEW_LIST_DATA = "/user/employer/rating/list";

export const getReviewListdata = createAsyncThunk(
  "reviewsAndPayments/getReviewListdata",
  async (payload, thunkAPI) => {
    try {
      let res = await apiGet(DEV_URL + GET_REVIEW_LIST_DATA);
      console.log(res.data.userData, "review list data");
      return res?.data?.userData;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);
