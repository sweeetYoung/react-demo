import React from "react";
import mainRoutes from "../router";
import {
  Switch,
  Route,
} from "react-router-dom";
import {Layout} from "antd";
const {Content} = Layout;
export default function LayoutContent () {
  return (
    <Route>
      <Content style={{ margin: '16px' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Switch>
            {mainRoutes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}
          </Switch>
        </div>
      </Content>
    </Route>
  )
}