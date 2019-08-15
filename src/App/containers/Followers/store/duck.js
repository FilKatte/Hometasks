import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

export const followersRequest = createAction(constants.FOLLOWERS_REQUEST);
export const followersSuccess = createAction(constants.FOLLOWERS_SUCCESS);
export const followersFailure = createAction(constants.FOLLOWERS_FAILURE);

const followersReducers = handleActions(
  new Map([
    [
      followersRequest,
      state => ({
        ...state,
        loading: true,
        successNothing: false
      })
    ],

    [
      followersSuccess,
      (state, action) => {
        if (action.payload.length === 0) state.successNothing = true;

        return {
          ...state,
          data: action.payload,
          loading: false
        };
      }
    ],

    [
      followersFailure,
      (state, action) => ({
        ...state,
        failure: action.payload,
        loading: false
      })
    ]
  ]),
  { loading: false, data: [], failure: "", successNothing: false }
);

export default followersReducers;
