import { createStore } from "redux";

const initialState = {
  movies: []
}

const favsReducer = (state = initialState, action) => {
  if (action.type = 'ADD' && action.movie) {
    action.movie.fav = true
    return {
      ...state,
      movies: [...state.movies, action.movie]
    }
  }

  return state
}

const store = createStore(favsReducer)

export default store