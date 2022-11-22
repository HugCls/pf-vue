<script setup>
import Navbar from "./components/Navbar.vue";
import CustomCursor from "./components/CustomCursor.vue";
import SocialIcons from "./components/Home Components/SocialIcons.vue";
import FooterSection from "./components/Footer.vue"
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useRouteStore } from "./stores/routeStore";
const routeStore = useRouteStore();
const route = useRoute();

//watch route changes and update routeStore
watch(route, (newVal, oldVal) => {
  routeStore.currentRoutePath = newVal.path;
});

console.log(
  `Hey There i'm glad you liked the site and want to see whats going on, sure check the repo at https://github.com/HugCls/pf-vue 🚀`
);
</script>

<template>
  <div class="page-wrapper">
    <div class="navbar-container">
      <Navbar />
    </div>
    <div class="routes-wrapper">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
        
        <!-- <div class="social-icons-container">
          <SocialIcons />
        </div> -->
      </RouterView>
    </div>

    <CustomCursor />
  </div>
  <div class="footer-container">
          <FooterSection />
          </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.navbar-container {
  margin: 0 auto;
  width: 70%;
}



.routes-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.footer-container {
  display: flex;
  justify-content: center;
 

  @media screen and (max-width: 768px) {
    width: 90%;
    bottom: -5rem;
  }
}
</style>
