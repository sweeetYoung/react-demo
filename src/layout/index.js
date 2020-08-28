import React from 'react';
import './style.scss';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import workBench from '../workBench/index'
import home from '../home/index'
import login from '../login/index'

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
            <Menu theme="dark" mode="horizontal" onClick={this.handleClick}>
              <Menu.Item key="1">
                <Link to='home'>首页</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to='workBench'>我的写作台</Link>
              </Menu.Item>
              <Menu.Item key="3">个人中心</Menu.Item>
              <Menu.Item key="4" className="loginMenu">
                <Link to='login'>注册</Link>
              </Menu.Item>
              <Menu.Item key="5" className="loginMenu">
                <Link to='login'>登陆</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Route exact path="/home" component={home} />
          <Route path="/workBench" component={workBench} />
          <Route path="/login" component={login} />
        </Layout>
      </Router>
    )
  }
}
export default BasicLayout

