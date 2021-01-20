<template>
  <section class="section-outer section-skills">
    <div class="section-skills-title text-center ">
      <span>{{ $t("SkillsPage.title") }}</span>
    </div>
    <div class="section-skills-text text-center ">
      <span>{{ $t("SkillsPage.description") }}</span>
    </div>
    <div class="section-skills-content">
      <div class="section-skills-content-html transform">
        <div class="section-skills-content-html-logo">
          <img src="@/assets/html5.png" alt="" />
        </div>
        <div class="section-skills-content-html-description text-center ">
          <span>HTML5</span>
        </div>
      </div>
      <div class="section-skills-content-css transform">
        <div class="section-skills-content-css-logo">
          <img src="@/assets/css-3.png" alt="" />
        </div>
        <div class="section-skills-content-css-description text-center ">
          <span>CSS3</span>
        </div>
      </div>
      <div class="section-skills-content-js transform">
        <div class="section-skills-content-js-logo">
          <img src="@/assets/javascript.png" alt="" />
        </div>
        <div class="section-skills-content-js-description text-center ">
          <span>JavaScript</span>
        </div>
      </div>
      <div class="section-skills-content-vue transform">
        <div class="section-skills-content-vue-logo">
          <img src="@/assets/vue.png" alt="" />
        </div>
        <div class="section-skills-content-vue-description text-center ">
          <span>Vue.js</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsPage"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
.transform {
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}

.text-center {
  text-align: center;
}

.section-skills {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;

  &-title {
    font-weight: bold;
    font-size: 35px;
    letter-spacing: 2px;
    text-align: center;
  }

  &-text {
    font-weight: 500;
    text-align: center;
  }

  &-content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-vue {
      img {
        width: 128px;
        height: 128px;
      }
    }
  }
  @media (max-width: $screen-xs-max) {
    padding-top: 40px;

    .transform {
      margin-bottom: 60px;
    }
    &-text {
      margin-top: 40px;
    }
    &-content {
      margin-top: 40px;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: $screen-sm) {
    padding-top: 90px;

    &-text {
      margin-top: 70px;
    }

    &-content {
      margin-bottom: 100px;
      margin-top: 80px;
      img {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
