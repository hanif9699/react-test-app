import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    errorMessage: false,
    isFetching: false
}
export const getAllProducts = createAsyncThunk('products/getAllProducts', async (_, { rejectWithValue }) => {
    console.log('fetch')
    const response = await fetch('https://fakestoreapi.com/products')
    if (response.ok) {
        const products = await response.json()
        return { products }
    } else {
        return rejectWithValue({ error: 'Error while loading the products' })
    }
})
const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllProducts.pending]: (state, action) => {
            return Object.assign({}, state, {
                products: [],
                isFetching: true,
                errorMessage: false
            })
        },
        [getAllProducts.rejected]: (state, action) => {
            console.log(action)
            return Object.assign({}, state, {
                products: [],
                isFetching: false,
                errorMessage: action.payload.error
            })
        },
        [getAllProducts.fulfilled]: (state, action) => {
            return Object.assign({}, {
                products: action.payload.products,
                isFetching: false,
                errorMessage: false
            })
        }
    }
})
export default productSlice.reducer;