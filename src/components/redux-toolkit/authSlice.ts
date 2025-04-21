import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    password: string;
  }

  interface AuthState {
    user: User | null;
    loading: boolean;
  }

  const initialState: AuthState = {
    user: null,
    loading: false,
  };

  const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers:{

        loginStart(state){
            state.loading = true;
        },
        loginSuccess(state, action:PayloadAction<User>){
            localStorage.setItem('loginUser', JSON.stringify(action.payload))
            state.user = action.payload;
            state.loading= false;
        },
        logout(state){
            state.user = null;
            localStorage.clear();
        }
    }

  })

  export const { loginStart, loginSuccess, logout } = authSlice.actions;
  export default authSlice.reducer;
