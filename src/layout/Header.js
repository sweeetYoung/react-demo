import {Layout,Breadcrumb} from "antd";
import React from "react";
const {Header} = Layout;
const LayoutHeader = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Breadcrumb style={{ margin: '16px' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
    </Header>
  )
}
export default LayoutHeader;