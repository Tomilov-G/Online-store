import { configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./slices/catalogSlice";

const store = configureStore({
  reducer: {catalog: catalogSlice},
});
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
