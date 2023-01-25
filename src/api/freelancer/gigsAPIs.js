import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { apiGet, apiPost, JOB_DEV_URL, apiPut, DEV_URL } from "..";
import RouteConstant from "../../router/constants";

const SAVE_GIG = "/gig/save";
const ALL_GIG_LIST = "/gig/list/all";
const RECOMMENDED_GIGS = "/gig/list/recommended";
const CREATE_BID = "/bid/create";
const GET_GIG_DETAIL = "/gig/details";
const GET_BIDS_SENT = "/bid/get_fl_bids";
const GET_OFFERS_RECIEVED = "/invite/offers";
const GET_BID_DETAIL = "/bid/details";
const GET_GIG_STATUS = "/gig/get_gigs_count";
const CLOSE_GIG = "/gig/close/";
const GET_FREELANCER_PROFILE = "/user/freelancer/details";
const POST_ACCOUNT_INFO = "/user/freelancer/update-freelancer-settings";
export const postGig = createAsyncThunk(
    "gigs/postGig",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(JOB_DEV_URL + SAVE_GIG, payload?.record);
            message.success(res?.data?.message);
            return res?.data;
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

export const getGigStatus = createAsyncThunk(
    "gigs/getGigStatus",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(JOB_DEV_URL + GET_GIG_STATUS);
            message.success(res?.data?.message);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const getGigListData = createAsyncThunk(
    "gigs/getGigListData",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                JOB_DEV_URL +
                    ALL_GIG_LIST +
                    "?offset=" +
                    payload.offset +
                    "&limit=" +
                    payload.limit,
                payload?.record
            );
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const getRecommendedGigs = createAsyncThunk(
    "gigs/getRecommendedGigs",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                JOB_DEV_URL +
                    RECOMMENDED_GIGS +
                    "?offset=" +
                    payload.offset +
                    "&limit=" +
                    payload.limit,
                payload?.record
            );
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const getGigDetail = createAsyncThunk(
    "gigs/getGigDetail",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(
                JOB_DEV_URL + GET_GIG_DETAIL + "/" + payload?.gigId
            );

            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const createBid = createAsyncThunk(
    "gigs/createBid",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(JOB_DEV_URL + CREATE_BID, payload?.record);
            message.success(res?.data?.message);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const getBidsSent = createAsyncThunk(
    "gigsFreelancer/getBidsSent",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(
                JOB_DEV_URL + GET_BIDS_SENT + "?fl_id=" + payload
            );
            return res?.data?.bids;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const getOffersRecieved = createAsyncThunk(
    "gigsFreelancer/getOffersRecieved",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(
                JOB_DEV_URL + GET_OFFERS_RECIEVED + "?fid=" + payload
            );
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const getBidDetail = createAsyncThunk(
    "gigsFreelancer/getBidDetail",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(
                JOB_DEV_URL + GET_BID_DETAIL + "/" + payload.bid_id
            );
            return res?.data?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

export const getFreelancerProfile = createAsyncThunk(
    "gigsFreelancer/getFreelancerProfile",
    async (payload, thunkAPI) => {
        try {
            let res = await apiGet(DEV_URL + GET_FREELANCER_PROFILE);

            return res?.data?.flDetails?.freelancerDetails;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);

// export const getBidsSent = createAsyncThunk(
//   "gigsFreelancer/getBidsSent",
//   async (payload, thunkAPI) => {
//     try {
//       let res = await apiGet(JOB_DEV_URL + GET_BIDS_SENT + "?fl_id=" + payload);
//       return res?.data?.bids;
//     } catch (error) {
//       message.error(error?.response?.data.message);
//     }
//   }
// );

// export const getOffersRecieved = createAsyncThunk(
//   "gigsFreelancer/getOffersRecieved",
//   async (payload, thunkAPI) => {
//     try {
//       let res = await apiGet(
//         JOB_DEV_URL + GET_OFFERS_RECIEVED + "?fid=" + payload
//       );
//       return res?.data?.data;
//     } catch (error) {
//       message.error(error?.response?.data.message);
//     }
//   }
// );

// export const getBidDetail = createAsyncThunk(
//   "gigsFreelancer/getBidDetail",
//   async (payload, thunkAPI) => {
//     try {
//       let res = await apiGet(
//         JOB_DEV_URL + GET_BID_DETAIL + "/" + payload.bid_id
//       );
//       return res?.data?.data;
//     } catch (error) {
//       message.error(error?.response?.data.message);
//     }
//   }
// );

// export const getFreelancerProfile = createAsyncThunk(
//   "gigsFreelancer/getFreelancerProfile",
//   async (payload, thunkAPI) => {
//     try {
//       let res = await apiGet(DEV_URL + GET_FREELANCER_PROFILE);

//       return res?.data?.flDetails?.freelancerDetails;
//     } catch (error) {
//       message.error(error?.response?.data.message);
//     }
//   }
// );

export const postAccountInfo = createAsyncThunk(
    "gigs/postAccountInfo",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                JOB_DEV_URL + POST_ACCOUNT_INFO,
                payload?.record
            );
            message.success(res?.data?.message);
            payload?.setModalVisible(true);

            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const postBillingDetails = createAsyncThunk(
    "gigs/postBillingDetails",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                JOB_DEV_URL + POST_ACCOUNT_INFO,
                payload?.record
            );
            message.success(res?.data?.message);
            payload?.setModalVisible(true);
            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
export const postAgencyInfo = createAsyncThunk(
    "gigs/postAgencyInfo",
    async (payload, thunkAPI) => {
        try {
            let res = await apiPost(
                JOB_DEV_URL + POST_ACCOUNT_INFO,
                payload?.record
            );
            message.success(res?.data?.message);
            payload?.setModalVisible(true);

            return res?.data;
        } catch (error) {
            message.error(error?.response?.data.message);
        }
    }
);
