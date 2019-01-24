import * as redux from 'redux'
import thunk from 'redux-thunk'
import { movieReducer } from '../reducers/movieReducer';
import { genreReducer} from '../reducers/genrereducer'

const configure = (initialState = {}) => {

  const reducer = redux.combineReducers({
    movie: movieReducer,
    genre: genreReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk)
  ));

  return store;

};

export default configure;
