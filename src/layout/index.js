import React from 'react';
import './style.css';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import workBench from '../workBench/index'

const { Header } = Layout;

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render () {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo">A-word-web</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onClick={this.handleClick}>
              <Menu.Item key="1">首页</Menu.Item>
              <Menu.Item key="2">
                <Link to='workBench'>我的写作台</Link>
              </Menu.Item>
              <Menu.Item key="3">个人中心</Menu.Item>
              <Menu.Item key="4" className="loginMenu">注册</Menu.Item>
              <Menu.Item key="5" className="loginMenu">登陆</Menu.Item>
            </Menu>
          </Header>
          <Route path="/workBench" component={workBench} />
        </Layout>
      </Router>
    )
  }
}
export default BasicLayout

