<script setup>
import AnimatedName from "../components/Home Components/AnimatedName.vue";
import Description from "../components/Home Components/Description.vue";
import SeeMore from "../components/Home Components/SeeMore.vue";
import SocialIcons from "../components/Home Components/SocialIcons.vue";
import CustomButton from "../components/CustomButton.vue";
</script>

<template>
  <div class="view-wrapper">
    <div class="name-container">
      <AnimatedName />
    </div>

    <div class="description-container">
      <Description />
    </div>

    <div class="see-more-container">
      <a
        href="https://www.linkedin.com/in/hugo-claisse-b9a22a222/"
        target="_blank"
      >
        <CustomButton text="&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;More about me"
      /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
.view-wrapper {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    height: 200vh;
  }

  @media screen and (max-width: 375px) {
    height: 130vh;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }


  .name-container {
    display: flex;
    justify-content: start;
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: -9rem;
    }

    @media screen and (max-width: 375px) {
      width: 90%;
      margin-top: -2rem;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 375px) {
    margin-top: -2rem;
  }
}

.see-more-container {
  display: flex;
  justify-content: start;
  width: 70%;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin-top: 2rem;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }
}

.social-icons-container {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: -3rem;
  width: 70%;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    bottom: -5rem;
  }
}
</style>
