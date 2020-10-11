import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ButtonGroup, Button, Badge} from 'react-bootstrap'
import {setFilter} from '../store/actions/filter'

class Filter extends Component {
  setFilterHandle = filter => {
    this.props.setFilter(filter)
  }

  render() {
    const {todoList, filter} = this.props
    const allCount = todoList.length
    const activeCount = todoList.filter(todo => todo.complete === false).length
    const completeCount = allCount - activeCount

    return (
      <ButtonGroup>
        <Button
          active={filter === 'all'}
          variant="secondary"
          onClick={() => this.setFilterHandle('all')}
        >
          Все <Badge pill variant="info">{allCount}</Badge>
        </Button>
        <Button
          active={filter === 'active'}
          variant="secondary"
          onClick={() => this.setFilterHandle('active')}
        >
          Активные <Badge pill variant="danger">{activeCount}</Badge>
        </Button>
        <Button
          active={filter === 'complete'}
          variant="secondary"
          onClick={() => this.setFilterHandle('complete')}
        >
          Выполнены <Badge pill variant="success">{completeCount}</Badge>
        </Button>
      </ButtonGroup>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.todo.todoList,
    filter: state.filter.filter
  }
}
const mapDispatchToProps = {
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)