import { SET_FILTER, API_FILTER, SET_SEARCH } from "./types";

import { getPropertiesFiltered } from "../../services/APIrequests";

// Filter value
export const saveFilter = (newSearch) => ({
  type: SET_FILTER,
  payload: newFILTER,
});
// Filter value

// Search value
export const saveSearch = (newSearch) => ({
  type: SET_SEARCH,
  payload: newSearch,
});
// Search value

export const SavePropertiesFiltered = (string) => {
  return async (dispatch) => {
    // dispatch({ type: LOADING_COUNTER })
    try {
      const apiResult = await getPropertiesFiltered(string);
      dispatch({ type: API_FILTER, payload: apiResult });
    } catch (error) {
      console.log(error);
      //  dispatch({ type: ERROR_COUNTER })
    }
  };
};
