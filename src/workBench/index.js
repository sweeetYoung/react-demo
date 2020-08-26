import {Layout, Menu} from 'antd';
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
      this.setState({productions: res.data.production})
    }).catch(err => {
      console.warn(err)
    })
  };
  componentWillMount() {
    this.getProductions()
  }
  render() {
    return (
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            style={{height: '100%', borderRight: 0}}
          >
            {this.state.productions.map(item =>
              <SubMenu key={item.id} icon={<UserOutlined/>} title={item.name}>
                {item.chapter.map(itemC =>
                  <Menu.Item key={itemC.workId}>{itemC.title}</Menu.Item>
                )}
              </SubMenu>
            )}
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
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