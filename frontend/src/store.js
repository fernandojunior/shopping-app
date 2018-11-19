import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const isBrowser = typeof window !== 'undefined'
const middlewares = [thunk]

const devtools = isBrowser && window.devToolsExtension
  ? window.devToolsExtension
  : () => fn => fn

const configureStore = (initialState = {}) => {
  const enhancers = [
    applyMiddleware(...middlewares),
    devtools()
  ]
  const store = createStore(reducer, initialState, compose(...enhancers))
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

export default configureStore
