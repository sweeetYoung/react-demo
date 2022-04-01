import React from 'react';
import {Redirect, withRouter} from "react-router-dom";
import './style.scss';
import { Layout } from 'antd';
import LayoutSide from './Sider';
import LayoutHeader from "./Header";
import LayoutContent from "./Content";
import { mainRoutes } from "../router";
import generateRoute from "../utils/generateRoute";

function BasicLayout () {
  function isLogin() {
    let userInfo = window.localStorage.getItem('userInfo') || {}
    return Object.keys(userInfo)?.length > 0;
  }
  console.log('是否登陆', isLogin())
  return (
    isLogin() ?
      <Layout className="page">
        <LayoutSide />
        <Layout className="site-layout">
          <LayoutHeader />
          <LayoutContent renderRoute={mainRoutes.map(item => generateRoute(item))}/>
        </Layout>
      </Layout>
      :
      <Redirect to='/Login' />
  )
}
export default withRouter(BasicLayout)

