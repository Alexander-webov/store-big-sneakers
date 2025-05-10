import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders: []
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addItemInOrder(state, action) {
            state.orders.push(action.payload)
        },
    },
});

export const getOrders = (state) => {
    console.log(state.orders.orders)
    console.log(state)
    return state.orders.orders
};

export const { addItemInOrder } = ordersSlice.actions;
export default ordersSlice.reducer;