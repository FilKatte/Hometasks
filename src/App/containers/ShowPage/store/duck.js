import { createAction, handleActions } from 'redux-actions';
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


  const showReducers = handleActions(
    new Map([
      [showRequest, (state, action) => ({
          ...state,
          loading: true
        })
      ], 

       [showSuccess, (state, action) => ({
        ...state,
          success: action.payload,
          loading: false
       })
       ], 

      [showFailure, (state, action) => ({
        ...state,
          failure: action.payload,
          loading: false
       })
    
      ],
]),
{ loading: false, success: [], failure: "" }
);

export default showReducers;