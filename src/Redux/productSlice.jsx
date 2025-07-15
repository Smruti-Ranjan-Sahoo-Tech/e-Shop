import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
    searchTerm: '',
    filteredData: [],
    loading: false,
    error: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        setProduct: (state, action) => {
            state.product = action.payload
            state.loading = false
            state.error = null
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
            
            state.filteredData = state.product.filter(item =>
                item.title.toLowerCase().includes(state.searchTerm.toLowerCase()) 
            )
            
            
            // Only log the first item's title if filteredData has items
            if (state.filteredData.length > 0) {
               
            } else {
                
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProduct, setLoading, setError, setSearchTerm } = productSlice.actions

export default productSlice.reducer