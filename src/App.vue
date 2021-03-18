<template>
  <div id="app">
    <Loader />
    <router-view />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Loader
  },
  mounted() {
    if (localStorage.lang) {
      this.$i18n.locale = JSON.parse(localStorage.lang);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
@import "normalize-scss";
@include normalize();

* {
  box-sizing: border-box;
}
</style>
