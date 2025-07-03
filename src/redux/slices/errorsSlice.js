import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

const initialState = {
  message: '',
}

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.message = action.payload
    },
    setClearError: () => {
      return initialState
    }
  },
})

export const { setError, setClearError } = errorSlice.actions
export const selectError = (state) => state.errors.message
export default errorSlice.reducer