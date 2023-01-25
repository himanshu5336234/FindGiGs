import { createSlice } from "@reduxjs/toolkit";
import { postGig } from "../../api/enterprise/createGigApis";
import {
    createBid,
    getBidsSent,
    getOffersRecieved,
    getGigDetail,
    getGigListData,
    getRecommendedGigs,
    getGigStatus,
    getFreelancerProfile,
    postAccountInfo,
    postBillingDetails,
    postAgencyInfo,
} from "../../api/freelancer/gigsAPIs";

const initialState = {
    gigList: [],
    totalGigs: 0,
    totalRecommendedGigs: 0,
    activeGig: {},
    bidsSent: [],
    offersRecieved: [],
    recommendedGigs: [],
    gigStatus: [],
    freelancerProfile: [],
    isLoading: false,
    isAccountInfoPost: false,
    isBillingDetailsPost: false,
    isAgencyInfoPost: false,
};

const gigSlice = createSlice({
    name: "gigs",
    initialState,
    reducers: {
        setActiveGig: (state, action) => {
            state.activeGig = action.payload;
        },
    },
    extraReducers: {
        [postGig.pending]: (state) => {
            state.isLoading = true;
        },

        [postGig.fulfilled]: (state, action) => {
            state.isLoading = false;
        },
        [postGig.rejected]: (state) => {
            state.isLoading = false;
        },
        [getGigListData.pending]: (state) => {
            state.isLoading = true;
        },
        [getGigListData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.gigList = action.payload.data;
            state.totalGigs = action.payload.count;
        },
        [getGigListData.rejected]: (state) => {
            state.isLoading = false;
        },
        [createBid.pending]: (state) => {
            state.isLoading = true;
        },
        [createBid.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.gigList = action.payload;
        },
        [createBid.rejected]: (state) => {
            state.isLoading = false;
        },
        [getBidsSent.pending]: (state) => {
            state.isLoading = true;
        },
        [getBidsSent.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.bidsSent = action.payload;
        },
        [getBidsSent.rejected]: (state) => {
            state.isLoading = false;
        },
        [getOffersRecieved.pending]: (state) => {
            state.isLoading = true;
        },
        [getOffersRecieved.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.offersRecieved = action.payload;
        },
        [getOffersRecieved.rejected]: (state) => {
            state.isLoading = false;
        },
        [getRecommendedGigs.pending]: (state) => {
            state.isLoading = true;
        },
        [getRecommendedGigs.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.recommendedGigs = action.payload.data;
            state.totalRecommendedGigs = action.payload.count;
        },
        [getRecommendedGigs.rejected]: (state) => {
            state.isLoading = false;
        },

        [getGigDetail.pending]: (state) => {
            state.isLoading = true;
        },
        [getGigDetail.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.activeGig = action.payload;
        },
        [getGigDetail.rejected]: (state) => {
            state.isLoading = false;
        },

        [getGigStatus.pending]: (state) => {
            state.isLoading = true;
        },
        [getGigStatus.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.gigStatus = action.payload;
        },
        [getGigStatus.rejected]: (state) => {
            state.isLoading = false;
        },
        [getFreelancerProfile.pending]: (state) => {
            state.isLoading = true;
        },
        [getFreelancerProfile.fulfilled]: (state, action) => {
            console.log({ action });
            state.isLoading = false;
            state.freelancerProfile = action.payload;
        },
        [getFreelancerProfile.rejected]: (state) => {
            state.isLoading = false;
        },
        [postAccountInfo.pending]: (state) => {
            state.isAccountInfoPost = false;
        },
        [postAccountInfo.fulfilled]: (state, action) => {
            state.isAccountInfoPost = true;
        },
        [postAccountInfo.rejected]: (state) => {
            state.isAccountInfoPost = false;
        },
        [postBillingDetails.pending]: (state) => {
            state.isBillingDetailsPost = false;
        },
        [postBillingDetails.fulfilled]: (state, action) => {
            state.isBillingDetailsPost = true;
        },
        [postBillingDetails.rejected]: (state) => {
            state.isBillingDetailsPost = false;
        },
        [postAgencyInfo.pending]: (state) => {
            state.isAccountInfoPost = false;
        },
        [postAgencyInfo.fulfilled]: (state, action) => {
            state.isAccountInfoPost = true;
        },
        [postAgencyInfo.rejected]: (state) => {
            state.isAccountInfoPost = false;
        },
    },
});

export const { setActiveGig } = gigSlice.actions;

export default gigSlice.reducer;
