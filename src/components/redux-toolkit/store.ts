import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../redux-toolkit/authSlice'
import registerReducer from '../redux-toolkit/registerSlice'
import dataReducer from '../redux-toolkit/dataSlice'

export const store = configureStore({

    reducer:{
        auth : authReducer,
        register: registerReducer,
        data: dataReducer,
    
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;