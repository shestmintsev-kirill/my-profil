<template>
  <div v-show="loading" class="container">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
    <div class="circle circle-4"></div>
    <div class="circle circle-5"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  data: () => ({
    loading: true
  }),
  mounted() {
    this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style scoped lang="scss">
$color: #696969, #797979, #b3b3b3, #d3d3d3, #e0e0e0;

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  z-index: 9999;
}

$circle-size: 20px;
$circle-margin: 7px;

.circle {
  width: $circle-size;
  height: $circle-size;
  border-radius: 50%;
  margin: $circle-margin;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    width: $circle-size;
    height: $circle-size;
    border-radius: 50%;
    opacity: 0.7;
    animation: scale 2s infinite cubic-bezier(0, 0, 0.5, 1);
  }
}

@for $i from 1 through 5 {
  .circle-#{$i} {
    background-color: nth($color, $i);
    &:before {
      background-color: nth($color, $i);
      animation-delay: 100ms * $i;
    }
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50%,
  75% {
    transform: scale(2.5);
  }
  78%,
  100% {
    opacity: 0;
  }
}
</style>
