import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

export const getAddressList = createAction(constants.GET_ADDRESSLIST);
export const getAddressListSuccess = createAction(
  constants.GET_ADDRESSLIST_SUCCESS
);
export const getAddressListFailure = createAction(
  constants.GET_ADDRESSLIST_FAILURE
);

export const getRoute = createAction(constants.GET_ROUTE);
export const getRouteSuccess = createAction(constants.GET_ROUTE_SUCCESS);
export const getRouteFailure = createAction(constants.GET_ROUTE_FAILURE);

export const getWeather = createAction(constants.GET_WEATHER);
export const getWeatherSuccess = createAction(constants.GET_WEATHER_SUCCESS);
export const getWeatherFailure = createAction(constants.GET_WEATHER_FAILURE);

export const changeFlagRoute = createAction(constants.CHANGE_FLAG_ROUTE);

const AddressList = handleActions(
  new Map([
    [
      getAddressList,
      state => ({
        ...state,
        loader: true
      })
    ],

    [
      getAddressListSuccess,
      (state, action) => ({
        ...state,
        addressList: action.payload.addresses,
        loader: false
      })
    ],

    [
      getAddressListFailure,
      (state, action) => ({
        ...state,
        failure: action.payload,
        loader: false
      })
    ]
  ]),
  { addressList: [], failure: "", loader: false }
);

const Route = handleActions(
  new Map([
    [
      getRoute,
      state => ({
        ...state,
        loader: true
      })
    ],

    [
      getRouteSuccess,
      (state, action) => ({
        ...state,
        route: action.payload,
        loader: false,
        routeBuild: true
      })
    ],

    [
      getRouteFailure,
      (state, action) => ({
        ...state,
        failure: action.payload,
        loader: false
      })
    ],

    [
      changeFlagRoute,
      state => ({
        ...state,
        routeBuild: false,
        route: []
      })
    ]
  ]),
  { route: [], failure: "", loader: false, routeBuild: false }
);

const Weather = handleActions(
  new Map([
    [
      getWeather,
      state => ({
        ...state,
        loader: true
      })
    ],

    [
      getWeatherSuccess,
      (state, action) => ({
        ...state,
        data: action.payload,
        loader: false
      })
    ],

    [
      getWeatherFailure,
      (state, action) => ({
        ...state,
        failure: action.payload,
        loader: false
      })
    ]
  ]),
  { data: {}, failure: "", loader: false }
);

const mapReducers = combineReducers({ AddressList, Route, Weather });

export default mapReducers;
