import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: () => import("@/views/Tasks.vue")
    },
    {
      path: '/users',
      name: 'users',
      component: () => import("@/views/Users.vue")
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import("@/views/Comments.vue")
    }
  ]
})

export default router
