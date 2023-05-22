import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/AuthSlice";
import { apiSlice } from "./feature/api/api";
import CartSlice from "./feature/cart/CartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    cart:CartSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
