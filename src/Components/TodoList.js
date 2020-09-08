import React, {Component} from 'react'
import {Trash} from 'react-bootstrap-icons'

class TodoList extends Component {
  render() {
    return (
      <div className="container mt-3">
        <ul className="list-group">
          <li className="list-group-item list-todo-item">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
            </div>
            <div className="btns">
              <button type="button" className="btn btn-outline-danger">
                <Trash />
              </button>
            </div>
          </li>
          <li className="list-group-item list-todo-item">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch2"/>
              <label className="custom-control-label" htmlFor="customSwitch2">Toggle this switch element this switch element</label>
            </div>
            <div className="btns">
              <button type="button" className="btn btn-outline-danger">
                <Trash />
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoList