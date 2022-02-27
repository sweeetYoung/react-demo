import {Layout} from "antd";
import React from "react";
import HeaderBreadcrumb from "../components/Breadcrumb";
const {Header} = Layout;
const LayoutHeader = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <HeaderBreadcrumb />
    </Header>
  )
}
export default LayoutHeader;
