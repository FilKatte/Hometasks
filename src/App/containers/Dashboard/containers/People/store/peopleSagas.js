import { takeLatest, call, put } from "redux-saga/effects";
import {
  getPeopleList,
  getPeopleListSuccess,
  getPeopleListFailure
} from "./duck";
import { fetchPeopleList } from "./api";

function* fetchPeopleListWorker(action) {
  try {
    const { payload: url } = action;
    const response = yield call(fetchPeopleList, url);
    const { data } = response;
    yield put(getPeopleListSuccess(data));
  } catch (error) {
    yield put(getPeopleListFailure(error.message));
  }
}

export function* PeopleListWatch() {
  yield takeLatest(getPeopleList, fetchPeopleListWorker);
}
