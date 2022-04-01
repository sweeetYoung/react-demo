import React from 'react'
import {Route, useHistory} from 'react-router-dom'
import BasicLayout from "./layout";
import { routes } from "./router"
import Login from "./views/Login";
const App = () => {
  return (
    <>
      <Route exact path="/Login" component={Login}/>
      <BasicLayout />
    </>
  )
}

export default App;
