import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import commentReducer from "./commentSlice";

const store = configureStore({
  reducer: {
      app: appReducer,
      comments: commentReducer,
  },
});

export default store;