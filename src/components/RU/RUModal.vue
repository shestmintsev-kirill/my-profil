<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <form @submit.prevent="send">
                <input
                  class="input-Name"
                  type="text"
                  placeholder="Имя"
                  v-model="msg.name"
                  required
                />
                <input
                  class="input-Email"
                  type="email"
                  placeholder="Эл. почта"
                  v-model="msg.email"
                  required
                />
                <input
                  class="input-Tel"
                  type="number"
                  placeholder="Номер телефона"
                  v-model="msg.tel"
                />
                <textarea
                  class="input-Message"
                  type="text"
                  placeholder="Сообщение"
                  v-model="msg.message"
                  required
                />
                <div class="modal-footer">
                  <button type="submit" class="modal-default-button send">
                    Отправить
                  </button>
                  <button
                    class="modal-default-button close"
                    @click="$emit('close')"
                  >
                    Закрыть
                  </button>
                </div>
              </form>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RUModal",
  data: () => ({
    msg: {
      name: null,
      email: null,
      tel: null,
      message: null
    }
  }),
  methods: {
    send() {
      (this.msg.name = null),
        (this.msg.email = null),
        (this.msg.tel = null),
        (this.msg.message = null);
      console.log(this.msg);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
* {
  @include font-ru;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

textarea {
  max-height: 200px;
  overflow: auto;
  resize: none;
}

input,
textarea {
  outline: none;
  border-radius: 15px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  padding: 15px;
  transition: 0.6s;

  &:focus {
    background: rgb(166, 227, 245);
    &::placeholder {
      text-shadow: 3px 0px 10px rgba(85, 150, 150, 0.8);
    }
  }
}

.input-Name {
  height: 50px;
}

.input-Message {
  height: 100px;
}

.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  width: 100%;
}

.modal-container {
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  background-color: rgb(238, 238, 238);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  animation: opacity 0.3s linear;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  width: 100%;
  margin: 20px 0;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.modal-footer {
  margin-top: 20px;
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.send {
  background: rgb(166, 227, 245);
  color: #828282;

  &:hover {
    box-shadow: 0px 0px 6px rgb(28, 133, 252);
  }
}

.close {
  background: rgb(253, 123, 123);

  &:hover {
    box-shadow: 0px 0px 6px rgb(255, 0, 0);
  }
}

.modal-default-button {
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 15px;
  transition: 0.5s;
  font-weight: bold;
  outline: none;

  &:hover {
    transform: scale(1.05);
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
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
@media (max-width: $screen-xs-max) {
  input,
  textarea {
    width: 90%;
  }
  .modal-container {
    width: 90%;
  }
}

@media (min-width: $screen-sm) {
  input,
  textarea {
    width: 60%;
  }
  .modal-container {
    width: 70%;
  }
}

@media (min-width: $screen-lg) {
  .modal-container {
    width: 50%;
  }
}
</style>
