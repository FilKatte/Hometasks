import { takeEvery,call,put } from "redux-saga/effects";
import { showRequest,showSuccess,showFailure } from '../App/containers/ShowPage/store/duck';
import {show} from "../api"

function* fetchShow(action) {
    try {
      const showResult = yield call(show, action.payload);
      yield put(showSuccess(showResult));
      throw new Error('Error Show');
    } catch (error) {
      yield put(showFailure(error));
    }
   }
   
export function* showRequestWatch() {
    yield takeEvery(showRequest, fetchShow);
}


