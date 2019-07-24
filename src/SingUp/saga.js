import { takeEvery } from "redux-saga/effects";
import * as api from "../api";
import * as types from "./types";

export function* sendUser(user) {
  yield api.sendUser(user.payload);
}

export default function* rootSaga() {
  yield takeEvery(types.SEND_USER, sendUser);
}
