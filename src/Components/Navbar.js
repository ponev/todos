import React, {Component} from 'react'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} width="30" alt="Todos"/>&nbsp;
            <span className="app-name">Todos</span>
          </span>
          <form className="form-inline">
            <input className="form-control" type="text" placeholder="Поиск по списку" />
          </form>
        </div>
      </nav>
    )
  }
}

export default Navbar