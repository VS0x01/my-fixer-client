import VueRouter from "vue-router";
import SignUp from "@/auth/views/SignUp";
import SignUpAccountInfoFormComponent from "@/auth/components/sign-up/SignUpAccountInfoForm";
import CompleteYourAccountComponent from "@/auth/components/sign-up/CompleteYourAccount";
import SignIn from "@/auth/views/SignIn";
import SignInFormComponent from "@/auth/components/sign-in/SignInForm";
import ResetPasswordRequestFormComponent from "@/auth/components/sign-in/ResetPasswordRequestForm";
import ResetPasswordForm from "@/auth/components/sign-in/ResetPasswordForm";
import EmailConfirmComponent from "@/auth/views/EmailConfirm";
import MessengerComponent from "@/messenger/views/Messenger";
import ProfileComponent from "@/profile/views/Profile";
import SearchComponent from "@/search/views/Search";
import AdminComponent from "@/admin/views/Admin";
import store from "@/store";

const signInMeta = {
  ResetPassword: {
    question: "Back to ",
    URL: "/sign-in",
    text: "Sign in"
  },
  login: {
    question: "Do not have an account?",
    URL: "/sign-up",
    text: "Sign up"
  }
};

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
    children: [
      {
        path: "/",
        component: SignInFormComponent,
        meta: signInMeta.login
      },
      {
        path: "reset-password/request",
        name: "reset-password-request",
        component: ResetPasswordRequestFormComponent,
        meta: signInMeta.ResetPassword
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: ResetPasswordForm,
        meta: signInMeta.login
      }
    ],
    meta: { auth: true }
  },
  {
    path: "/sign-up",
    component: SignUp,
    children: [
      {
        path: "/",
        component: SignUpAccountInfoFormComponent
      },
      {
        path: "set-password",
        name: "set-password",
        component: CompleteYourAccountComponent
      }
    ],
    meta: { auth: true }
  },
  {
    path: "/confirm",
    name: "confirm",
    component: EmailConfirmComponent,
    beforeEnter(to, from, next) {
      Object.assign(to.meta, signInMeta.ResetPassword);
      next();
    }
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
