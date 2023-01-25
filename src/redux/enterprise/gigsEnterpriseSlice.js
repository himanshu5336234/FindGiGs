import { createSlice } from "@reduxjs/toolkit";
import {
  getBidGraphData,
  getMilestoneData,
  getGigListCount,
  getRatingList,
  getInprogressGigs,
  getPostedGigs,
  getClosedGigs,
  getDraftedGigs,
  getGigDetails,
  getBidsReceived,
  getOffersSentBids,
  getRecommendedFreelancersList,
  getAllFreelancersList,
  sendInvite,
  getFreelancerData,
  getMilestoneList,
  creatMilestone,
} from "../../api/enterprise/gigsApis";
const initialState = {
  gigCountData: null,
  gigGraphData: null,
  gigMilestoneData: [],
  isLoading: false,
  paymentsHistory: null,
  ratingList: [],
  ongoingGigsData: [],
  gigList: [],
  gigDetails: {},
  bidList: [],
  freelancersList: [],
  freelancerData: {},
  invitedFreelancer_id: "",
  milestoneList: null,
  creatMilestoneSuccess: false,
};
const gigsEnterpriseSlice = createSlice({
  name: "gigsEnterprise",
  initialState,
  reducers: {},
  extraReducers: {
    [getGigListCount.pending]: (state) => {
      state.isLoading = true;
    },
    [getGigListCount.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigCountData = action.payload;
    },
    [getGigListCount.rejected]: (state) => {
      state.isLoading = false;
    },
    [getBidGraphData.pending]: (state) => {
      state.isLoading = true;
    },
    [getBidGraphData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigGraphData = action.payload;
    },
    [getBidGraphData.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMilestoneData.pending]: (state) => {
      state.isLoading = true;
    },
    [getMilestoneData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigMilestoneData = action.payload;
    },
    [getMilestoneData.rejected]: (state) => {
      state.isLoading = false;
    },
    [getRatingList.pending]: (state) => {
      state.isLoading = true;
    },
    [getRatingList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ratingList = action.payload?.userData;
    },
    [getRatingList.rejected]: (state) => {
      state.isLoading = false;
    },
    [getPostedGigs.pending]: (state) => {
      state.isLoading = true;
    },
    [getPostedGigs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ongoingGigsData = [...state.ongoingGigsData, ...action.payload];
      state.gigList = action.payload;
    },
    [getPostedGigs.rejected]: (state) => {
      state.isLoading = false;
    },
    [getInprogressGigs.pending]: (state) => {
      state.isLoading = true;
    },
    [getInprogressGigs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ongoingGigsData = [...state.ongoingGigsData, ...action.payload];
      state.gigList = action.payload;
    },
    [getInprogressGigs.rejected]: (state) => {
      state.isLoading = false;
    },
    [getDraftedGigs.pending]: (state) => {
      state.isLoading = true;
    },
    [getDraftedGigs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigList = action.payload;
    },
    [getDraftedGigs.rejected]: (state) => {
      state.isLoading = false;
    },
    [getClosedGigs.pending]: (state) => {
      state.isLoading = true;
    },
    [getClosedGigs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigList = action.payload;
    },
    [getClosedGigs.rejected]: (state) => {
      state.isLoading = false;
    },
    [getGigDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getGigDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.gigDetails = action.payload;
    },
    [getGigDetails.rejected]: (state) => {
      state.isLoading = false;
    },
    [getBidsReceived.pending]: (state) => {
      state.isLoading = true;
    },
    [getBidsReceived.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bidList = action.payload;
    },
    [getBidsReceived.rejected]: (state) => {
      state.isLoading = false;
    },
    [getOffersSentBids.pending]: (state) => {
      state.isLoading = true;
    },
    [getOffersSentBids.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bidList = action.payload;
    },
    [getOffersSentBids.rejected]: (state) => {
      state.isLoading = false;
    },
    [getRecommendedFreelancersList.pending]: (state) => {
      state.isLoading = true;
    },
    [getRecommendedFreelancersList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.freelancersList = action.payload;
    },
    [getRecommendedFreelancersList.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAllFreelancersList.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllFreelancersList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.freelancersList = action.payload;
    },
    [getAllFreelancersList.rejected]: (state) => {
      state.isLoading = false;
    },
    [sendInvite.pending]: (state) => {
      state.isLoading = true;
    },
    [sendInvite.fulfilled]: (state, action) => {
      state.invitedFreelancer_id = action?.payload?.freelancer_id;
      state.isLoading = false;
    },
    [sendInvite.rejected]: (state) => {
      state.isLoading = false;
    },
    [getFreelancerData.pending]: (state) => {
      state.isLoading = true;
    },
    [getFreelancerData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.freelancerData = action.payload;
    },
    [getFreelancerData.rejected]: (state) => {
      state.isLoading = false;
    },
    [creatMilestone.pending]: (state) => {
      state.isLoading = true;
    },
    [creatMilestone.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.creatMilestoneSuccess = action?.payload;
    },
    [creatMilestone.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMilestoneList.pending]: (state) => {
      state.isLoading = true;
    },
    [getMilestoneList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.milestoneList = action?.payload;
    },
    [getMilestoneList.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export default gigsEnterpriseSlice.reducer;
