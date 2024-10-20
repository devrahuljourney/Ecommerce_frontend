import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"


const initialState = {
    productData : [],
    banner : null,
    selectedCategory : null
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
        },
        setCategory : (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const {setProductData, setBanner, setCategory} = productSlice.actions;
export default productSlice.reducer;