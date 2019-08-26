import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  getRoute,
  getRouteSuccess,
  getRouteFailure,
  getAddressList,
  getAddressListSuccess,
  getAddressListFailure,
  getWeather,
  getWeatherSuccess,
  getWeatherFailure
} from "./duck";
import {
  fetchRoute,
  fetchAddressList,
  fetchWeather
} from "../../../../../../core/utils/api";

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

function* fetchWeatherWorker() {
  try {
    const result = yield call(fetchWeather);
    yield put(getWeatherSuccess(result));
  } catch (error) {
    yield put(getWeatherFailure(error));
  }
}

function* WeatheWatch() {
  yield takeLatest(getWeather, fetchWeatherWorker);
}

function* AddressesWatch() {
  yield takeLatest(getAddressList, fetchAddressesWorker);
}

function* RouteWatch() {
  yield takeLatest(getRoute, fetchRouterWorker);
}

export function* mapSaga() {
  yield all([AddressesWatch(), RouteWatch(), WeatheWatch()]);
}
