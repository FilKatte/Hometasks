import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "../../sagas";

const sagaMiddleware = createSagaMiddleware(); // создаем промежуточный слой

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  /*Подключаем промежуточный слой к Store */
);
sagaMiddleware.run(helloSaga);

export default store;
