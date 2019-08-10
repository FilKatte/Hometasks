import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../../sagas";

const sagaMiddleware = createSagaMiddleware(); // создаем промежуточный слой

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware) /*Подключаем промежуточный слой к Store */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default store;
