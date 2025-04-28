import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterState, RegisterUser } from "../types/register.types";
import { LOCAL_STORAGE_KEYS } from "../helpers/enums";

const initialState: RegisterState = {
  registerUser: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerSuccess(state, action: PayloadAction<RegisterUser>) {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.REGISTER_USER,
        JSON.stringify(action.payload)
      );
      state.registerUser = action.payload;
    },
  },
});

export const { registerSuccess } = registerSlice.actions;
export default registerSlice.reducer;
