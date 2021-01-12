<template>
  <section class="section-outer section-partfolio">
    <div class="section-inner">
      <div class="section-partfolio-title">
        <div class="section-partfolio-title-back">
          <a href="/"><img class="back" src="@/assets/back.png" alt=""/></a>
        </div>
        <div class="section-partfolio-title-text"><span>Portfolio</span></div>
      </div>
      <div class="section-partfolio-project">
        <div class="section-partfolio-project-promo">
          <a
            target="_blank"
            href="https://github.com/shestmintsev-kirill/vuefirstproject"
            ><img src="@/assets/onlinestore.png" alt=""
          /></a>
        </div>
        <div class="section-partfolio-project-title">
          <a
            target="_blank"
            href="https://github.com/shestmintsev-kirill/vuefirstproject"
            >Online Store - Homepage</a
          >
        </div>
      </div>
      <div class="section-partfolio-project">
        <div class="section-partfolio-project-promo">
          <a
            target="_blank"
            href="https://github.com/shestmintsev-kirill/Movies-app"
            ><img src="@/assets/movies.png" alt=""
          /></a>
        </div>
        <div class="section-partfolio-project-title">
          <a
            target="_blank"
            href="https://github.com/shestmintsev-kirill/Movies-app"
            >Movies Top - Homepage</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
* {
  @include font-eng;
}
.back {
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}

img:not(.back) {
  width: 100%;
  margin-bottom: 35px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0 10px 4px rgba(0, 2, 3, 0.2);
  }
}

.section-inner {
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;
}
.section-partfolio {
  background: #f6f6f6;

  &-title {
    padding-top: 50px;
    display: flex;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 50px;

    &-text {
      width: 100%;
      text-align: center;
    }
  }

  &-project {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-title {
      margin-bottom: 100px;
    }
  }
}
</style>
