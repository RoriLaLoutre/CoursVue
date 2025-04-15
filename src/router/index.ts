import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/fundamentals',
      name: 'Fundamentals',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/FundamentalsView.vue'),
    },
    {
      path: '/routing',
      name: 'Routing',
      component: () => import('@/views/RoutingView.vue'),
      meta: { sayHello: true },
    },
    {
      path: '/state',
      name: 'State',
      component: () => import('@/views/StateView.vue'),
    },
    {
      path: '/tests',
      name: 'Tests',
      component: () => import('@/views/TestsView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { hide: true },
    },
    {
      path: '/ListeCoin',
      name: 'ListeCoin',
      component: () => import('@/views/ListeCoinView.vue'),
    },
    {
      path: '/CreateCoin',
      name: 'CreateCoin',
      component: () => import('@/views/CreateCoinView.vue'),
    },
    {
      path: '/Login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    }
  ],
})

// Navigation guard
router.beforeEach((to, from, next) => {
  if (to.meta.sayHello) {
    console.log('hello !')
  }

  next()
})

export default router
