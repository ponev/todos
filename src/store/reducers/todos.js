import {
  GET_TODO_LIST,
  CHANGE_COMPLETE,
  ADD_TODO,
  DELETE_TODO
} from '../actionTypes'

const initialState = {
  todoList: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return {
        ...state
      }
    case CHANGE_COMPLETE:
      return {
        todoList: state.todoList.map(todo => (todo.id === action.payload ? {...todo, complete: !todo.complete} : todo))
      }
    case DELETE_TODO:
      return {
        todoList: state.todoList.filter(todo => todo.id !== action.payload ? todo : null)
      }
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList, action.payload
        ]
      }
    default: return state
  }
}