import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import filtersReducer from './slices/filterSlice'
import errorsReducer from './slices/errorsSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    errors: errorsReducer,
  },
})

export default store
