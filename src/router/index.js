import React, { lazy } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  SmileOutlined
} from '@ant-design/icons';

const routes = [
  {
    path: '/Login',
    key: '8',
    exact: true,
    component: lazy(() => import('../views/Login/index')),
  }
]
const mainRoutes = [
  {
    path: '/Home',
    title: 'Home',
    key: '1',
    exact: true,
    icon: <SmileOutlined />,
    breadJump: false,
    component: lazy(() => import('../views/Home/index')),
  },
  {
    path: '/ShowTable',
    title: 'ShowTable',
    key: '2',
    icon: <PieChartOutlined />,
    breadJump: false,
    component: lazy(() => import('../views/ShowTable/index')),
  },
  {
    path: '/Charts',
    key: '3',
    component: lazy(() => import('../views/Charts/index')),
    title: 'Charts',
    breadJump: false,
    icon: <DesktopOutlined />,
  },
  {
    path: '/Tools',
    title: 'Tools',
    icon: <UserOutlined />,
    key: '4',
    breadJump: false,
    routes: [
      {
        path: "/Tools/Tool-1",
        title: "Tool-1",
        key: '5',
        breadJump: true,
        component: lazy(() => import('../views/Tools/index')),
      },
      {
        path: "/Tools/Tool-2",
        title: "Tool-2",
        key: '6',
        breadJump: true,
        component: lazy(() => import('../views/Tools/index')),
      },
      {
        path: "/Tools/Tool-3",
        title: "Tool-3",
        key: '7',
        breadJump: true,
        component: lazy(() => import('../views/Tools/index')),
      }
    ]
  }
]

export { routes, mainRoutes }
