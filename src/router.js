import VueRouter from "vue-router";
import SignIn from "@/auth/views/SignIn";
import SignUp from "@/auth/views/SignUp";
import MessengerComponent from "@/messenger/views/Messenger";
import ProfileComponent from "@/profile/views/Profile";
import SearchComponent from "@/search/views/Search";
import SearchResultsComponent from "@/search/views/SearchResults";
import SearchMapComponent from "@/search/views/SearchMap";

const routes = [
  {
    path: "/",
    name: "home" /** landing page **/,
    redirect: "/sign-in"
  },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  {
    path: "/search",
    component: SearchComponent,
    children: [
      {
        path: "",
        name: "search",
        redirect: {
          name: "results"
        }
      },
      {
        path: "results",
        name: "results",
        alias: "",
        component: SearchResultsComponent
      },
      {
        path: "results/map",
        name: "map",
        component: SearchMapComponent
      }
    ]
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileComponent
  },
  {
    path: "/network",
    name: "network",
    component: MessengerComponent
  }
];

const router = new VueRouter({
  routes
});

export default router;
