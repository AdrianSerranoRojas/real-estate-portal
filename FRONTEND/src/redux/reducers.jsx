import { combineReducers } from "redux";
import search from "./search/reducer";
import filter from "./filter/reducer";
import isLoading from "./isLoading/reducer";

const reducers = combineReducers({
  search,
  filter,
  isLoading,
});

export default reducers;
