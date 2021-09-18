import React from 'react';
import './style.scss';
import { Layout } from 'antd';
import LayoutSide from './Sider';
import LayoutHeader from "./Header";
import LayoutContent from "./Content";

function BasicLayout () {
  return (
  <Layout className="page">
    <LayoutSide />
    <Layout className="site-layout">
      <LayoutHeader />
      <LayoutContent />
    </Layout>
  </Layout>
  )
}
export default BasicLayout

