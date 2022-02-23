import React, { lazy } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  SmileOutlined
} from '@ant-design/icons';

const mainRoutes = [
  {
    path: '/Home',
    title: 'Home',
    key: '1',
    exact: true,
    icon: <SmileOutlined />,
    component: lazy(() => import('../views/Home/index')),
  },
  {
    path: '/ShowTable',
    title: 'ShowTable',
    key: '2',
    icon: <PieChartOutlined />,
    component: lazy(() => import('../views/ShowTable/index')),
  },
  {
    path: '/Charts',
    key: '3',
    component: lazy(() => import('../views/Charts/index')),
    title: 'Charts',
    icon: <DesktopOutlined />,
  },
  {
    path: '/Tools/:toolId',
    title: 'Tools',
    icon: <UserOutlined />,
    key: '4',
    routes: [
      {
        path: "/Tools/1",
        title: "工具-1",
        key: '5',
        component: lazy(() => import('../views/Tools/index')),
      },
      {
        path: "/Tools/2",
        title: "工具-2",
        key: '6',
        component: lazy(() => import('../views/Tools/index')),
      },
      {
        path: "/Tools/3",
        title: "工具-3",
        key: '7',
        component: lazy(() => import('../views/Tools/index')),
      }
    ]
  }
]

export { mainRoutes }
