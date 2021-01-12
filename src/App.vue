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
