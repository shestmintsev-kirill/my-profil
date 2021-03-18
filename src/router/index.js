import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import PortfolioStore from "@/views/PortfolioStore.vue";
import PortfolioMovie from "@/views/PortfolioMovie.vue";
import PortfolioContactBook from "@/views/PortfolioContactBook.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
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
    path: "/portfolio-contact",
    name: "PortfolioContactBook",
    component: PortfolioContactBook
  }
];

const router = new VueRouter({
  mode: "hash",
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
