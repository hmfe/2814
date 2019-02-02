import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-most'
import reducer from './store'
import epics from './epics'
import './index.css'
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(epics)

const store = createStore(
  reducer, 
  composeEnhancers(applyMiddleware(epicMiddleware))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)