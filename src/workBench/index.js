import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import React from "react";
import axios from "axios"

const {SubMenu} = Menu;
const {Content, Sider} = Layout;

class workBench extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productions: []

    };
  }

  getProductions = () => {
    axios.get('/production.json').then(res => {
      this.setState({productions: res.production})
    }).catch(err => {
      console.warn(err)
    })
  };
  componentDidMount() {
    this.getProductions()
  }
  render() {
    console.log(this.state.productions)
    return (
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
          >
            {this.state.productions.map(item =>
              <SubMenu key="sub1" icon={<UserOutlined/>} title={item.name}>
                {item.chapter.map(itemC =>
                  <Menu.Item key="1">itemC.title</Menu.Item>
                )}
              </SubMenu>
            )}
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            这里放route
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default workBench