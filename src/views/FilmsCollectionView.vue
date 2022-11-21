<script setup>
import FilmsCollection from "../components/FilmsCollection.vue";
</script>

<template>
  <div class="component-wrapper"><FilmsCollection /></div>
</template>

<style lang="scss" scoped>
.component-wrapper {
  width: 100%;
  height: 100vh;
  padding: 1rem;

  // @media screen and (max-width: 1200px) {
  //   height: 800vh;
  // }

  // @media screen and (max-width: 375px) {
  //   height: 100vh;
  // }

  // @media screen and (max-width: 768px) {
  //   height: 800vh;
  // }
}
</style>
