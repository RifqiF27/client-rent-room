import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../views/LoginPage.vue";
import HomePage from "../views/HomePage.vue";
import Bookmark from "../views/Bookmark.vue";
import DetailLodging from "../views/DetailLodging.vue";
import RegisterPage from "../views/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "login",
      path: "/login",
      component: LoginPage,
    },
    {
      name: "register",
      path: "/register",
      component: RegisterPage,
    },
    {
      name: "homePage",
      path: "/",
      component: HomePage,
    },
    {
      name: "bookmark",
      path: "/bookmarks",
      component: Bookmark,
    },
    {
      name: "detailLodging",
      path: "/lodgings/:id",
      component: DetailLodging,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;

  if (to.name === "bookmark" && !isAuthenticated) {
    next("/login");
  } else if (to.name === "login" && isAuthenticated) {
    next("/");
  } else if (to.name === "register" && isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
