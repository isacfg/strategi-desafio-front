import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const isAuthenticated = async (to, from, next) => {
  // firebase
  // const auth = getAuth()
  // const user = await new Promise((resolve) => {
  //   auth.onAuthStateChanged((user) => {
  //     resolve(user)
  //   })
  // })

  // if (user) {
  //   next()
  // } else {
  //   next('/login')
  // }
  next()
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
   
  ]
})

export default router
