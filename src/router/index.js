import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import ResumeView from "../views/ResumeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import FilmsCollectionView from "../views/FilmsCollectionView.vue";
import RapCollectionView from "../views/RapCollectionView.vue";

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
      path: "/films-collection",
      name: "films-collection",
      component: FilmsCollectionView,
      meta: {
        title: "Films Collection",
      },
    },
    {
      path: "/Rap-collection",
      name: "Rap-collection",
      component: RapCollectionView,
      meta: {
        title: "Rap Collection",
      },
    },
  ],
});

//change page tite based on route
router.beforeEach((to, from, next) => {
  document.title = `Hugo Claisse | ${to.meta.title}`;
  next();
});

export default router;
