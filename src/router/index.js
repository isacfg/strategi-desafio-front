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
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/simulacao/:id',
      name: 'simulacao',
      beforeEnter: isAuthenticated,
      component: () => import('../views/SimulationView.vue')
    },
    {
      path: '/clientes',
      name: 'clientes',
      beforeEnter: isAuthenticated,
      component: () => import('../views/ClientView.vue')
    },
    {
      path: '/select-client',
      name: 'select-client',
      beforeEnter: isAuthenticated,
      component: () => import('../views/SelectClientView.vue')
    },
    {
      // resumo do pedido
      path: '/resumo/',
      name: 'resumo',
      beforeEnter: isAuthenticated,
      component: () => import('../views/OrderSummaryView.vue')
    },
    {
      path: '/vendas',
      name: 'vendas',
      beforeEnter: isAuthenticated,
      component: () => import('../views/OrderListView.vue')
    }
  ]
})

export default router
