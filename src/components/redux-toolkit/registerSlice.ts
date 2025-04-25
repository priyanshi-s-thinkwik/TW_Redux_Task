import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterState, RegisterUser } from "../types/register.types";


const initialState: RegisterState = {
  registerUser: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerSuccess(state, action: PayloadAction<RegisterUser>) {
      localStorage.setItem("registerUser", JSON.stringify(action.payload));
      state.registerUser = action.payload;
    },
  },
});

export const { registerSuccess } = registerSlice.actions;
export default registerSlice.reducer;
