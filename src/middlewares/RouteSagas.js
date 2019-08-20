import { takeEvery, call, put } from "redux-saga/effects";
import {
  getRoute,
  getRouteSuccess,
  getRouteFailure
} from "../App/containers/Dashboard/containers/Map/store/duck";
import { fetchRoute } from "./api";

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
