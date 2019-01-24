export const initialState = {
  page: 1,
  results: 0,
  total_pages: 0,
  total_results: 0,
  genres: [],
  rating: 3,
  isFiltered: false
};

export const movieReducer = (state = initialState, action) => {
  const {movieData} = action;

  switch (action.type) {
    case 'NOW_PLAYING':
    return {
      page: movieData.page,
      results: [...movieData.results],
      total_pages: movieData.total_pages,
      total_results: movieData.total_results,
      isFiltered: false,
      genres: [],
      rating: 3,
    }

    case 'FILTER_MOVIE':
    return {
      page: movieData.page,
      results: [...movieData.results],
      total_pages: movieData.total_pages,
      total_results: movieData.total_results,
      genres: movieData.genreSelected,
      rating: movieData.rating,
      isFiltered: true
    }

    case 'SHOW_ERROR':
    return state

    default:
    return state;
  }

}
