import { createSlice } from "@reduxjs/toolkit";
export const tabSlice = createSlice({
  name: "auth",
  initialState: {
    selectedTab: "",
  },
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});
export const { setSelectedTab } = tabSlice.actions;
export default tabSlice.reducer;
