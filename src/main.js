import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize-scss";
import scrollSpy, { Easing } from "vue2-scrollspy";

Vue.use(scrollSpy, {
  easing: Easing.Cubic.In
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
