import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import createStore from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const mountPoint = document.getElementById('root')
const store = createStore(window.__INITIAL_STATE__)

ReactDOM.render((
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
), mountPoint)
