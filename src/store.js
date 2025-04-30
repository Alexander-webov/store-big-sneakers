import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './features/products/productsSlice';
import cartSlice from "./features/cart_t/cartSlice";


const store = configureStore({
    reducer: {
        product: productsSlice,
        cart: cartSlice,
    }
})
export default store;