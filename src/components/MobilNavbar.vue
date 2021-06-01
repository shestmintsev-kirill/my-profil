<template>
  <transition name="mobil">
    <nav class="mobilnav">
      <div class="mobilnav-list">
        <ul
          @click="$emit('unvisible'), enableScrolling()"
          v-scroll-spy-active
          v-scroll-spy-link
        >
          <li v-for="link in links" :key="link">
            <a>{{ $t(link) }}</a>
          </li>
        </ul>
      </div>
      <div class="mobile-lang">
        <div class="close">
          <img
            @click="$emit('back'), enableScrolling()"
            src="@/assets/close.png"
            alt="close"
          />
        </div>
        <div @click="$emit('unvisible'), enableScrolling()" class="link">
          <a @click.prevent="setLocale('ru')" href="/">RU</a> |
          <a @click.prevent="setLocale('en')" href="/">ENG</a>
        </div>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  name: "MobilNavbar",
  data: () => ({
    links: [
      "Navbar.home",
      "Navbar.about",
      "Navbar.skills",
      "Navbar.portfolio",
      "Navbar.contact"
    ]
  }),
  mounted() {
    this.disableScrolling();
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.lang = JSON.stringify(locale);
    },
    disableScrolling() {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function() {
        window.scrollTo(x, y);
      };
    },
    enableScrolling() {
      window.onscroll = function() {};
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

.mobil-leave-active {
  opacity: 0;
}

.mobilnav {
  width: 100%;
  height: 100vh;
  z-index: 11;
  background: rgba(255, 255, 255, 0.98);
  position: fixed;
  left: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 45px;
  animation: opacity 0.3s linear;
  transition: all 0.5s ease;

  &-list {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  ul {
    font-size: 20px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;

    li:not(:last-child) {
      margin-bottom: 50px;

      a {
        cursor: pointer;
      }
    }
  }

  .mobile-lang {
    display: flex;
    flex-direction: column;

    .close {
      text-align: center;
      padding-top: 20px;
      cursor: pointer;
    }

    .link {
      transform: rotate(90deg);
      margin-top: 200px;
      font-size: 20px;
    }
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
