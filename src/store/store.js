import { configureStore } from "@reduxjs/toolkit";
import counter from "../slices/counterSlice";

export const store = configureStore({
  reducer: {
    counter,
    users: counter,
    admin: counter,
    students: counter,
  },
});
