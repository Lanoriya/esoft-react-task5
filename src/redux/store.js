import { configureStore } from '@reduxjs/toolkit'
import filmReducer from './filmSlice';
import filterReducer from './filterSlice';
import filmFavoriteReducer from './filmFavorite';
import filmWatchLaterReducer from './filmWatchLater';

export default configureStore({
  reducer: {
    films: filmReducer,
    filter: filterReducer,
    filmFavorite: filmFavoriteReducer,
    filmLater: filmWatchLaterReducer, 
  },
})