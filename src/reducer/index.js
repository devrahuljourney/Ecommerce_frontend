import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import authSlice from "../slices/authSlice";
import cartSlice from "../slices/cartSlice";



const rootReducer = combineReducers({
    product : productSlice,
    auth : authSlice,
    cart : cartSlice
})

export default rootReducer;