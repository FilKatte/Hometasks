import { takeEvery, call, put } from "redux-saga/effects";
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from "../App/containers/Search/store/duck";
import { getUserInfo } from "../api";

function* fetchUserFlow(action) {
  const {
    payload: { ApiKey, user }
  } = action;

  try {
    const searchResult = yield call(getUserInfo, ApiKey, user);
    yield put(searchSuccess(searchResult));
  } catch (error) {
    yield put(searchFailure(error));
  }
}

export function* fetchUserWatcher() {
  yield takeEvery(searchRequest, fetchUserFlow);
}
