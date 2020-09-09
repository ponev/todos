import React, {Component} from 'react'
import {Trash, PencilSquare} from 'react-bootstrap-icons'

class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item list-todo-item">
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
          <label className="custom-control-label" htmlFor="customSwitch2">Toggle this switch element this switch element</label>
        </div>
        <div className="btns">
          <button type="button" className="btn btn-outline-warning mr-1">
            <PencilSquare />
          </button>
          <button type="button" className="btn btn-outline-danger">
            <Trash />
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem