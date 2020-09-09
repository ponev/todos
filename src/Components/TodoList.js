import React, {Component} from 'react'
import TodoItem from './TodoItem'


class TodoList extends Component {
  render() {
    return (
      <div className="container mt-3">
        <ul className="list-group">
          <TodoItem />
        </ul>
      </div>
    );
  }
}

export default TodoList