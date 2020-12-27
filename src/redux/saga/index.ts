import { all } from "redux-saga/effects";
import employerWatcher from "./employer";

export default function* rootSaga() {
  yield all([...employerWatcher]);
}
