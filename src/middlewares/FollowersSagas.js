import { takeEvery, call, put } from "redux-saga/effects";
import {
  followersRequest,
  followersSuccess,
  followersFailure
} from "../App/containers/Followers/store/duck";
import { getFollowersInfo } from "../api";

function* fetchFollowersFlow(action) {
  const {
    payload: { ApiKey, user }
  } = action;

  try {
    const showResult = yield call(getFollowersInfo, ApiKey, user);
    yield put(followersSuccess(showResult));
  } catch (error) {
    yield put(followersFailure(error));
  }
}

export function* fetchFollowersWatcher() {
  yield takeEvery(followersRequest, fetchFollowersFlow);
}
