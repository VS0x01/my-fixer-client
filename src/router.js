import VueRouter from "vue-router";
import SignIn from "@/auth/views/SignIn";
import SignUp from "@/auth/views/SignUp";
import MessengerComponent from "@/messenger/views/Messenger";
import ProfileComponent from "@/profile/views/Profile";
import SearchComponent from "@/search/views/Search";

const routes = [
  { path: "/", redirect: "/sign-in" },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  { path: "/search", component: SearchComponent },
  { path: "/profile", component: ProfileComponent },
  {
    path: "/network",
    name: "messenger",
    component: MessengerComponent
  }
];

const router = new VueRouter({
  routes
});

export default router;
