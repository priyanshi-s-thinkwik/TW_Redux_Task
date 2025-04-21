import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface RegisterState {
  registerUser: RegisterUser | null;
  loading: boolean;
}

const initialState: RegisterState = {
  registerUser: null,
  loading: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerStart(state) {
      state.loading = true;
    },

    registerSuccess(state, action: PayloadAction<RegisterUser>) {
      localStorage.setItem("registerUser", JSON.stringify(action.payload));
      state.registerUser = action.payload;
      state.loading = false;
    },
  },
});

export const { registerStart, registerSuccess } = registerSlice.actions;
export default registerSlice.reducer;
