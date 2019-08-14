import { takeEvery, call, put } from "redux-saga/effects";
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from "../App/containers/Search/store/duck";
import { search } from "../api";

function* fetchSearch(action) {
  try {
    const searchResult = yield call(search, action.payload);
    yield put(searchSuccess(searchResult));
    throw new Error("Error Search");
  } catch (error) {
    yield put(searchFailure(error));
  }
}

export function* searchRequestWatch() {
  yield takeEvery(searchRequest, fetchSearch);
}
