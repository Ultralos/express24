import { createSlice } from "@reduxjs/toolkit";


export const convertSlice = createSlice({
  name: "convert",
  initialState: {
    value: 0,
  },
  reducers: {
    setAmount: (state, action) => {
      state.value = action.payload
    },
  },

});

export const { setAmount } = convertSlice.actions

export default convertSlice.reducer;
