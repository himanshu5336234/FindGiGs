import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiGet, apiPost, apiPut, DEV_URL, JOB_DEV_URL } from "..";
import RouteConstant from "../../router/constants";
const GET_GIG_LIST_COUNT = "/gig/count";
const GET_BID_GRAPH_DATA = "/bid/all/count";
const GET_MILESTONE_DATA = "/milestone/topGigs";
const GET_RATING_LIST = "/user/employer/rating/list";
const GET_POSTED_GIGS = "/gig/list/post";
const GET_IN_PROGRESS_GIGS = "/gig/list/inprogress";
const GET_DRAFTED_GIGS = "/gig/list/draft";
const GET_CLOSED_GIGS = "/gig/list/close";
const GET_GIG_DETAILS = "/gig/details/";
const GET_OFFER_SENT_BIDS = "/invite/all/list";
const GET_BIDS_RECEIVED = "/bid/all/list";
const CLOSE_GIG = "/gig/close/";
const GET_RECOMMENDED_FREELANCERS_LIST =
    "/user/freelancer/recommended?gig_id=75";
const GET_ALL_FREELANCERS_LIST = "/user/freelancer/list/all?page=0&limit=100";
const SEND_INVITE = "/invite/create";
const GET_FREELANCER_DATA = "/user/freelancer/details/";
const GET_MILESTONELIST = "/milestone/milestone?gig_id=";
const CREATE_MILESTONE = "/milestone/create";
export const getGigListCount = createAsyncThunk(
    "gigsEnterprise/getGigListCount",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_GIG_LIST_COUNT);
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getMilestoneList = createAsyncThunk(
    "gigsEnterprise/getMilestoneList",
    async (payload, thunkAPI) => {
        console.log(payload, "payload");
        try {
            let res = await apiGet(
                JOB_DEV_URL + GET_MILESTONELIST + payload?.gigId
            );
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const creatMilestone = createAsyncThunk(
    "gigsEnterprise/creatMilestone",
    async (payload, thunkAPI) => {
        console.log(payload, "payload");
        try {
            let res = await apiPost(JOB_DEV_URL + CREATE_MILESTONE, payload);
            return res?.data?.success;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getBidGraphData = createAsyncThunk(
    "gigsEnterprise/getBidGraphData",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_BID_GRAPH_DATA);
            return res?.data?.data?.gigData;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getMilestoneData = createAsyncThunk(
    "gigsEnterprise/getMilestoneData",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_MILESTONE_DATA);
            console.log(res?.data, "milestone");
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getRatingList = createAsyncThunk(
    "gigsEnterprise/getRatingList",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(DEV_URL + GET_RATING_LIST);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getPostedGigs = createAsyncThunk(
    "gigsEnterprise/getPostedGigs",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_POSTED_GIGS);
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getInprogressGigs = createAsyncThunk(
    "gigsEnterprise/getInprogressGigs",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_IN_PROGRESS_GIGS);
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getDraftedGigs = createAsyncThunk(
    "gigsEnterprise/getDraftedGigs",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_DRAFTED_GIGS);
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getClosedGigs = createAsyncThunk(
    "gigsEnterprise/getClosedGigs",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_CLOSED_GIGS);
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getGigDetails = createAsyncThunk(
    "gigsEnterprise/getGigDetails",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(
                JOB_DEV_URL + GET_GIG_DETAILS + payload?.gigId
            );
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getBidsReceived = createAsyncThunk(
    "gigsEnterprise/getBidsReceived",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_BIDS_RECEIVED);
            console.log(res?.data, "bids received");
            return res?.data?.data?.bidData;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getOffersSentBids = createAsyncThunk(
    "gigsEnterprise/getOffersSentBids",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_OFFER_SENT_BIDS);
            console.log(res?.data?.data, "sent bids");
            return res?.data?.data?.inviteData;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const closeGig = createAsyncThunk(
    "gigsEnterprise/closeGig",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPut(JOB_DEV_URL + CLOSE_GIG + payload?.gigId);
            console.log(res?.data, "close gig");
            message.success(res?.data?.message);
            payload?.navigate &&
                payload?.navigate(
                    RouteConstant.HOME + "/" + RouteConstant.GIG_STATUS
                );
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getRecommendedFreelancersList = createAsyncThunk(
    "gigsEnterprise/getRecommendedFreelancersList",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(DEV_URL + GET_RECOMMENDED_FREELANCERS_LIST);
            console.log(res?.data, "freelancer list");
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getAllFreelancersList = createAsyncThunk(
    "gigsEnterprise/getAllFreelancersList",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(DEV_URL + GET_ALL_FREELANCERS_LIST);
            console.log(res?.data, "all freelancer list");
            return res?.data?.flDetails?.freelancerData;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const sendInvite = createAsyncThunk(
    "gigsEnterprise/sendInvite",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(JOB_DEV_URL + SEND_INVITE, payload?.record);
            message.success(res?.data?.message);
            return {
                ...res?.data,
                freelancer_id: payload?.record?.freelancer_id,
            };
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const getFreelancerData = createAsyncThunk(
    "gigsEnterprise/getFreelancerData",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(
                DEV_URL + GET_FREELANCER_DATA + payload?.freelancer_id
            );
            return res?.data?.flDetails;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
