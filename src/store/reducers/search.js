import {
  SET_SEARCH_STR

} from '../actionTypes'

const initialState = {
  searchStr: ''
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_STR:
      return {
        searchStr: action.payload
      }
    default: return state
  }
}