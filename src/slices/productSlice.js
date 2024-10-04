import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"


const initialState = {
    productData : [],
    banner : null
}

const productSlice = createSlice({
    name:"product",
    initialState : initialState,
    reducers: {
        setProductData : (state,action) => {
            state.productData = action.payload
        },
        setBanner : (state,action) => {
            state.banner = action.payload
        }
    }
})

export const {setProductData, setBanner} = productSlice.actions;
export default productSlice.reducer;