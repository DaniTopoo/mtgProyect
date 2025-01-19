import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", name: "Home", component: () => import("../Views/homeView.vue") },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("../Views/cardsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
