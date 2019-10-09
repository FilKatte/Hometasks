import { all } from "redux-saga/effects";
import { FilmsListWatch } from "../../App/containers/Dashboard/containers/Films/store/filmsSagas";

export default function* rootSaga() {
  yield all([FilmsListWatch()]);
}
