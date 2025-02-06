import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";



const routes = [
  { path: "/", component: Home },
  { path: "/project/:name", component: ProjectDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
