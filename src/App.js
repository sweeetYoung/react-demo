import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import mainRoutes from "./router/routers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  generateRoute(item) {
    // 有子路由
    if (item.children && item.children.length !== 0) {
      // 当前路由也要生成路由
      let routeView =
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          render={
            routeProps => {
              // 路由对应的组件 <Route><组件名称></组件名称></Route> ,这样就不用写Link标签来指定的路由组件了
              return <item.component {...routeProps} />
            }
          }>
        </Route>
      // 生成当前路由的子路由
      let children = item.children.map((route) => {
        return this.generateRoute(route)
      })
      children.push(routeView)
      return children
    }

    // 生成当前路由
    return <Route key={item.path} path={item.path} exact={item.exact}
      render={
        routeProps => {
          return <item.component {...routeProps} />
        }
      }>
    </Route>
  }

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          {
            mainRoutes.map(item => {
              return this.generateRoute(item)
            })
          }
        </Switch>
      </Router>
    )
  }
}

export default App;