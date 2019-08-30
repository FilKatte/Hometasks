import { combineReducers } from "redux";
import { createAction, handleAction, handleActions } from "redux-actions";
import * as constants from "./constants";

const isAuth = JSON.parse(localStorage.getItem("isAuth"));

export const checkIsLogin = createAction(constants.CHECK_IS_LOGIN);
export const logIn = createAction(constants.LOG_IN);
export const logInSuccess = createAction(constants.LOG_IN_SUCCESS);
export const logInFailure = createAction(constants.LOG_IN_FAILURE);
export const logOut = createAction(constants.LOG_OUT);
export const changeLocale = createAction(constants.CHANGE_LOCALE);

const locale = handleAction(
  changeLocale,
  (state, action) => action.payload,
  "ru"
);

export const isLogin = handleActions(
  new Map([
    [
      checkIsLogin,
      state => {
        if (isAuth) {
          return {
            ...state,
            isAuth: true
          };
        } else {
          return {
            ...state,
            isAuth: false
          };
        }
      }
    ],
    [
      logIn,
      state => ({
        ...state,
        loader: true
      })
    ],

    [
      logInSuccess,
      (state, action) => {
        if (action.payload.success) {
          state.isAuth = true;
          localStorage.setItem("isAuth", JSON.stringify(true));
        } else {
          state.isAuth = false;
          localStorage.setItem("isAuth", JSON.stringify(false));
        }

        return {
          ...state,
          success: action.payload,
          loader: false
        };
      }
    ],

    [
      logInFailure,
      (state, action) => ({
        ...state,
        failure: action.payload || "",
        loader: false
      })
    ],

    [
      logOut,
      state => {
        localStorage.setItem("isAuth", JSON.stringify(false));
        localStorage.setItem(
          "profile",
          JSON.stringify({ name: "", number: "", date: "", cvv: "" })
        );
        return {
          ...state,
          isAuth: false
        };
      }
    ]
  ]),
  { isAuth: isAuth, success: {}, failure: "", loader: false }
);

const appReducers = combineReducers({ isLogin, locale });

export default appReducers;
