import { createStore } from "redux";

const favsReducer = (state = {movies: []}, action) => {
  if(action.type = 'ADD'){
    console.log(action.movie);
    return {
      movies: [...state.movies, action.movie]
    }
  }
return state
}

const store = createStore(favsReducer)

export default store