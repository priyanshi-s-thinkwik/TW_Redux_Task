import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Data {
  firstName: string;
  lastName: string;
  id: number;
  age: number;
}
export interface AddDataState {
  data: Data[] | null;
}

const initialState: AddDataState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action: PayloadAction<Data>) {
      console.log(action.payload);

      state.data?.push(action.payload);
      localStorage.setItem("Users", JSON.stringify(state.data));
    },
    deleteData(state, action: PayloadAction<number>) {
      
      const data: Data[] = JSON.parse(localStorage.getItem("Users") as string);
      state.data = data.filter((data) => data.id !== action.payload);
      localStorage.setItem("Users", JSON.stringify(state.data));
    },
    editData(state, action: PayloadAction<Data>) {
      const data: Data[] = JSON.parse(localStorage.getItem("Users") as string);
      const id = data.findIndex((data) => data.id === action.payload.id);
      if (id >= 0) {
        data[id] = action.payload;
      }
      state.data = data;
      console.log(state.data);

      localStorage.setItem("Users", JSON.stringify(state.data));
    },
  },
});

export const { addData, deleteData, editData } = dataSlice.actions;
export default dataSlice.reducer;
