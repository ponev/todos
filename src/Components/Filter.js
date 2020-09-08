import React, {Component} from 'react'

class Filter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn btn-secondary active">Все <span className="badge badge-info">4</span></button>
        <button type="button" className="btn btn-secondary">Активные <span className="badge badge-danger">3</span></button>
        <button type="button" className="btn btn-secondary">Выполнены <span className="badge badge-success">1</span></button>
      </div>
    )
  }
}

export default Filter