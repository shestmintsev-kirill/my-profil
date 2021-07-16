<template>
  <div id="app">
    <Loader />
    <Home />
  </div>
</template>

<script>
import Loader from "./components/Loader.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Loader,
    Home
  },
  mounted() {
    if (localStorage.lang) {
      this.$i18n.locale = JSON.parse(localStorage.lang);
    }
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
