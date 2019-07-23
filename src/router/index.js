import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";
// import auth from 'src/auth'
import config from "../../config";
import store from "../store/";

Vue.use(VueRouter);

const router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * If you decide to go with "history" mode, please also set "build.publicPath"
   * to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

// These routes don't require auth
const WHITE_LIST_ROUTES = [
  "token",
  "signin",
  "home",
  "about",
  "aboutc",
  "signin",
  "register",
  "bookmarks",
  "topics",
  "tags",
  "bookmarkview"
];

router.beforeEach((to, from, next) => {
  console.info("Router guard", { to, from });
  let name = to.name || to.path.split("/")[1];
  console.info("Router guard", { name });
  // debugger;
  let { isAuthenticated } = store.state;

  if (
    !config.isPrivatePortal ||
    (isAuthenticated || WHITE_LIST_ROUTES.includes(name))
  ) {
    next();
  } else {
    console.warn("Router guard", { to, from }, "not authenticated");
    next({ path: "/signin" });
  }
});

export default router;
