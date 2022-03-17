import { createSlice } from "@reduxjs/toolkit";


export const exchangeSlice = createSlice({
  name: "exchange",
  initialState: {
    data: {

    }
  },
  reducers: {
    setExchangeRates: (state, action) => {
      state.data = action.payload
    },
  },

});

export const { setExchangeRates } = exchangeSlice.actions

export default exchangeSlice.reducer;
