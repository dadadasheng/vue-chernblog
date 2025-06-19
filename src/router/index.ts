import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MenuView.vue'),
    },
        {
      path: '/egg',
      name: 'egg',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EggView.vue'),
    },
    {
      path: '/magazine',
      name: 'magazine',
      // route level code-splitting
      // this generates a separate chunk (Magazine.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MagazineView.vue'),
    },
    {
      path: '/design',
      name: 'design',
      // route level code-splitting
      // this generates a separate chunk (DesignBlog.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DesignBlogView.vue'),
    },
    {
      path: '/coding',
      name: 'coding',
      // route level code-splitting
      // this generates a separate chunk (CodingBlog.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CodingBlogView.vue'), 
    }
  ],
})

export default router
