import { combineReducers } from "redux-immutable";
import * as types from "./types";
import Models from "./models";

export const stateBooks = (state = Models(), action) => {
  switch (action.type) {
    case types.SET_BOOKS: {
      return state.set("books", action.payload);
    }
    default:
      return state;
  }
};

export default combineReducers({
  stateBooks
});

export const getBooks = state =>
  state.getIn(["library", "stateBooks", "books"]);
