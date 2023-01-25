import { createSlice } from "@reduxjs/toolkit";
import { searchGig } from "../../api/searchGig/searchGig";

const initialState = {
  results: [],
  isLoading: false,
};

const gigSearchSlice = createSlice({
  name: "searchGig",
  initialState,
  reducers: {},
  extraReducers: {
    [searchGig.pending]: (state) => {
      state.isLoading = true;
    },
    [searchGig.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    },
    [searchGig.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gigSearchSlice.reducer;
