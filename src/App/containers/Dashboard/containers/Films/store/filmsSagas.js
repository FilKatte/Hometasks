import { takeLatest, call, put } from "redux-saga/effects";
import { getFilmList, getFilmListSuccess, getFilmListFailure } from "./duck";
import { fetchFilmsList } from "./api";

function* fetchFilmsListWorker() {
  try {
    const result = yield call(fetchFilmsList);
    yield put(getFilmListSuccess(result));
  } catch (error) {
    yield put(getFilmListFailure(error));
  }
}

export function* FilmsListWatch() {
  yield takeLatest(getFilmList, fetchFilmsListWorker);
}
