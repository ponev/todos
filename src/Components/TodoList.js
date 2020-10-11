import React, {Component} from 'react'
import {Container, ListGroup, Alert} from 'react-bootstrap'
import TodoItem from './TodoItem'

import {connect} from 'react-redux'
import {
  getTodoList,
  changeCompleteTodoItem,
  deleteTodoItem
} from '../store/actions/todos'


class TodoList extends Component {
  componentDidMount() {
    this.props.getTodoList()
  }

  complete = id => {
    this.props.changeCompleteTodoItem(id)
  }

  delete = id => {
    this.props.deleteTodoItem(id)
  }

  filterTodoList = (list, filter) => {
    switch (filter) {
      case 'active':
        return list.filter(item => !item.complete)
      case 'complete':
        return list.filter(item => item.complete)
      case 'all':
      default: return list
    }
  }

  searchTodoList = (list, searchValue) => {
    return list.filter(({title}) => title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
  }

  render() {
    const {todoList, filter, searchStr} = this.props

    const visibleTodoList = this.filterTodoList(this.searchTodoList(todoList, searchStr), filter)

    return (
      <>
        <Container className="mt-3">
          {
            visibleTodoList.length > 0
              ? <ListGroup>
                  {
                    visibleTodoList.map(item => {
                      return <TodoItem
                        key={item.id}
                        {...item}
                        changeComplete={this.complete}
                        deleteItem={this.delete}
                      />
                    })
                  }
                </ListGroup>
              : <Alert variant="warning" className="text-center">Ваш список пуст. Обновите его, используя форму.</Alert>
          }
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todo.todoList,
    filter: state.filter.filter,
    searchStr: state.search.searchStr
  }
}

const mapDispatchToProps = {
  getTodoList,
  changeCompleteTodoItem,
  deleteTodoItem
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)