import { createAction,handleActions } from 'redux-actions';
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
  export const searchRequest = createAction(constants.SEARCH_REQUEST, data => data);
  export const searchSuccess = createAction(constants.SEARCH_SUCCESS, data => data);
  export const searchFailure = createAction(constants.SEARCH_FAILURE, data => data);


   const searchReducers = handleActions(
    new Map([
      [searchRequest, (state, action) => ({
          ...state,
          loading: true,
          result: false
        })
      ], 

       [searchSuccess, (state, action) => {
         if (action.payload.length===0) 
          state.result = true
        
        return {
        ...state,
          success: action.payload,
          loading: false,
       }}
       ], 

      [searchFailure, (state, action) => ({
        ...state,
          failure: action.payload,
          loading: false
       })
    
      ],
]),
{ loading: false, success: [], failure: "", result: false }
);

export default searchReducers;