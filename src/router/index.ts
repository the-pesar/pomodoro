import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/onboarding",
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/Auth.vue"),
    },
    {
      path: "/onboarding",
      name: "onboarding",
      component: () => import("@/views/Onboarding.vue"),
    },
  ],
});

export default router;
