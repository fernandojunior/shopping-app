import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddProductContainer from './containers/AddProductContainer'
import PayForm from './containers/PayForm'

const HelloWorld = () => (
	<div>AAAAAAAAAAAAAAa</div>
)

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/add-product/" component={AddProductContainer} />
      <Route path="/pay/" component={PayForm} />
    </Switch>
  </div>
)

export default App

