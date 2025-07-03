import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import filtersReducer from './slices/filterSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
})

export default store
