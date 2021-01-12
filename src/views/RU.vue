<template>
  <div v-scroll-spy="{ offset: -10 }">
    <RUHomePage />
    <RUAboutPage />
    <RUSkillsPage />
    <RUPortfolioPage />
    <RUContactPage />
  </div>
</template>

<script>
import RUHomePage from "@/components/RU/RUHomePage.vue";
import RUAboutPage from "@/components/RU/RUAboutPage.vue";
import RUSkillsPage from "@/components/RU/RUSkillsPage.vue";
import RUPortfolioPage from "@/components/RU/RUPortfolioPage.vue";
import RUContactPage from "@/components/RU/RUContactPage.vue";

export default {
  name: "RU",
  components: {
    RUHomePage,
    RUAboutPage,
    RUSkillsPage,
    RUPortfolioPage,
    RUContactPage
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
* {
  @include font-ru;
}
</style>
