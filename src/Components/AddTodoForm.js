import React, {Component} from 'react'
import {InputGroup, FormControl, Button, Spinner} from 'react-bootstrap'
import {connect} from 'react-redux'

import {addTodo} from '../store/actions/todos'

class AddTodoForm extends Component {
  state = {
    value: '',
    addLoading: false
  }

  changeHandler = ({target: {value}}) => {
    this.setState({value})
  }

  addTodoHandle = () => {
    const todo = {
      id: Date.now(),
      title: this.state.value,
      complete: false
    }
    this.props.addTodo(todo)
    this.setState({value: ''})
  }

  render() {
    const {value} = this.state

    return (
      <InputGroup>
        <FormControl
          placeholder="Введите название"
          value={value}
          onChange={this.changeHandler}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            disabled={value.length < 1}
            onClick={this.addTodoHandle}
          >
            <span style={{display: 'inline-block', minWidth: 72}}>
              {this.state.addLoading
                ? <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                  />
                : 'Добавить'
              }
            </span>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    )
  }
}

const mapDispatchToProps = {
    addTodo
}

export default connect(null, mapDispatchToProps)(AddTodoForm)