import React from "react";
import {Layout} from 'antd';
const {Content} = Layout;
class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
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
    )
  }
}
export default home