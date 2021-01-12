<template>
  <section class="section-outer section-about">
    <div class="section-about-title">
      <span>About me</span>
    </div>
    <div class="section-about-description">
      <p>
        Hi, I'm Kirill – Junior Frontend developer from Moscow. I'm interested
        in web development and everything connected with it.
        <br /><br />
        I finished courses on Udemy platform
        <a
          target="_blank"
          href="https://www.udemy.com/certificate/UC-53816070-96d5-417b-822d-7b09d970e031/"
          >JS and Vue</a
        >
        |
        <a
          target="_blank"
          href="https://www.udemy.com/certificate/UC-13faeecc-8310-4274-b173-fadfa02956d0/"
          >Vue project
        </a>
        <br /><br />
        I am ready to implement projects with a cool team
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/style.scss";
a {
  color: #252525;
}

.section-about {
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-title {
    margin-top: 120px;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 3px;
  }

  &-description {
    margin-top: 20px;
    margin-bottom: 100px;
    text-align: center;
    font-weight: 500;
  }
  @media (max-width: $screen-xs-max) {
    &-description {
      width: 90%;
    }
  }

  @media (min-width: $screen-sm) {
    &-description {
      width: 35%;
    }
  }
}
</style>
