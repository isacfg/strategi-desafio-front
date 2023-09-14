import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
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
      component: () => import('../views/ClientView.vue')
    },
    {
      // resumo do pedido
      path: '/resumo',
      name: 'resumo',
      component: () => import('../views/OrderSummaryView.vue')
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('../views/OrderListView.vue')
    }
  ]
})

export default router
