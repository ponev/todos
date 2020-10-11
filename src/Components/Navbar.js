import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setSearchStr} from '../store/actions/search'

class Navbar extends Component {

  changeHandler = ({target: {value}}) => {
    this.props.setSearchStr(value)
  }

  render() {
    const {searchStr} = this.props

    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} width="30" alt="Todos"/>&nbsp;
            <span className="app-name">Todos</span>
          </span>
          <div className="form-inline">
            <input
              className="form-control"
              type="text"
              placeholder="Поиск по списку"
              value={searchStr}
              onChange={this.changeHandler}
            />
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchStr: state.search.searchStr
  }
}
const mapDispatchToProps = {
  setSearchStr
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)