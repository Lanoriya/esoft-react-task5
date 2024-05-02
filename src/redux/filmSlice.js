import { createSlice } from '@reduxjs/toolkit';

const filmSlice = createSlice({
  name: 'films',
  initialState: [],
  reducers: {
    setFilms: (state, action) => {
      return action.payload; // Assuming action.payload contains the films data
    }
  }
});

export const { setFilms } = filmSlice.actions;
export default filmSlice.reducer;
