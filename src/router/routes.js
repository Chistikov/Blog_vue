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
        path: 'posts',
        component: () => import('pages/Posts.vue'),
      },
      {
        path: '/post/:post_id',
        component: () => import('pages/PostPage.vue'),
        props: true,
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
