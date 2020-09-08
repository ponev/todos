import React, {Component} from 'react'
import Navbar from './Components/Navbar'
import AddTodoForm from './Components/AddTodoForm'
import Filter from './Components/Filter'
import TodoList from './Components/TodoList'
// import {Loader} from './Components/Loader'

class App extends Component {
  render() {
    return (
      <>
        {/*<Loader />*/}
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
