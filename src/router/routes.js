// import Home from '../pages/Home.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home.vue'),
      },
      {
        path: 'categories',
        component: () => import('pages/Categories.vue'),
      },
      {
        path: 'category/:category_name',
        component: () => import('pages/Posts.vue'),
        props: true,
      },
      {
        path: '/post/:post_id',
        component: () => import('pages/PostPage.vue'),
        props: true,
      },
      {
        path: 'login',
        component: () => import('pages/AuthPage.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
