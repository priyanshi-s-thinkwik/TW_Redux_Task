import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../types/auth.types";
import { LOCAL_STORAGE_KEYS } from "../helpers/enums";

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.LOGIN_USER,
        JSON.stringify(action.payload)
      );
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
