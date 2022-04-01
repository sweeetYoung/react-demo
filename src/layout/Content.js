import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
// import { mainRoutes } from "../router";
// import generateRoute from "../utils/generateRoute";
// import Home from '../views/Home/index';
const { Content } = Layout;

function LayoutContent(props) {
  console.log('父组件传过来的参数', props)
  return (
    <Content style={{ margin: '16px' }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <Switch>
          {
            props.renderRoute
          }
          <Redirect to="/Home" />
        </Switch>
      </div>
    </Content>
  )
}

export default LayoutContent
