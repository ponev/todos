import {
  SET_SEARCH_STR
} from '../actionTypes'

export const setSearchStr = str => ({
  type: SET_SEARCH_STR,
  payload: str
})