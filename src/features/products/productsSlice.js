import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    products: [],
    isLoading: false
}

export const getProductDataAsync = createAsyncThunk(
    "products/getProductDataAsync",
    async function () {
        const res = await fetch('/data/products.json')
        const data = await res.json();
        return data;
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductDataAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductDataAsync.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false;

            })
            .addCase(getProductDataAsync.rejected, (state) => {
                state.isLoading = false;
            })
    }
})




export default productsSlice.reducer;


