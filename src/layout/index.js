import React from 'react';
import './style.scss';
import { Layout, Breadcrumb } from 'antd';
import LayoutSide from './sider';
const { Header, Content, Footer } = Layout;

function BasicLayout () {
  return (
  <Layout className="page">
    <LayoutSide />
    {/* <Sider>
      <div className="logo">Model Insights</div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Models
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Modules
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Tools">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider> */}
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <Breadcrumb style={{ margin: '16px' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
      <Content style={{ margin: '16px' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Bill is a cat.
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    {/*<Route exact path="/home" component={home} />*/}
    {/*<Route path="/workBench" component={workBench} />*/}
    {/*<Route path="/login" component={login} />*/}
  </Layout>
  )
}
export default BasicLayout

