import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

const profile = JSON.parse(localStorage.getItem("profile"));

export const addData = createAction(constants.ADD_DATA);
export const clearData = createAction(constants.CLEAR_DATA);
export const changeFlagUpdatedData = createAction(
  constants.CHANGE_FLAG_UPDATED_DATA
);

export const addTrip = createAction(constants.ADD_TRIP);

export const data = handleActions(
  new Map([
    [
      addData,
      (state, action) => {
        const profileData = {
          name: action.payload.name,
          number: action.payload.number,
          date: action.payload.date,
          cvv: action.payload.cvv
        };

        localStorage.setItem("profile", JSON.stringify(profileData));

        return {
          ...state,
          ...profileData,
          updatedData: true
        };
      }
    ],

    [
      changeFlagUpdatedData,
      state => ({
        ...state,
        updatedData: false
      })
    ],

    [
      clearData,
      state => {
        const profile = JSON.parse(localStorage.getItem("profile"));
        return {
          ...state,
          name: profile.name,
          number: profile.number,
          date: profile.date,
          cvv: profile.cvv,
          trips: []
        };
      }
    ],
    [
      addTrip,
      (state, action) => {
        const {
          payload: { start, end }
        } = action;
        return {
          ...state,
          trips: [{ date: new Date(), start, end }, ...state.trips]
        };
      }
    ]
  ]),
  {
    name: (profile && profile.name) || "",
    number: (profile && profile.number) || "",
    date: (profile && profile.date) || null,
    cvv: (profile && profile.cvv) || "",
    updatedData: false,
    trips: []
  }
);

const profileReducers = combineReducers({ data });

export default profileReducers;
