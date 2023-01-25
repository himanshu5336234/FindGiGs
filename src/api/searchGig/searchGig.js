import { createAsyncThunk } from "@reduxjs/toolkit";

import { message } from "antd";

import { apiPost, DEV_URL, JOB_DEV_URL } from "..";

const FREELANCE_SERACH = "/user/freelancer/search";

const SEARCH_GIG = "/gig/search/gigs";

export const searchGig = createAsyncThunk(
  "gigs/searchGig",

  async (payload, thunkAPI) => {
    try {
      const userType = localStorage.getItem("type");

      let res = await apiPost(
        userType !== "freelancer"
          ? "https://dev-v2.begig.io:8082/api/v2/user/freelancer/search"
          : JOB_DEV_URL + SEARCH_GIG,

        payload
      );

      return res?.data?.data;
    } catch (error) {
      message.error(error?.response?.data.message);
    }
  }
);
