import rootReducer from "../reducer";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { SignIntWatch } from "../../middlewares/loginSagas";
import { AddressesWatch } from "../../middlewares/AdressListSagas";
import { RouteWatch } from "../../middlewares/RouteSagas";

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(SignIntWatch);
sagaMiddleware.run(AddressesWatch);
sagaMiddleware.run(RouteWatch);

export default store;
