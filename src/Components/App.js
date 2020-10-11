import React, {Component} from 'react'
import Navbar from './Navbar'
import AddTodoForm from './AddTodoForm'
import Filter from './Filter'
import TodoList from './TodoList'

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-6">
              <AddTodoForm />
            </div>
            <div className="col-sm-6 text-right">
              <Filter />
            </div>
          </div>
        </div>
        <TodoList />
      </>
    )
  }
}

export default App
