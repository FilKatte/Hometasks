
import rootReducer from "../reducer";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { searchRequestWatch } from '../../middlewares/searchSagas';
import { showRequestWatch } from '../../middlewares/showSagas';

export const sagaMiddleware = createSagaMiddleware(); // создаем промежуточный слой

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware) /*Подключаем промежуточный слой к Store */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(searchRequestWatch);
sagaMiddleware.run(showRequestWatch);

export default store;