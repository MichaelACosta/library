import * as types from "./types";

export const fetchBooks = () => ({
  type: types.FETCH_BOOKS
});

export const setBooks = payload => ({
  type: types.SET_BOOKS,
  payload
});

export const sendBook = payload => ({
  type: types.SEND_BOOK,
  payload
});
