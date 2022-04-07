import INITIAL_STATE from "./state";

import { SET_TRUE, SET_FALSE } from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TRUE:
      return { ...state, isLoading: true };

    case SET_FALSE:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default reducer;
