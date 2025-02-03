import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Buttons from "../pages/customizers/Buttons.vue";




const routes = [
  { path: "/", component: Home },
  { path: "/buttons", component: Buttons },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
