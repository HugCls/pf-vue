import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import ResumeView from "../views/ResumeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import CarsCollectionView from "../views/CarsCollectionView.vue";
import EdmCollectionView from "../views/EdmCollectionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumeView,
      meta: {
        title: "Resume",
      },
    },
    {
      path: "/japanese-cars-collection",
      name: "japanese-cars-collection",
      component: CarsCollectionView,
      meta: {
        title: "Japanese Cars Collection",
      },
    },
    {
      path: "/edm-collection",
      name: "edm-collection",
      component: EdmCollectionView,
      meta: {
        title: "EDM Collection",
      },
    },
  ],
});

//change page tite based on route
router.beforeEach((to, from, next) => {
  document.title = `Iulian Ursu | ${to.meta.title}`;
  next();
});

export default router;
