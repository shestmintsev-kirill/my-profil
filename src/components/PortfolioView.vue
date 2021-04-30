<template>
  <div>
    <div class="section-partfolio-title">
      <span>{{ $t("PortfolioPage.title") }}</span>
    </div>
    <div v-for="(project, i) in portfolio" :key="i" class="section-inner">
      <div class="section-partfolio-project">
        <div class="section-partfolio-project-promo">
          <a
            ><img
              @click.prevent="$emit('show-modal', project)"
              :src="getImage(`${project.imgView}`)"
              alt="onlinestore"
          /></a>
          <div class="after">
            {{ $t(project.description) }}
          </div>
        </div>
        <div class="section-partfolio-project-link">
          <a @click.prevent="$emit('show-modal', project)">
            {{ $t("PortfolioPage.link") }}
          </a>
        </div>
        <div class="section-partfolio-project-title">
          <a target="_blank" :href="project.link">{{ project.gitHub }}</a>
          <a target="_blank" :href="project.linkToDeploy">{{
            project.deploy
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioView",
  props: {
    portfolio: {
      type: Object
    }
  },
  methods: {
    getImage(img) {
      return require("@/assets/" + img);
    }
  }
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
  cursor: pointer;

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

  @media (max-width: $screen-xs-max) {
    padding-top: 60px;
  }

  @media (min-width: $screen-sm) {
    padding-top: 110px;
  }

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
      cursor: pointer;
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
