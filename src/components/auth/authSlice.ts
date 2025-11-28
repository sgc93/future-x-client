import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/AuthType";

const initialState: {
  isLoading: boolean;
  error: string | null;
  user: User | null;
} = {
  isLoading: false,
  error: null,
  user: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    singIn: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
    },
    singInFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    }
  }
});

export const { singIn, signInSuccess, singInFailure } = authSlice.actions;
export default authSlice.reducer;
