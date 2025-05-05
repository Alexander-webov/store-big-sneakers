import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    fee: 20,
    coupon: 0,

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cart.push(action.payload);
            }
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        clearCart(state, action) {
            state.cart = [];
        },
        changeCupon(state, action) {
            if (action.payload === 'supeSales') {
                state.coupon = 20;
            } else {
                state.coupon = 0;
            }
        }
    }
})
export const getCart = (state) => state.cart.cart

export function getTotalPay(state) {

    const pay = state.cart.cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
    const fullPrice = pay + state.cart.fee;
    const discount = (state.cart.coupon / 100) * fullPrice;
    const total = fullPrice - discount;

    return total.toFixed(2);
}




export const { addItem, removeItem, clearCart, changeCupon } = cartSlice.actions;;
export default cartSlice.reducer;
