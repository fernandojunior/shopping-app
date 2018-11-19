import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePageContainer from './containers/HomePageContainer'
import AddProductContainer from './containers/AddProductContainer'
import PayForm from './containers/PayForm'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/add-product/" component={AddProductContainer} />
      <Route path="/pay/" component={PayForm} />
    </Switch>
  </div>
)

export default App

