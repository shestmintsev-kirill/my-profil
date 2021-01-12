<template>
  <header class="section-outer section-header">
    <RUMobilNavbar v-if="navigation" @back="closeNav" @unvisible="closeNav" />
    <RUNavbar />
    <div class="section-header-name">
      <div class="section-header-name-me">
        <div class="name">
          <span>Кирилл <br />Шестминцев</span>
        </div>
        <div @click="navClick" class="icon">
          <img class="image-icon" src="@/assets/menu.png" alt="" />
        </div>
        <div class="profession">
          <span
            >Frontend разработчик <br />
            22 года, Москва</span
          >
        </div>
        <div class="lang">
          <span
            ><router-link to="/ru">RU</router-link> |
            <router-link to="/">ENG</router-link></span
          >
        </div>
      </div>
      <div class="section-header-name-photo">
        <img src="@/assets/photom.jpg" alt="my-image" />
      </div>
    </div>
  </header>
</template>

<script>
import RUNavbar from "@/components/RU/RUNavbar.vue";
import RUMobilNavbar from "@/components/RU/RUMobilNavbar.vue";

export default {
  name: "RUHomePage",
  components: {
    RUNavbar,
    RUMobilNavbar
  },
  data: () => ({
    navigation: false
  }),

  methods: {
    navClick() {
      this.navigation = true;
    },
    closeNav() {
      this.navigation = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/style.scss";
* {
  position: relative;
}

.image-icon {
  border-radius: 20px;
  border: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  background-color: rgba(173, 173, 173, 0.6);
}

.icon {
  position: fixed;
  padding-right: 10px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
  right: 20px;
  z-index: 10;
}

.section-header {
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  &-name {
    &-me {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      .name {
        font-size: 45px;
        font-weight: bold;
        letter-spacing: 1.1px;
        margin-bottom: 20px;
      }

      .profession {
        font-size: 18px;
      }

      .lang {
        transform: rotate(-90deg);
      }
    }

    &-photo {
      margin-bottom: 100px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: $screen-sm-max) {
    .profession {
      font-size: 15px;
    }
    .name {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 1.1px;
    }
  }

  @media (max-width: $screen-xs-max) {
    &-name {
      &-me {
        flex-direction: column;
        align-items: flex-start;
        .lang {
          display: none;
        }
      }
    }
  }

  @media (min-width: $screen-sm) {
    padding-top: 90px;
    &-name {
      &-me {
        .icon {
          display: none;
        }
      }
    }
  }
}
</style>
