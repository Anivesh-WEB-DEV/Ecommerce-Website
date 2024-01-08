import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Api";
import cartReducer, { getTotal } from "./cartSlice";
const store = configureStore({
  reducer: {
    api: apiReducer,
    cart: cartReducer,
  },
});
store.dispatch(getTotal());
export default store;
