import { getNowPlayingMovieList, getFilteredMoviesList, getMoviesListByRating, getGenreList } from '../API/API'

//action creators
const generList = (list) => {
  return {
    type: 'FETCH_GENRE',
    list
  }
}

const nowPlaying = (list) => {
  return {
    type: 'NOW_PLAYING',
    movieData: list
  }
}

const discoverMovie = (movies) => {
  return {
    type: 'FILTER_MOVIE',
    movieData: movies
  }
}

const showError = (error) => {
  return {
    type: 'SHOW_ERROR',
    error
  }
}

//async handlers
export const getGenreListAsyncHandler = () => {
  return (dispatch, getState) => {
    return getGenreList().then((res) => {
      dispatch(generList(res.genres));
    })
    .catch((err) => {
      dispatch(showError(err));
    })
  }
}

export const getNowPlayingMovieListAsyncHandler = (pageNum = 1) => {
  return (dispatch, getState) => {
    return getNowPlayingMovieList(pageNum).then((res) => {
      dispatch(nowPlaying(res));
    })
    .catch((err) => {
      dispatch(showError(err));
    })
  }
}

export const getFilteredMoviesListAsyncHandler = (genres) => {
  return (dispatch, getState) => {
    return getFilteredMoviesList(genres).then((res) => {
      dispatch(discoverMovie({ ...res,  ...genres}));
    })
    .catch((err) => {
      dispatch(showError(err));
    })
  }
}
