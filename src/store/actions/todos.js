import {
  GET_TODO_LIST,
  CHANGE_COMPLETE,
  ADD_TODO,
  DELETE_TODO
} from '../actionTypes'

export const getTodoList = () => ({
  type: GET_TODO_LIST
})

export const changeCompleteTodoItem = id => ({
  type: CHANGE_COMPLETE,
  payload: id
})

export const deleteTodoItem = id => ({
  type: DELETE_TODO,
  payload: id
})

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})