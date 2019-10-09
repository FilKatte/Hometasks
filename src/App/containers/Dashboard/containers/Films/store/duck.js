import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

export const getFilmList = createAction(constants.GET_FILMS_LIST);
export const getFilmListSuccess = createAction(
  constants.GET_FILMS_LIST_SUCCESS
);
export const getFilmListFailure = createAction(
  constants.GET_FILMS_LIST_FAILURE
);

const FilmsListReducer = handleActions(
  new Map([
    [
      getFilmList,
      state => ({
        ...state,
        loader: true
      })
    ],

    [
      getFilmListSuccess,
      (state, action) => ({
        ...state,
        filmsList: action.payload,
        loader: false
      })
    ],

    [
      getFilmListFailure,
      (state, action) => ({
        ...state,
        failure: action.payload,
        loader: false
      })
    ]
  ]),
  { filmsList: {}, failure: "", loader: false }
);

export default FilmsListReducer;
