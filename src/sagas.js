import { put, takeEvery, all } from "redux-saga/effects";

const delay = ms => new Promise(res => setTimeout(res, ms));

// Наша Сага-рабочий (worker Saga): будет выполнять асинхронную задачу увеличения счётчика
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// Наша Сага-наблюдатель: создаёт новые incrementAsync задачи на каждом INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* helloSaga() {
  yield console.log("Hello Sagas!");
}

// обратите внимание, как мы экспортируем rootSaga
// единая точка входа для запуска всех Саг одновременно
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
