import { actionType } from "../actions/actions";
/*
Created by : Mohit Sanwal
Description: this is our rootReducer function where we combine all reducer with the help of combineReducer and then we pass it to createStore.
Reference: https://redux.js.org/api/combinereducers, store.js
*/

const initialState = {
  movieListData: [],
  theatersListData : [],
  seatsCount: 1
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_MOVIE_LIST_SUCCESS:
      return {
        ...state,
        movieListData: action.payload,
      };
    case actionType.GET_THEATER_LIST_SUCCESS:
        return {
          ...state,
          theatersListData: action.payload,
        };
    case actionType.SET_SEAT_COUNT_SUCCESS:
        return {
          ...state,
          seatsCount: action.payload,
        };
    default:
      return state;
  }
};

export default rootReducer;
