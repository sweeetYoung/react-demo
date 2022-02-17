import React, { lazy } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
const mainRoutes = [
  {
    path: '/ShowTable',
    title: 'ShowTable',
    key: '1',
    icon: <PieChartOutlined />,
    component: lazy(() => import('../views/ShowTable/index')),
  },
  {
    path: '/Charts',
    key: '2',
    component: lazy(() => import('../views/Charts/index')),
    title: 'Charts',
    icon: <DesktopOutlined />,
  },
  {
    path: '/Tools',
    title: 'Tools',
    icon: <UserOutlined />,
    key: '3',
    routes: [
      {
        path: "/Tools/1",
        title: "工具-1",
        key: '3-1',
        exact: true,
        component: lazy(() => import('../views/Tools/index')),
      },
      {
        path: "/Tools/2",
        title: "工具-2",
        key: '3-2',
        exact: true,
        component: lazy(() => import('../views/Tools/index')),
      },
      {
        path: "/Tools/3",
        title: "工具-3",
        key: '3-3',
        exact: true,
        component: lazy(() => import('../views/Tools/index')),
      }
    ]
  }
]

export { mainRoutes }
