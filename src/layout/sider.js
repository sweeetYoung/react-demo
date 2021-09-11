import React, { useState } from 'react';
import './style.scss';
import { Layout, Menu } from 'antd';
import sideMenus from '../utils/sideMenu';
// import { FormItemContext } from 'antd/lib/form/context';
const { Sider } = Layout;
const { SubMenu } = Menu;
const LayoutSide = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  console.log(menuIndex);
  return (
    <Sider className="site-layout-background">
      <div className="logo">Model Insights</div>
      <Menu>
        {
          sideMenus.map(item =>
            item.children.length > 0 ?
              <SubMenu key={item.key} icon={item.icon} title={item.title}>
                {
                  item.children.map(itemC => (
                    <Menu.Item key={itemC.key} onClick={() => setMenuIndex(item.key)}>{itemC.title}</Menu.Item>
                  ))
                }
              </SubMenu>
              :
              <Menu.Item key={item.key} icon={item.icon} onClick={() => setMenuIndex(item.key)}>
                {item.title}
              </Menu.Item>
          )
        }
      </Menu>
    </Sider>
  )
}
export default LayoutSide;

