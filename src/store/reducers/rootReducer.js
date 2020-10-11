import {combineReducers} from 'redux'
import {todoReducer} from './todos'
import {filterReducer} from './filter'
import {searchReducer} from './search'

export default combineReducers({
  todo: todoReducer,
  filter: filterReducer,
  search: searchReducer
})