import React, { useState } from 'react';
import './style.scss';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
// import sideMenus from '../utils/sideMenu';
// import { FormItemContext } from 'antd/lib/form/context';
// const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const sideMenus = [
  {
    key: '0',
    title: 'Models',
    label: '模型管理',
    icon: <PieChartOutlined />,
    children: []
  },
  {
    key: '1',
    title: 'Modules',
    label: '模块管理',
    icon: <DesktopOutlined />,
    children: []
  },
  {
    key: '2',
    title: 'Tools',
    label: '工具',
    icon: <UserOutlined />,
    children: [
      {
        key: '2-1',
        title: 'Tools-1',
        label: '工具-1',
      },
      {
        key: '2-2',
        title: 'Tools-2',
        label: '工具-2',
      },
      {
        key: '2-3',
        title: 'Tools-3',
        label: '工具-3',
      }
    ]
  }
]
const LayoutSide = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  console.log(menuIndex);
  return (
    <div>
      {
        sideMenus.map(item =>
          item.child && item.child.length > 0 ?
            <SubMenu key={item.key} icon={item.icon} title={item.title}>
              {
                item.child.map(itemC => (
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
    </div>
  )
}
export default LayoutSide;

