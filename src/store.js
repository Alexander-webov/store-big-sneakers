import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './features/products/productsSlice';
import cartSlice from "./features/cart/cartSlice";
import ordersSlice from "./features/order/orderSlice";


const store = configureStore({
    reducer: {
        product: productsSlice,
        cart: cartSlice,
        orders: ordersSlice,
    }
})
export default store;