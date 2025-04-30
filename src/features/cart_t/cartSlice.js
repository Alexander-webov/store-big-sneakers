import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    fee: 20
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
        }
    }
})
export const getCart = (state) => state.cart.cart

export function getTotalPay(state) {
    return state.cart.cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
}


export const { addItem, removeItem } = cartSlice.actions;;
export default cartSlice.reducer;
