import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/AuthType";

const initialState: {
  user: User | null;
} = {
  user: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state, action) => {
      state.user = action.payload.user;
    },
    logoutSuccess: (state) => {
      state.user = null;
    },
    addUser: (state, action) => {
      state.user = action.payload.user;
    }
  }
});

export const { authSuccess, logoutSuccess, addUser } = authSlice.actions;
export default authSlice.reducer;
