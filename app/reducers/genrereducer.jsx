export const initialState = []

export const genreReducer = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_GENRE':
      return [...action.list];

    case 'SHOW_ERROR':
      return [...state]

    default:
      return state;
  }

}
