import { WebApi } from "../../Api/webApi";
import Config from "../../config";
import * as Constants from "../../constants";
import toastService from "../../module/services/toastService";

/*
Created by : Mohit Sanwal
Description: this is our action container for digitalGold section.here we can send data from our application to our store.
Reference: https://redux.js.org/basics/actions
*/


export const actionType = {
  GET_MOVIE_LIST_SUCCESS: "GET_MOVIE_LIST_SUCCESS",
  GET_MOVIE_LIST_FAILURE: "GET_MOVIE_LIST_FAILURE",
  GET_THEATER_LIST_SUCCESS: "GET_THEATER_LIST_SUCCESS",
  SET_SEAT_COUNT_SUCCESS: "SET_SEAT_COUNT_SUCCESS"
};

// action creator
const pending = (Type, payload) => {
  return {
    type: Type,
    payload,
  };
};

export const success = (Type, payload) => {
  return {
    type: Type,
    payload,
  };
};

const error = (Type, payload) => {
  return {
    type: Type,
    payload,
  };
};

export function getListing() {
  return function (dispatch) {
    dispatch(pending(actionType.START_LOADING, null));
    return WebApi.getAllPosts() // api calling with redux
      .then((response) => {
        if (response.success) {
          dispatch(success(actionType.GET_LISTING_SUCCESS, response.data));
        } else {
        }
      })
      .catch((err) => {
        dispatch(error(actionType.GET_LISTING_ERROR), err);
      });
  };
}

export function getMoviesList() {
  console.log("Constants", Constants)
  return function (dispatch) {
    dispatch(success(actionType.GET_MOVIE_LIST_SUCCESS, Constants.MOVIES_LIST_DTO))
  };
}


export function getTheatersList() {
  return function (dispatch) {
    dispatch(success(actionType.GET_THEATER_LIST_SUCCESS, Constants.THEATERS_DTO))
  };
}


export function setSeatCount(count) {
  return function (dispatch) {
    dispatch(success(actionType.SET_SEAT_COUNT_SUCCESS, count))
  };
}
