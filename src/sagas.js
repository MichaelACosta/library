import { all } from "redux-saga/effects";
import listBook from "./ListBook/saga";
import newBook from "./NewBook/saga";
import singUp from "./SingUp/saga";

export default function* rootSaga() {
  yield all([listBook(), newBook(), singUp()]);
}
