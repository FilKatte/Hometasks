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
  export const showRequest = createAction(constants.SHOW_REQUEST);
  export const showSuccess = createAction(constants.SHOW_SUCCESS, data => data);
  export const showFailure = createAction(constants.SHOW_FAILURE, data => data);


  const search = handleAction(
    showRequest,
    (state, action) => state,
    true
   );

   const success = handleAction(
    showSuccess,
    (state, action) => action.payload,
    {}
   );

   const failure = handleAction(
    showFailure,
    (state, action) => action.payload,
    ""
   );

const showReducers = combineReducers({search,success,failure});

export default showReducers;