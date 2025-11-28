import { configureStore } from "@reduxjs/toolkit";
import authProvider from "../components/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authProvider
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
