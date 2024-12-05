import { createRouter, createWebHistory } from "vue-router";
import GanttChart from "../components/GanttChart.vue";

const routes = [{ path: "/", component: GanttChart }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
