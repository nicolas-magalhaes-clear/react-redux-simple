import { configureStore } from '@reduxjs/toolkit'
import numberSlice from './actions/numberSlice'

export default configureStore({
  reducer: {
    number: numberSlice
  },
})