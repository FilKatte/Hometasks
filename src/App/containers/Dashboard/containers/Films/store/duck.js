import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

export const getFilmList = createAction(constants.GET_FILMS_LIST);
export const getFilmListSuccess = createAction(
  constants.GET_FILMS_LIST_SUCCESS
);
export const getFilmListFailure = createAction(
  constants.GET_FILMS_LIST_FAILURE
);

export const clearFilmList = createAction(constants.CLEAR_FILMS_LIST);

export const sortAsFilmList = createAction(constants.SORT_AS_FILMS_LIST);
export const sortDesFilmList = createAction(constants.SORT_DES_FILMS_LIST);

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
    ],

    [
      sortAsFilmList,
      (state, action) => {
        const sortedList = state.filmsList.sort(
          (a, b) => a["episode_id"] - b["episode_id"]
        );
        return { ...state, filmsList: [...sortedList] };
      }
    ],

    [
      sortDesFilmList,
      (state, action) => {
        const sortedList = state.filmsList.sort(
          (a, b) => b["episode_id"] - a["episode_id"]
        );
        return { ...state, filmsList: [...sortedList] };
      }
    ],

    [
      clearFilmList,
      state => {
        return {
          ...state,
          filmsList: []
        };
      }
    ]
  ]),
  {
    filmsList: [],
    failure: "",
    loader: false
  }
);

export default FilmsListReducer;
