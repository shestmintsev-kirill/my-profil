<template>
  <div v-scroll-spy="{ offset: 30 }">
    <HomePage />
    <AboutPage />
    <SkillsPage />
    <PortfolioPage />
    <ContactPage />
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import AboutPage from "@/components/AboutPage.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import PortfolioPage from "@/components/PortfolioPage.vue";
import ContactPage from "@/components/ContactPage.vue";

export default {
  name: "Home",
  components: {
    HomePage,
    AboutPage,
    SkillsPage,
    PortfolioPage,
    ContactPage
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
@import "normalize-scss";
@include normalize();

* {
  @include font-eng;
  @include font-ru;
}

.slick-prev:before,
.slick-next:before {
  color: rgb(129, 129, 129) !important;
}
</style>
