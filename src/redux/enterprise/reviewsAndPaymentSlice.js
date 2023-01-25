import { createSlice } from "@reduxjs/toolkit";
import { getReviewListdata } from "../../api/enterprise/reviewsAndPaymentsApis";

const initialState = {
  reviewList: [],
  isLoading: false,
};

const reviewsAndPaymentsSlice = createSlice({
  name: "reviewsAndPayments",
  initialState,
  reducers: {},
  extraReducers: {
    [getReviewListdata.pending]: (state) => {
      state.isLoading = true;
    },
    [getReviewListdata.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.reviewList = action.payload;
    },
    [getReviewListdata.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default reviewsAndPaymentsSlice.reducer;
