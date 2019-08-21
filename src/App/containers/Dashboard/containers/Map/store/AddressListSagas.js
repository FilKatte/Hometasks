import { takeEvery, call, put } from "redux-saga/effects";
import {
  getAddressList,
  getAddressListSuccess,
  getAddressListFailure
} from "./duck";
import { fetchAddressList } from "../../../../../../core/utils/api";

function* fetchAddresses() {
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
