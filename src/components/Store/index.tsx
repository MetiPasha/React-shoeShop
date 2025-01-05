// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../components/Store/authSlice";
import cartReducer from "../../components/Store/cartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
