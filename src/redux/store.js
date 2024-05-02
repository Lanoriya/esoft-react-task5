import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './filmSlice';
import filterReducer from './filterSlice';

export default configureStore({
  reducer: {
    films: filmReducer,
    filter: filterReducer,
  },
})