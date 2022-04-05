import {
 SET_SEARCH
} from './types'

export const saveSearch = (newSearch:object) => (
  {
    type: SET_SEARCH,
    payload: newSearch
  }
);

