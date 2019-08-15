import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

export const searchRequest = createAction(constants.SEARCH_REQUEST);
export const searchSuccess = createAction(constants.SEARCH_SUCCESS);
export const searchFailure = createAction(constants.SEARCH_FAILURE);

const searchReducers = handleActions(
  new Map([
    [
      searchRequest,
      (state, action) => ({
        ...state,
        loading: true,
        successNothing: false
      })
    ],

    [
      searchSuccess,
      (state, action) => {
        if (action.payload.message) state.successNothing = true;

        return {
          ...state,
          data: action.payload,
          loading: false
        };
      }
    ],

    [
      searchFailure,
      (state, action) => ({
        ...state,
        failure: action.payload,
        loading: false
      })
    ]
  ]),
  { loading: false, data: {}, failure: "", successNothing: false }
);

export default searchReducers;
