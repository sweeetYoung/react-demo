import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { mainRoutes } from "../router";
// import Home from '../views/Home/index';
const { Content } = Layout;

function generateRoute(item) {
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
function MainContent() {
  // let location = useLocation();
  // console.log(location)
  return (
    <Content style={{ margin: '16px' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Switch>
          {
            mainRoutes.map(item => {
              return generateRoute(item)
            })
          }
          <Redirect to="/Home" />
        </Switch>
      </div>
    </Content>
  )
}
function LayoutContent() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <MainContent />
    </Suspense>
  )
}

export default LayoutContent
