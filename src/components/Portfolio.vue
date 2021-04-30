<template>
  <transition name="modal">
    <div class="section-outer section-inner">
      <div class="section-partfolio-title">
        <div class="section-partfolio-title-back">
          <a @click="$emit('close-modal')"
            ><img class="back" src="@/assets/back.png" alt="back"
          /></a>
        </div>
        <div class="section-partfolio-title-text">
          <span>{{ $t(portfolio.title) }}</span>
          <div class="github">
            <a target="_blank" :href="portfolio.link"
              ><img src="@/assets/github.png" alt="github"
            /></a>
          </div>
        </div>
      </div>
      <div
        v-for="img in portfolio.images"
        :key="img"
        class="section-partfolio-project"
      >
        <div class="section-partfolio-project-promo">
          <img :src="getImage(`${img}`)" />
          <hr />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Portfolio",
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
* {
  @include font-eng;
  @include font-ru;
}

::-webkit-scrollbar-thumb {
  background-color: #5a5b8a !important;
}

hr {
  border: 0;
  background: rgba(117, 117, 117, 0.3);
  height: 2px;
  margin: 20px;
}

.back {
  border-radius: 20px;
  border: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  background-color: rgba(173, 173, 173, 0.6);
  position: fixed;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgba(139, 139, 139, 0.8);
  }
}

img:not(.back) {
  width: 100%;
  transition: 0.3s;
  border-radius: 5px;
  border: 1px solid rgba(105, 105, 105, 0.2);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0 10px 4px rgba(0, 2, 3, 0.2);
  }
}

.section-inner {
  position: fixed;
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(235, 235, 235, 1);
  transition: all 0.3s ease;
  animation: opacity 0.3s linear;
}

.section-partfolio {
  &-title {
    padding-top: 50px;
    display: flex;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 50px;

    &-text {
      display: flex;
      width: 100%;
      text-align: center;

      .github {
        width: 35px;
        img {
          border: none;

          &:hover {
            box-shadow: none;
            transform: scale(1.1);
          }
        }
      }

      span {
        flex: auto;
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
  transform: scale(0.1);
}

@keyframes opacity {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }

  50% {
    opacity: 0.5;
    transform: scale(1);
  }

  100% {
    opacity: 1;
  }
}

@media (max-width: $screen-sm-max) {
  ::-webkit-scrollbar {
    width: 5px !important;
  }
}
</style>
