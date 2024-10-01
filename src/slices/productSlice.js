import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    productData : []
}

const productSlice = createSlice({
    name:"product",
    initialState : initialState,
    reducers: {
        setProductData : (state,action) => {
            state.productData = action.payload
        }
    }
})

export const {setProductData} = productSlice.actions;
export default productSlice.reducer;