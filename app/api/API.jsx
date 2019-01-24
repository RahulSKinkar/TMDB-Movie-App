import axios from 'axios'

const TMDB_MOVIE_NOW_SHOWING_API = 'https://api.themoviedb.org/3/movie/now_playing';
const TMDB_DISCOVER_MOVIE_LIST_API = "https://api.themoviedb.org/3/discover/movie";
const TMDB_FETCH_GENRE_LIST_API = "https://api.themoviedb.org/3/genre/movie/list";
const apiKEY = 'api_key=2afb754820db7bbf3a225c394207e494';


// API: Get Now Playing Movies
export const getNowPlayingMovieList = (pageNum) => {

  const requestUrl = `${TMDB_MOVIE_NOW_SHOWING_API}?${apiKEY}&sort_by=popularity.desc&include_adult=false&page=${pageNum}`;

  return axios.get(requestUrl).then((res) => {
    return res.data;
  }, (res) => {
    throw new Error(res);
  })
}

// Get Movies List By Filter
export const getFilteredMoviesList = ({genreSelected = [], rating = '', page = 1}) =>{
  const  genreList = genreSelected.join();
  const pageNum = page;
  const requestUrl = `${TMDB_DISCOVER_MOVIE_LIST_API}?${apiKEY}&sort_by=popularity.desc&include_adult=false&with_genres=${genreList}&vote_average.gte=${rating}&page=${pageNum}`;

  return axios.get(requestUrl).then((res) => {
    return res.data;
  }, (res) => {
    throw new Error(res);
  })
}

// Get Genres List
export const getGenreList = () =>{

  const requestUrl = `${TMDB_FETCH_GENRE_LIST_API}?${apiKEY}`;

  return axios.get(requestUrl).then((res) => {
    return res.data;
  }, (res) => {
    throw new Error(res);
  })
}
