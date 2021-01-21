const mainRoutes = [
  {
    path: '/',
    component: () => import('../home/index'),
    title: 'Home',
    icon: '',
    children: [
      {
        path: '/home/Models',
        component: () => import(''),
        title: 'Models',
        icon: '',
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../login/index'),
    title: 'Login',
    icon: '',
  }
]

export default mainRoutes