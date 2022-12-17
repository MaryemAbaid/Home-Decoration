import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "../redux/CartSystem";
import userSystem from "../redux/UserSystem";
const store = configureStore({
  reducer: {
    cart: cartSystem,
    user: userSystem,
  },
});

export default store;
