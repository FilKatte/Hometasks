import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  getRoute,
  getRouteSuccess,
  getRouteFailure,
  getAddressList,
  getAddressListSuccess,
  getAddressListFailure
} from "./duck";
import { fetchRoute, fetchAddressList } from "../../../../../../core/utils/api";

function* fetchRouterWorker(action) {
  const {
    payload: { start, end }
  } = action;

  try {
    const result = yield call(fetchRoute, start, end);
    yield put(getRouteSuccess(result));
  } catch (error) {
    yield put(getRouteFailure(error));
  }
}

function* fetchAddressesWorker() {
  try {
    const result = yield call(fetchAddressList);
    yield put(getAddressListSuccess(result));
  } catch (error) {
    yield put(getAddressListFailure(error));
  }
}

function* AddressesWatch() {
  yield takeLatest(getAddressList, fetchAddressesWorker);
}

function* RouteWatch() {
  yield takeLatest(getRoute, fetchRouterWorker);
}

export function* mapSaga() {
  yield all([AddressesWatch(), RouteWatch()]);
}
