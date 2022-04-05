import {
 SET_SEARCH
} from './types'

export const saveSearch = (newSearch) => (
  {
    type: SET_SEARCH,
    payload: newSearch
  }
);

