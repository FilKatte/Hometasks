import { takeEvery, call, put } from "redux-saga/effects";
import { logIn, logInSuccess, logInFailure } from "../App/store/duck";
import { SignIn } from "./api";

function* fetchSignIn(action) {
  const {
    payload: { username, password }
  } = action;

  try {
    const Result = yield call(SignIn, username, password);

    yield put(logInSuccess(Result));
  } catch (error) {
    yield put(logInFailure(error));
  }
}

export function* SignIntWatch() {
  yield takeEvery(logIn, fetchSignIn);
}
