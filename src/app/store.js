import { configureStore } from '@reduxjs/toolkit'
import convertReducer from '../Main/Converter/convertSlice'
import exchangeReducer from '../Main/ExchangeRate/exchangeRateSlice'

export default configureStore({
  reducer: {
    convert: convertReducer,
    exchange: exchangeReducer
  },
})