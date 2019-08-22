import { takeLatest, call, put } from "redux-saga/effects";
import { logIn, logInSuccess, logInFailure } from "./duck";
import { fetchLogIn } from "../../core/utils/api";

function* fetchLogInWorker(action) {
  const {
    payload: { username, password }
  } = action;

  try {
    const result = yield call(fetchLogIn, username, password);
    yield put(logInSuccess(result));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* logInWatch() {
  yield takeLatest(logIn, fetchLogInWorker);
}
