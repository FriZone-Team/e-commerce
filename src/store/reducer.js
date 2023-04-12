import { combineReducers } from "@reduxjs/toolkit";
import user from "./user/reducer";
import cart from "./cart/reducer";

export default combineReducers({
  user,
  cart,
});
