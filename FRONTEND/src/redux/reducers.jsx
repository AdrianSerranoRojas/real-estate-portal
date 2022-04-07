import { combineReducers } from 'redux';
import search from "./search/reducer"
import filter from "./filter/reducer"


const reducers = combineReducers({
    search, filter
});

export default reducers;
