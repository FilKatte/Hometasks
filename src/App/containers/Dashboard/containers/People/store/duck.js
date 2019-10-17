import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

export const getPeopleList = createAction(constants.GET_PEOPLE_LIST);
export const getPeopleListSuccess = createAction(
  constants.GET_PEOPLE_LIST_SUCCESS
);
export const getPeopleListFailure = createAction(
  constants.GET_PEOPLE_LIST_FAILURE
);

export const clearPeopleList = createAction(constants.CLEAR_PEOPLE_LIST);

const PeopleListReducer = handleActions(
  new Map([
    [
      getPeopleList,
      state => ({
        ...state,
        loader: true
      })
    ],

    [
      getPeopleListSuccess,
      (state, action) => ({
        ...state,
        peopleList: [...state.peopleList, ...action.payload.results],
        loader: false,
        nextLink: action.payload.next
      })
    ],

    [
      getPeopleListFailure,
      (state, action) => ({
        ...state,
        failure: action.payload,
        loader: false
      })
    ],

    [
      clearPeopleList,
      state => {
        return {
          ...state,
          peopleList: [],
          nextLink:
            "https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/"
        };
      }
    ]
  ]),
  {
    peopleList: [],
    failure: "",
    loader: false,
    nextLink: "https://cors-anywhere.herokuapp.com/https://swapi.co/api/people/"
  }
);

export default PeopleListReducer;
