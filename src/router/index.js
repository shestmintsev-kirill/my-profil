import Vue from "vue";
import VueRouter from "vue-router";
import ENG from "../views/ENG.vue";
import RU from "../views/RU.vue";
import Portfolio from "../views/Portfolio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ENG",
    component: ENG
  },
  {
    path: "/ru",
    name: "RU",
    component: RU
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
