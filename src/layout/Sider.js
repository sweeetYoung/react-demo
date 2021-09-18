import React, { useState } from 'react';
import './sider.scss';
import {Link, Router} from "react-router-dom";
import { Layout, Menu } from 'antd';
import sideMenus from '../utils/sideMenu';
const { Sider } = Layout;
const { SubMenu } = Menu;
const LayoutSide = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  console.log(menuIndex);
  return (
    <Router>
      <Sider>
        <div className="logo">Model Insights</div>
        <Menu className="menu" theme="dark" mode="inline">
          {
            sideMenus.map(item =>
              item.children.length > 0 ?
                <SubMenu key={item.key} icon={item.icon} title={item.title}>
                  {
                    item.children.map(itemC => (
                      <Menu.Item key={itemC.key} onClick={() => setMenuIndex(item.key)}>
                        <Link to={item.path}>{item.title}</Link>
                      </Menu.Item>
                    ))
                  }
                </SubMenu>
                :
                <Menu.Item key={item.key} icon={item.icon} onClick={() => setMenuIndex(item.key)}>
                  <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            )
          }
        </Menu>
      </Sider>
    </Router>
  )
}
export default LayoutSide;

