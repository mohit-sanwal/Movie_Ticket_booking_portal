import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer.js";

/*
Created by : Mohit sanwal
Description: this is our store object which holds the whole state tree of our application.
Reference: https://redux.js.org/api/store
*/

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(ReduxThunk))
  );
}
