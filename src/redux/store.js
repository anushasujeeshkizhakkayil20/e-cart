import { configureStore } from "@reduxjs/toolkit";
import wishlistSlices from "./slices/wishlistSlices";
import cartSlice from "./slices/cartSlice";



const store=configureStore({
    reducer:{
        wishlistReducer:wishlistSlices,
        cartReducer:cartSlice

    }
})

export default store;