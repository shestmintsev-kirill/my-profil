import Vue from "vue";
import VueRouter from "vue-router";
import ENG from "@/views/ENG/ENG.vue";
import RU from "@/views/RU/RU.vue";
import PortfolioStore from "@/views/ENG/PortfolioStore.vue";
import PortfolioMovie from "@/views/ENG/PortfolioMovie.vue";
import RUPortfolioStore from "@/views/RU/RUPortfolioStore.vue";
import RUPortfolioMovie from "@/views/RU/RUPortfolioMovie.vue";

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
    path: "/portfolio-store",
    name: "PortfolioStore",
    component: PortfolioStore
  },
  {
    path: "/portfolio-movie",
    name: "PortfolioMovie",
    component: PortfolioMovie
  },
  {
    path: "/ru-portfolio-store",
    name: "RUPortfolioStore",
    component: RUPortfolioStore
  },
  {
    path: "/ru-portfolio-movie",
    name: "RUPortfolioMovie",
    component: RUPortfolioMovie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //*Решение проблемы открытия верхней части при роутинге: 2 варианта =>
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
  // scrollBehavior() {
  //   document.getElementById("app").scrollIntoView();
  // }
});

export default router;
