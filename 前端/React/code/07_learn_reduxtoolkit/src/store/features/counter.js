import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: {
    counter: 666
  },
  reducers: {
    addNumber(state, { payload }) {
      state.counter += payload
    },
    subNumber(state, { payload }) {
      state.counter -= payload
    }
  }
})

export const { addNumber, subNumber } = counter.actions

export default counter.reducer
