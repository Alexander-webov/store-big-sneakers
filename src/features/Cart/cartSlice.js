import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;  // add quantity if same id
            } else {
                state.cart.push(action.payload);  // push new item
            }
        }
    }
})

export const { addItem } = cartSlice.actions;;
export default cartSlice.reducer;
