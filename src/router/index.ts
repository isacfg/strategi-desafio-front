import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { getAuth } from 'firebase/auth'

const isAuthenticated = async (to, from, next) => {
  const auth = getAuth()
  const user = await new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user)
    })
  })

  if (user) {
    next()
  } else {
    next('/login')
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: isAuthenticated,
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/simulacao',
      name: 'simulacao',
      beforeEnter: isAuthenticated,
      component: () => import('../views/SimulationView.vue')
    },
    // {
    //   path: '/simulacao/:id',
    //   name: 'simulacao',
    //   component: () => import('../views/SimulationView.vue')
    // },
    {
      path: '/clientes',
      name: 'clientes',
      beforeEnter: isAuthenticated,
      component: () => import('../views/ClientView.vue')
    },
    {
      // resumo do pedido
      path: '/resumo',
      name: 'resumo',
      beforeEnter: isAuthenticated,
      component: () => import('../views/OrderSummaryView.vue')
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      beforeEnter: isAuthenticated,
      component: () => import('../views/OrderListView.vue')
    }
  ]
})

export default router
