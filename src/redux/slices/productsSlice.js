import { createSlice } from '@reduxjs/toolkit'
import initialProducts from '../data/initialProducts'

const initialState = {
  products: initialProducts,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload)
      if (product) {
        product.isAddedToCart = !product.isAddedToCart
      }
    },
    deleteAllCart: (state) => {
      state.products.forEach((p) => (p.isAddedToCart = false))
    },
  },
})

export const selectProducts = (state) => state.products.products

export const { toggleCart, deleteAllCart } = productsSlice.actions

export default productsSlice.reducer
