import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 100000000,
  name: "Yubaraj",
  age: 10,
};
const counterSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    incriment: (state, payload) => {
      state.num += 1;
    },
    decrement: (state, payload) => {
      state.num -= 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { incriment, decrement } = actions;
export default reducer;
