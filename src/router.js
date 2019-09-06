import VueRouter from "vue-router";
import auth from '@/auth/auth'
import SignIn from "@/auth/views/SignIn";
import SignUp from "@/auth/views/SignUp";
import MessengerComponent from "@/messenger/views/Messenger";
import ProfileComponent from "@/profile/views/Profile";
import SearchComponent from "@/search/views/Search";
import AdminComponent from "@/admin/views/Admin";

function requireAuth(to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: "/sign-in",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

const routes = [
  {
    path: "/",
    name: "home" /** landing page **/,
    redirect: "/search"
  },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  {
    path: "/search",
    name: "search",
    redirect: {
      name: "results"
    }
  },
  {
    path: "/search/results",
    name: "results",
    component: SearchComponent
  },
  {
    path: "/my-profile",
    name: "my-profile",
    component: ProfileComponent
  },
  {
    path: "/network",
    name: "network",
    component: MessengerComponent
  },
  {
    path: "/manage-users",
    name: "manage-users",
    component: AdminComponent
  },
  {
    path: "/logout",
    beforeEnter(to, from, next) {
      auth.logout();
      next("/");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
