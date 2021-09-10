import React from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const sideMenu = [
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
export default sideMenu;