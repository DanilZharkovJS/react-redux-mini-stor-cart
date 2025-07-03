import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortBy: 'default',
  searchQuery: '',
  category: 'All',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setSelectedCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const { setSortBy, setSearchQuery, setSelectedCategory } = filterSlice.actions
export const selectSortBy = (state) => state.filters.sortBy
export const selectSearchQuery = (state) => state.filters.searchQuery
export const selectSelectedCategory = (state) => state.filters.category
export default filterSlice.reducer
