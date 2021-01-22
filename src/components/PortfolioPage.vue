<template>
  <section class="section-outer section-partfolio">
    <div class="section-inner">
      <div class="section-partfolio-title">
        <span>{{ $t("PortfolioPage.title") }}</span>
      </div>
      <div class="section-partfolio-project">
        <div class="section-partfolio-project-promo">
          <router-link to="/portfolio-store"
            ><img src="@/assets/onlinestore.png" alt=""
          /></router-link>
          <div class="after">
            {{ $t("PortfolioPage.onlineStore") }}
          </div>
        </div>
        <div class="section-partfolio-project-link">
          <router-link to="/portfolio-store">
            {{ $t("PortfolioPage.link") }}</router-link
          >
        </div>
        <div class="section-partfolio-project-title">
          <a
            target="_blank"
            href="https://github.com/shestmintsev-kirill/vuefirstproject"
            >Online Store > GitHub</a
          >
          <a target="_blank" href="https://onlinestore2-63245.firebaseapp.com/"
            >Firebase</a
          >
        </div>
      </div>
      <div class="section-partfolio-project">
        <div class="section-partfolio-project-promo">
          <router-link to="/portfolio-movie"
            ><img src="@/assets/movies.png" alt=""
          /></router-link>
          <div class="after">
            {{ $t("PortfolioPage.movieApp") }}
          </div>
        </div>
        <div class="section-partfolio-project-link">
          <router-link to="/portfolio-movie">
            {{ $t("PortfolioPage.link") }}</router-link
          >
        </div>
        <div class="section-partfolio-project-title">
          <a
            target="_blank"
            href="https://github.com/shestmintsev-kirill/Movies-app"
            >Movies Top > GitHub</a
          >
          <a
            target="_blank"
            href="https://shestmintsev-kirill.github.io/Movies-app/"
            >GitHub Pages</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PartfolioPage"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.after {
  line-height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 30px;
  width: 60%;
  height: 60%;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: rgba(146, 146, 146, 0.6);
  color: white;
  clip-path: circle(0% at 50% 50%);
  transition: all 0.6s;

  @media (max-width: $screen-xs-max) {
    display: none;
  }

  &-target {
    color: white;

    &:hover {
      color: rgb(230, 230, 230);
    }
  }
}

img {
  width: 100%;
  height: 100%;
  margin-bottom: 35px;
  transition: 0.3s;
  border-radius: 5px;
  transition: all 0.5s;

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
      display: flex;
      width: 100%;
      margin-bottom: 100px;
      justify-content: space-around;
    }

    &-promo {
      position: relative;
      margin: 20px;

      &:hover .after {
        clip-path: circle(100% at 50% 50%);
      }
      &:hover img {
        transform: scale(1.05);
      }
      @media (min-width: $screen-sm) {
        &:hover img {
          filter: blur(2px);
        }
      }
    }

    &-link {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: -30px;
      @media (max-width: $screen-xs-max) {
        margin-bottom: 10px;
        a {
          font-size: 12px;
        }
      }

      a {
        color: #2e3052;
        border-radius: 20px;
        border: 0;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        padding: 5px 10px;
        background-color: rgba(196, 196, 196, 0.6);
        transition: 0.3s;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}
</style>
