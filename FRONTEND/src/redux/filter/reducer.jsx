import INITIAL_STATE from "./state";
import { SET_FILTER, API_FILTER, SET_SEARCH } from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, value: action.payload };

    case API_FILTER:
      return { ...state, realProperties: action.payload };

    case SET_SEARCH:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export default reducer;
