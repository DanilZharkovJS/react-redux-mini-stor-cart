import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sortBy: 'default',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
  },
})

export const { setSortBy } = filterSlice.actions
export const selectSortBy = (state) => state.filters.sortBy
export default filterSlice.reducer
