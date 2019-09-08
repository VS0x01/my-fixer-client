import VueRouter from "vue-router";
import SignIn from "@/auth/views/SignIn";
import SignUp from "@/auth/views/SignUp";
import MessengerComponent from "@/messenger/views/Messenger";
import ProfileComponent from "@/profile/views/Profile";
import SearchComponent from "@/search/views/Search";
import AdminComponent from "@/admin/views/Admin";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home" /** landing page **/,
    redirect: () => {
      if (store.getters.loggedIn) {
        return {
          name: "search"
        };
      } else return "sign-in";
    }
  },
  {
    path: "/sign-in",
    component: SignIn,
    meta: { auth: true }
  },
  {
    path: "/sign-up",
    component: SignUp,
    meta: { auth: true }
  },
  {
    path: "/search",
    name: "search",
    redirect: {
      name: "results"
    },
    meta: { requiresAuth: true }
  },
  {
    path: "/search/results",
    name: "results",
    component: SearchComponent,
    meta: { requiresAuth: true }
  },
  {
    path: "/my-profile",
    name: "my-profile",
    component: ProfileComponent,
    meta: { requiresAuth: true }
  },
  {
    path: "/network",
    name: "network",
    component: MessengerComponent,
    meta: { requiresAuth: true }
  },
  {
    path: "/manage-users",
    name: "manage-users",
    component: AdminComponent,
    meta: { requiresAuth: true },
    beforeEnter(to, from, next) {
      next();
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: "/sign-in",
        query: { redirect: to.fullPath }
      });
    } else next();
  } else if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.loggedIn) {
      next({
        name: "search"
      });
    } else next();
  } else {
    next();
  }
});

export default router;
