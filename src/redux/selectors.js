import { createSelector } from 'reselect';

const selectFilmComments = state => state.filmComments;

export const selectCommentsForFilm = createSelector(
  [selectFilmComments, (_, filmId) => filmId],
  (filmComments, filmId) => {
    // Check if filmComments[filmId] exists and return it, or return an empty array if it doesn't
    return filmComments[filmId] || [];
  }
);
