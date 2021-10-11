import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "./reducers/tab";
export default configureStore({
  reducer: {
    tabsReducer,
  },
});
