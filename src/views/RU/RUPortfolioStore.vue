<template>
  <section class="section-outer section-partfolio">
    <div class="section-inner">
      <div class="section-partfolio-title">
        <div class="section-partfolio-title-back">
          <router-link to="/ru"
            ><img class="back" src="@/assets/back.png" alt=""
          /></router-link>
        </div>
        <div class="section-partfolio-title-text">
          <span
            >Онлайн магазин с использованием Firebase, Vuex, Vue-router и
            Vuetify</span
          >
          <div class="github">
            <a
              target="_blank"
              href="https://github.com/shestmintsev-kirill/vuefirstproject"
              ><img src="@/assets/github.png" alt=""
            /></a>
          </div>
        </div>
      </div>
      <div class="section-partfolio-project">
        <div class="section-partfolio-project-promo">
          <img src="@/assets/onlinestore.png" alt="img" />
          <hr />
          <img src="@/assets/productList.png" alt="img" />
          <hr />
          <img src="@/assets/productCard.png" alt="img" />
          <hr />
          <img src="@/assets/productBuy.png" alt="img" />
          <hr />
          <img src="@/assets/productOrder.png" alt="img" />
          <hr />
          <img src="@/assets/productEdit.png" alt="img" />
          <hr />
          <img src="@/assets/productNew.png" alt="img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RUPortfolioStore"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
* {
  @include font-ru;
}

hr {
  border: 0;
  background: rgba(117, 117, 117, 0.3);
  height: 2px;
  margin: 30px;
}

.back {
  border-radius: 20px;
  border: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  background-color: rgba(173, 173, 173, 0.6);
  position: fixed;
  transition: 0.3s;

  &:hover {
    background-color: rgba(139, 139, 139, 0.8);
  }
}

img:not(.back) {
  width: 100%;
  transition: 0.3s;
  border-radius: 5px;
  border: 1px solid rgba(105, 105, 105, 0.2);

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
  background: #eeeeee;
  padding-bottom: 50px;

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
</style>
