import {
  SET_FILTER

} from '../actionTypes'

const initialState = {
  filter: 'all'
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        filter: action.payload
      }
    default: return state
  }
}