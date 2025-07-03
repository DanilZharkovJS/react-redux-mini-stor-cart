import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortBy: 'default',
  searchQuery: '',
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
  },
})

export const { setSortBy, setSearchQuery } = filterSlice.actions
export const selectSortBy = (state) => state.filters.sortBy
export const selectSearchQuery = (state) => state.filters.searchQuery
export default filterSlice.reducer
