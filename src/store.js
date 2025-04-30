import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './features/roducts/productsSlice';
import cartSlice from "./features/cart_temp/cartSlice";


const store = configureStore({
    reducer: {
        product: productsSlice,
        cart: cartSlice,
    }
})
export default store;