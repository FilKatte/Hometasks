import { combineReducers } from "redux";
import { createAction, handleAction } from 'redux-actions';
import * as constants from "./constants";

// export const searchRequest = query => ({
//     type: constants.SEARCH_REQUEST,
//     payload: query
//   });

//   const search = (state = "", action) => {
//     switch (action.type) {
//       case constants.SEARCH_REQUEST:
//         return action.payload;
//       default:
//         return state;
//     }
//   };
  export const searchRequest = createAction(constants.SEARCH_REQUEST);
  export const searchSuccess = createAction(constants.SEARCH_SUCCESS, data => data);
  export const searchFailure = createAction(constants.SEARCH_FAILURE, data => data);


  const search = handleAction(
    searchRequest,
    (state, action) => state,
    true
   );

   const success = handleAction(
    searchSuccess,
    (state, action) => action.payload,
    {}
   );

   const failure = handleAction(
    searchFailure,
    (state, action) => action.payload,
    ""
   );

const searchReducers = combineReducers({search,success,failure});

export default searchReducers;