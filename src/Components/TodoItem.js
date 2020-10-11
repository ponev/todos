import React, {Component} from 'react'
import {Form, Button, ListGroupItem} from 'react-bootstrap'
import {Trash} from 'react-bootstrap-icons'

class TodoItem extends Component {

  render() {
    const {id, title, complete, changeComplete, deleteItem} = this.props

    return (
      <ListGroupItem className="list-todo-item">
        <Form.Check
          type="switch"
          id={`customSwitch${id}`}
          label={title}
          checked={complete}
          onChange={() => changeComplete(id)}
        />
        <div>
          <Button
            variant="outline-danger"
            onClick={() => deleteItem(id)}
          >
            <Trash />
          </Button>
        </div>
      </ListGroupItem>
    )
  }
}

export default TodoItem