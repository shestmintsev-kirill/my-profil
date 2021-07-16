<template>
  <section class="section-outer section-partfolio">
    <PortfolioView :portfolio="portfolio" @show-modal="showModal" />
    <Portfolio v-if="show" :portfolio="show" @close-modal="closeModal" />
  </section>
</template>

<script>
import Portfolio from "./Portfolio";
import PortfolioView from "./PortfolioView.vue";
export default {
  components: { PortfolioView, Portfolio },
  name: "PartfolioPage",
  data: () => ({
    show: null,
    portfolio: {
      store: {
        imgView: "onlinestore.png",
        description: "PortfolioPage.onlineStore",
        title: "PortfolioStore.title",
        link: "https://github.com/shestmintsev-kirill/vuefirstproject",
        linkToDeploy: "https://onlinestore2-63245.firebaseapp.com/",
        deploy: "Firebase",
        gitHub: "Online Store > GitHub",
        modal: "portfolio.store",
        images: [
          "onlinestore.png",
          "productList.png",
          "productCard.png",
          "productBuy.png",
          "productOrder.png",
          "productEdit.png",
          "productNew.png"
        ]
      },
      movie: {
        imgView: "movies.png",
        description: "PortfolioPage.movieApp",
        title: "PortfolioMovie.title",
        link: "https://github.com/shestmintsev-kirill/Movies-app",
        linkToDeploy: "https://shestmintsev-kirill.github.io/Movies-app/",
        deploy: "GitHub Pages",
        gitHub: "Movies Top > GitHub",
        modal: "portfolio.movie",
        images: [
          "movieHome.png",
          "movies.png",
          "movieInfo.png",
          "movieSearch.png",
          "moviePagination.png"
        ]
      },
      ashestmintseva: {
        imgView: "ashestmintseva_1.png",
        description: "PortfolioPage.ashestmintseva",
        title: "Portfolioashestmintseva.title",
        link: "",
        linkToDeploy: "https://www.ashestmintseva.ru/",
        deploy: "ashestmintseva.ru",
        modal: "portfolio.contact",
        images: [
          "ashestmintseva_3.png",
          "ashestmintseva_2.png",
          "ashestmintseva_1.png"
        ]
      },
      contact: {
        imgView: "contactBook.png",
        description: "PortfolioPage.contactBook",
        title: "PortfolioContactBook.title",
        link: "https://github.com/shestmintsev-kirill/Contact-book",
        linkToDeploy: "https://shestmintsev-kirill.github.io/Contact-book/",
        deploy: "GitHub Pages",
        gitHub: "Contact book > GitHub",
        modal: "portfolio.contact",
        images: [
          "contactBook.png",
          "contactBookSearch.png",
          "contactBookAdd.png",
          "contactBookSort.png",
          "contactBookEdit.png"
        ]
      }
    }
  }),
  methods: {
    showModal(e) {
      this.show = e;
    },
    closeModal() {
      this.show = null;
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
  overflow: hidden;

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
