import React, {Component} from 'react'

class AddTodoForm extends Component {
  state = {
    addLoading: false
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control is-invalid" placeholder="Введите название" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <span style={{display: 'inline-block', minWidth: 72}}>
              {this.state.addLoading
                ? <span className="spinner-grow spinner-grow-sm"></span>
                : 'Добавить'
              }
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default AddTodoForm