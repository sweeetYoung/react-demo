import React from 'react';
import './sider.scss';
import { HashRouter, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { mainRoutes } from "../router";
import { flatten } from "../utils";
// import {useLocation} from "react-router";
// import sideMenus from '../utils/sideMenu';
const { Sider } = Layout;
const { SubMenu } = Menu;


function SideMenu() {
  const location = useLocation();
  const pagePath = location.pathname.split('/').pop();
  console.log(location, pagePath)
  let flatRoutes = flatten(mainRoutes, 'routes')
  const [menuTitle, setMenuTitle] = React.useState(() => window.localStorage.getItem('menuTitle') || 'home');
  const [selectKey, setSelectKey] = React.useState(() => '');
  React.useEffect(() => {
    window.localStorage.setItem('menuTitle', menuTitle)
    handleSelectedKey()
  })
  function handleMenuChange(title) {
    setMenuTitle(title)
    // handleSelectedKey(mainRoutes.find(item => item.title.toLowerCase() === pageIndexParams.toLowerCase()).key)
  }
  function handleSelectedKey() {
    console.log(menuTitle)
    const wq = flatRoutes.find(item => item.title.toLowerCase() === menuTitle.toLowerCase())
    console.log(wq, wq.key)
    setSelectKey(wq.key)
    console.log(selectKey)
  }
  return (
    <Menu selectedKeys={[...selectKey]} className="menu" theme="dark" mode="inline">
      {
        mainRoutes.map(item =>
          item.routes && item.routes.length > 0 ?
            <SubMenu key={item.key} icon={item.icon} title={item.title}>
              {
                item.routes.map(itemC => (
                  <Menu.Item key={itemC.key} onClick={() => handleMenuChange(itemC.title)}>
                    <Link to={itemC.path}>{itemC.title}</Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>
            :
            <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuChange(item.title)}>
              <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
        )
      }
    </Menu>
  )
}
function LayoutSide() {
  return (
    <HashRouter>
      <Sider>
        <div className="logo">Model Insights</div>
        <SideMenu />
      </Sider>
    </HashRouter>
  )
}
export default LayoutSide;

