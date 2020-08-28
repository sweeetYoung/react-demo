import React from 'react'
import {HashRouter as Router , Route , Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";

import Login from '../login/index'
import Home from '../home/index'

export default class MyRoute extends React.Component{
  render(){
    return(
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Home path='/home' component={Home}/>
        </Switch>
      </Router>
    )
  }
}