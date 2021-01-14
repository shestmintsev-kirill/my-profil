<template>
  <div v-scroll-spy="{ offset: -10 }">
    <HomePage />
    <AboutPage />
    <SkillsPage />
    <PortfolioPage />
    <ContactPage />
  </div>
</template>

<script>
import HomePage from "@/components/ENG/HomePage.vue";
import AboutPage from "@/components/ENG/AboutPage.vue";
import SkillsPage from "@/components/ENG/SkillsPage.vue";
import PortfolioPage from "@/components/ENG/PortfolioPage.vue";
import ContactPage from "@/components/ENG/ContactPage.vue";

export default {
  name: "ENG",
  components: {
    HomePage,
    AboutPage,
    SkillsPage,
    PortfolioPage,
    ContactPage
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
* {
  @include font-eng;
}
</style>
