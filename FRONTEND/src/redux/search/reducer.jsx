import INITIAL_STATE from "./state";
import {  SET_SEARCH, API_SEARCH } from './types'



const reducer =  (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH:
      return {value : action.payload,
              status:"ok"};

    case API_SEARCH:
      return {...state, 
              responses : action.payload,
              status:"ok"};
    default:
      return state;
  }
}

export default reducer;