<template>
  <footer class="section-outer section-contact">
    <div class="section-contact-title">
      <span>{{ $t("ContactPage.title") }}</span>
    </div>
    <div class="section-contact-text">
      <span>{{ $t("ContactPage.description") }}</span>
      <p>+7-978-599-56-22</p>
      <p>1kirillmihail1@gmail.com</p>
    </div>
    <div class="section-contact-btn">
      <button id="show-modal" @click="showModal = true" class="animation">
        {{ $t("ContactPage.btn") }}
      </button>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{ $t("ContactPage.modalTitle") }}</h3>
      </Modal>
    </div>
    <div class="section-contact-sosial">
      <a target="_blank" href="https://vk.com/kir9i_l2"
        ><img src="@/assets/vk.png" alt=""
      /></a>
      <a target="_blank" href="https://www.instagram.com/kirilljora"
        ><img src="@/assets/instagram.png" alt=""
      /></a>
      <a target="_blank" href="https://github.com/shestmintsev-kirill"
        ><img src="@/assets/github.png" alt=""
      /></a>
      <a target="_blank" href="https://www.linkedin.com/in/KShestmintsev/"
        ><img src="@/assets/linkedin.png" alt=""
      /></a>
    </div>
    <div class="section-contact-footer">
      <span
        >{{ $t("ContactPage.sosial") }}<br />
        <a target="_blank" href="https://vk.com/kir9i_l2"> VK </a>|
        <!-- eslint-disable-next-line -->
        <a target="_blank" href="https://www.instagram.com/kirilljora"> Instagram </a>|
        <!-- eslint-disable-next-line -->
        <a target="_blank" href="https://github.com/shestmintsev-kirill"> GitHub </a>|
        <!-- eslint-disable-next-line -->
        <a target="_blank" href="https://www.linkedin.com/in/KShestmintsev/"> LinkedIn </a>
      </span>
    </div>
  </footer>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "ContactPage",
  components: {
    Modal
  },
  data: () => ({
    showModal: false
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";

img {
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}
button {
  width: 200px;
  height: 40px;
  color: white;
  background: #070707;
  border-radius: 15px;
  transition: 0.3s;
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0px 0px 6px rgb(41, 41, 41);
    transform: scale(1.1);
  }
}
.section-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;

  &-title {
    font-weight: bold;
    font-size: 35px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  &-text {
    text-align: center;
  }

  &-btn {
    margin-bottom: 60px;
  }

  &-sosial {
    width: 20%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  &-footer {
    width: 100%;
    color: rgba(130, 130, 130, 1);
    text-align: center;
    margin-bottom: 70px;
  }

  @media (max-width: $screen-sm-max) {
    margin-top: 60px;

    &-text {
      width: 100%;
    }

    &-sosial {
      width: 50%;
    }
  }

  @media (min-width: $screen-md) {
    margin-top: 110px;

    &-text {
      width: 40%;
    }

    &-sosial {
      width: 20%;
    }
  }

  @media (min-width: $screen-lg) {
    &-text {
      width: 25%;
    }
  }
}
</style>
