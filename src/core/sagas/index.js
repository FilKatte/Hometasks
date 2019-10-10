import { all } from "redux-saga/effects";
import { FilmsListWatch } from "../../App/containers/Dashboard/containers/Films/store/filmsSagas";
import { PeopleListWatch } from "../../App/containers/Dashboard/containers/People/store/peopleSagas";

export default function* rootSaga() {
  yield all([FilmsListWatch(), PeopleListWatch()]);
}
