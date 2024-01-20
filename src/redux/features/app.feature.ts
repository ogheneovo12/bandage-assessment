import { HYDRATE_ACTION_TYPE } from "@/common/constants";
import { RootState } from "@/redux/store";

import { createAction, createSlice } from "@reduxjs/toolkit";

export interface IAppState {
  wishList: any[];
}

// Initial state
const initialState: IAppState = {
  wishList: [],
};

const hydrate = createAction<RootState>(HYDRATE_ACTION_TYPE);

// Actual Slice
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
