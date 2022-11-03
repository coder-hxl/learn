import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    count: 0,
    message: 'Hello World'
  },

  reducers: {
    addNumberAction(state, { payload }) {
      state.count += payload
    },
    subNumberAction(state, { payload }) {
      state.count -= payload
    },
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { addNumberAction, subNumberAction, changeMessageAction } =
  counterSlice.actions

export default counterSlice.reducer
