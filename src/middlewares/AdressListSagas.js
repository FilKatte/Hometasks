import { takeEvery, call, put } from "redux-saga/effects";
import {
  getAddressList,
  getAddressListSuccess,
  getAddressListFailure
} from "../App/containers/Dashboard/containers/Map/store/duck";
import { fetchAddressList } from "./api";

function* fetchAddresses(action) {
  try {
    const Result = yield call(fetchAddressList);
    yield put(getAddressListSuccess(Result));
  } catch (error) {
    yield put(getAddressListFailure(error));
  }
}

export function* AddressesWatch() {
  yield takeEvery(getAddressList, fetchAddresses);
}
