import VueRouter from "vue-router";
import SignIn from "@/auth/views/SignIn";
import SignUp from "@/auth/views/SignUp";
import MessengerComponent from "@/messenger/views/Messenger";
import ProfileComponent from "@/profile/views/Profile";
import SearchComponent from "@/search/views/Search";
import SearchResultsComponent from "@/search/views/SearchResults";
import SearchMapComponent from "@/search/views/SearchMap";

const routes = [
  { path: "/", redirect: "/sign-in" },
  { path: "/sign-in", component: SignIn },
  { path: "/sign-up", component: SignUp },
  {
    path: "/search",
    component: SearchComponent,
    children: [
      {
        path: '',
        redirect: {
          name: 'searchResults'
        },
      },
      {
        path: 'results',
        name: 'searchResults',
        component: SearchResultsComponent,
      },
      {
        path: 'map',
        name: 'searchMap',
        component: SearchMapComponent,
      }
    ]
  },
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
