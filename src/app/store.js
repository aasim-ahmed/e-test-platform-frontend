import { configureStore } from '@reduxjs/toolkit';
// import your slices here
import authReducer from "../features/authSlice.js"

const store = configureStore({
  reducer: {
    auth: authReducer, // add more slices as needed
  },
});

export default store;
