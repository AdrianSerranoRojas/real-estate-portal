import { SET_FILTER, API_FILTER, RESET_FILTER } from "./types";

//dsfsdfsdfsd fdsfsd sdff ert


//aqui no se lo que va en el get properties
import { getPropertiesFiltered } from "../../services/APIrequests";

export const saveFilter = (newSearch) => ({
  type: SET_FILTER,
  payload: newFILTER,
});

export const resetFilter = () => ({
  type: RESET_FILTER,
});

export const SavePropertiesFiltered = (string) => {
  return async (dispatch) => {
    // dispatch({ type: LOADING_COUNTER })
    try {
      const apiResult = await getPropertiesFiltered(string);
      dispatch({ type: API_FILTER, payload: apiResult });
    } catch (error) {
      console.log("carapolla", error);
      //  dispatch({ type: ERROR_COUNTER })
    }
  };
};
