<template>
  <section class="section-outer section-partfolio">
    <div class="section-inner">
      <div class="section-partfolio-title">
        <span>Портфолио</span>
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
            >Online Store - Главная</a
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
            >Movies Top - Главная</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RUPartfolioPage"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

img {
  width: 100%;
  margin-bottom: 35px;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0px 0 10px 4px rgba(0, 0, 0, 0.2);
  }
}

.section-inner {
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;
}
.section-partfolio {
  padding-top: 110px;
  background: #f6f6f6;

  &-title {
    text-align: center;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 50px;
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
