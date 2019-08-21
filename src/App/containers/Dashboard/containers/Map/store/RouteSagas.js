import { takeEvery, call, put } from "redux-saga/effects";
import { getRoute, getRouteSuccess, getRouteFailure } from "./duck";
import { fetchRoute } from "../../../../../../core/utils/api";

function* fetchRouter(action) {
  const {
    payload: { start, end }
  } = action;

  try {
    const Result = yield call(fetchRoute, start, end);

    yield put(getRouteSuccess(Result));
  } catch (error) {
    yield put(getRouteFailure(error));
  }
}

export function* RouteWatch() {
  yield takeEvery(getRoute, fetchRouter);
}
