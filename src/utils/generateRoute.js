import {Route} from "react-router-dom";
import React from "react";

export default function generateRoute(item) {
  // 有子路由
  if (item.routes && item.routes.length !== 0) {
    // 当前路由也要生成路由
    let routeView =
      <Route
        key={item.key}
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
    let children = item.routes.map((route) => {
      return generateRoute(route)
    })
    children.push(routeView)
    return children
  }
  // 生成当前路由
  return (
    <Route key={item.key} path={item.path} exact={item.exact}
       render={
          routeProps => {
            return <item.component {...routeProps} />
          }
       }>
    </Route>
  )
}
