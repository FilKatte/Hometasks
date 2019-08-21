import { all } from "redux-saga/effects";
import { SignIntWatch } from "../../App/store/loginSagas";
import { AddressesWatch } from "../../App/containers/Dashboard/containers/Map/store/AddressListSagas";
import { RouteWatch } from "../../App/containers/Dashboard/containers/Map/store/RouteSagas";

export default function* rootSaga() {
  yield all([SignIntWatch(), AddressesWatch(), RouteWatch()]);
}
