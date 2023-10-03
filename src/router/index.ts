import client from "@/pocketbase";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: { requiresAuth: true },
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: { requiresAuth: true },
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/feed",
      name: "feed",
      meta: { requiresAuth: true },
      component: () => import("../views/FeedView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  // Init the store within the beforeEach function as per the documentation:
  // https://pinia.vuejs.org/core-concepts/outside-component-usage.html#single-page-applications
  if (to.meta.requiresAuth && !client?.authStore.token) {
    return {
      path: "/login",
    };
  }
});

export default router;
