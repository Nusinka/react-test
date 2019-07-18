import { all, fork } from "redux-saga/effects";
import bookSaga from "./book";
import subgenreSaga from "./subgenre";

export default function*() {
  yield all([fork(bookSaga), fork(subgenreSaga)]);
}
