import { createSlice } from "@reduxjs/toolkit";
import {
  createGig,
  getCreatedGigData,
  getGigTemplateData,
  postGig,
  updateGig,
} from "../../api/enterprise/createGigApis";

const initialState = {
  gigData: [],
  gigFreelancersData: [],
  gigId: null,
  templateData: [],
  isLoading: false,
};

const createGigSlice = createSlice({
  name: "createGig",
  initialState,
  reducers: {
    setGigDataEmpty: (state, action) => {
      state.gigData = [];
      state.gigFreelancersData = [];
      state.gigId = null;
      state.templateData = [];
    },
  },
  extraReducers: {
    [getCreatedGigData.pending]: (state) => {
      state.isLoading = true;
    },
    [getCreatedGigData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigData = action.payload?.gigData;
      state.gigFreelancersData = action.payload?.gigFreelancersData;
    },
    [getCreatedGigData.rejected]: (state) => {
      state.isLoading = false;
    },
    [getGigTemplateData.pending]: (state) => {
      state.isLoading = true;
    },
    [getGigTemplateData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.templateData = action.payload;
    },
    [getGigTemplateData.rejected]: (state) => {
      state.isLoading = false;
    },
    [createGig.pending]: (state) => {
      state.isLoading = true;
    },
    [createGig.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigId = action.payload?.data?.gig_id;
    },
    [createGig.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateGig.pending]: (state) => {
      state.isLoading = true;
    },
    [updateGig.fulfilled]: (state, action) => {
      state.gigData = {
        ...state.gigData,

        ...action?.payload?.data?.updatedFields,
      };
      state.isLoading = false;
    },
    [updateGig.rejected]: (state) => {
      state.isLoading = false;
    },
    [postGig.pending]: (state) => {
      state.isLoading = true;
    },
    [postGig.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [postGig.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setGigDataEmpty } = createGigSlice.actions;

export default createGigSlice.reducer;
