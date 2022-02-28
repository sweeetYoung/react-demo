import React from 'react'
import {Route, useHistory} from 'react-router-dom'
import BasicLayout from "./layout";
import { routes } from "./router/index"
// import Login from "./views/Login/index";

const App = () => {
  let history = useHistory();
  function isLogin() {
    let userInfo = window.localStorage.getItem('userInfo') || {}
    return Object.keys(userInfo)?.length > 0;
  }
  console.log(isLogin())
  React.useEffect(() => {
    if (!isLogin()) {
      history.push('/Login')
    }
  })
  if (isLogin()) {
    return <BasicLayout />
  } else {
    return (
      <>
        {
          routes.map(router=>{
            return (
              <Route key={router.key} path={ router.path } component = { router.component }/>
            )
          })
        }
      </>
    )
  }
}

export default App;
