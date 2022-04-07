import INITIAL_STATE from "./state";
import { SET_FILTER, API_FILTER, RESET_FILTER } from "./types";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, value: action.payload, status: "ok get filter" };

    case API_FILTER:
      return { ...state, responses: action.payload, status: "ok" };

    case RESET_FILTER:
      return { ...state, value: "", status: "not ok 2", responses: "" };

    default:
      return state;
  }
};

export default reducer;
