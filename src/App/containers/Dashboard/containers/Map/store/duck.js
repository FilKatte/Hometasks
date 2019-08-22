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

const mapReducers = combineReducers({ AddressList, Route });

export default mapReducers;
