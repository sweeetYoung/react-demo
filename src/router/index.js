import { lazy } from "react";

const mainRoutes = [
  {
    path: '/',
    title: 'Home',
    routes: [
      {
        path: '/home/Models',
        component: lazy(() => import('../home/index')),
        title: 'Models'
      }
    ]
  },
  {
    path: '/login',
    component: lazy(() => import('../login/index')),
    title: 'Login'
  }
]

export default mainRoutes