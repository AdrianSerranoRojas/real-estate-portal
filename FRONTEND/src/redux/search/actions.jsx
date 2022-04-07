import { SET_SEARCH, API_SEARCH, RESET_SEARCH } from "./types";
import getProperties from "../../services/APIrequests";

export const saveSearch = (newSearch) => ({
  type: SET_SEARCH,
  payload: newSearch,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});

export const saveProperties = (value) => {
  return async (dispatch) => {
    // dispatch({ type: LOADING_COUNTER })
    try {
      const apiResult = await getProperties(value);
      dispatch({ type: API_SEARCH, payload: apiResult });
    } catch (error) {
      console.log("carapolla", error);
      //  dispatch({ type: ERROR_COUNTER })
    }
  };
};
