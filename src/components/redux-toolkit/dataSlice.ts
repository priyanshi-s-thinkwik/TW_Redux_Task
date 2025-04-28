import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddDataState, Data } from "../types/data.types";
import { LOCAL_STORAGE_KEYS } from "../helpers/enums";

const initialState: AddDataState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action: PayloadAction<Data>) {
      state.data.push(action.payload);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.USERS,
        JSON.stringify(state.data)
      );
    },
    deleteData(state, action: PayloadAction<number>) {
      state.data = state.data.filter((data) => data.id !== action.payload);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.USERS,
        JSON.stringify(state.data)
      );
    },
    editData(state, action: PayloadAction<Data>) {
      const id :number= state.data.findIndex((data) => data.id === action.payload.id);
      if (id >= 0) {
        state.data[id] = action.payload;
      }
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.USERS,
        JSON.stringify(state.data)
      );
    },
  },
});

export const { addData, deleteData, editData } = dataSlice.actions;
export default dataSlice.reducer;
