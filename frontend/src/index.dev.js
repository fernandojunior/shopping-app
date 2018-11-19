import 'babel-polyfill'
import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import createStore from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const mountPoint = document.getElementById('root')
const store = createStore(window.__INITIAL_STATE__)

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  mountPoint
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default

    ReactDOM.render(
      <AppContainer><NewApp /></AppContainer>,
      mountPoint
    )
  })
}
