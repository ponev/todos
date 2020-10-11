import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/rootReducer'

const persistedState = localStorage.getItem('state')
  ? JSON.parse(localStorage.getItem('state'))
  : undefined

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
