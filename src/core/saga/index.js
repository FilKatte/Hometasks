import { all } from "redux-saga/effects";
import { logInWatch } from "../../App/store/saga";
import { mapSaga } from "../../App/containers/Dashboard/containers/Map/store/saga";

export default function* rootSaga() {
  yield all([logInWatch(), mapSaga()]);
}
