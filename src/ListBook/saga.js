import { takeEvery, put } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "./actions";
import * as types from "./types";

export function* fetchBooks() {
  const result = yield api.fetchBooks();
  if (result) {
    yield put(actions.setBooks(result));
  }
}

export default function* rootSaga() {
  yield takeEvery(types.FETCH_BOOKS, fetchBooks);
}
