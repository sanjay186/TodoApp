import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './ItemReducer';

export const store = configureStore({
  reducer: {
    itemReducer
  },
})