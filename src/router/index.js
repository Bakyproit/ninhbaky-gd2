import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePages";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
   path: "/emulation-tiltle",
   name: "emulation",
   component: HomePage,
 },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BAS_URL),
  routes,
});

export default router;
