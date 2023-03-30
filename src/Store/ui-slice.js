import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { message: null, errors: false, isLoading: false },
  reducers: {
    setLoading(state, action) {
      state.isLoading = true;
      state.message = "Loading...";
    },
    clearUi(state, action) {
      state.isLoading = false;
      state.message = "";
      state.errors = false;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
