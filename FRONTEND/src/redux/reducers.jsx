import { combineReducers } from "redux";
import filter from "./filter/reducer";
import isLoading from "./isLoading/reducer";

const reducers = combineReducers({
  filter,
  isLoading,
});

export default reducers;
