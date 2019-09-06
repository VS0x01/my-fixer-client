import VueRouter from "vue-router";
import auth from "@/auth/auth";
import SignIn from "@/auth/views/SignIn";
import SignUp from "@/auth/views/SignUp";
import MessengerComponent from "@/messenger/views/Messenger";
import ProfileComponent from "@/profile/views/Profile";
import SearchComponent from "@/search/views/Search";
import AdminComponent from "@/admin/views/Admin";

const routes = [
  {
    path: "/",
    name: "home" /** landing page **/,
    redirect: () => {
      if (auth.loggedIn()) {
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
    beforeEnter: isAdmin
  },
  {
    path: "/logout",
    beforeEnter(to, from, next) {
      auth.logout();
      next({
        name: "home"
      });
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: "/sign-in",
        query: { redirect: to.fullPath }
      });
    } else next();
  } else if (to.matched.some(record => record.meta.auth)) {
    if (auth.loggedIn()) {
      next({
        name: "search"
      });
    } else next();
  } else {
    next();
  }
});

function isAdmin() {
  return true;
}

export default router;
