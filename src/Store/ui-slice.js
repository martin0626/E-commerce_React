import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    message: null,
    errors: false,
    isLoading: false,
    newItem: null,
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = true;
      state.message = "Loading...";
    },
    setNewcartItem(state, action) {
      state.newItem = {
        image: action.payload.image,
        title: action.payload.title,
        size: action.payload.size,
      };
    },
    setMessage(state, action) {
      state.message = {
        title: action.payload.title,
        text: action.payload.text,
        status: action.payload.status,
      };
    },
    clearUi(state, action) {
      state.isLoading = false;
      state.message = "";
      state.errors = false;
      state.newItem = null;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
