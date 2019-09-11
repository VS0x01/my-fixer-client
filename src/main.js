import Vue from "vue";
import VueRouter from "vue-router";
import router from "@/router";
import store from "@/store";
import App from "./App.vue";
import Vuelidate from "vuelidate";
import ApiServices from "@/shared/services/api.services";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

Vue.prototype.$http = new ApiServices("https://my-fixer-api.herokuapp.com/api");

Vue.use(Vuelidate);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBGWuncMklXxCHQV3Ug5jgnCHZAsFl0SHk",
    libraries: "places"
  },
  installComponents: true
});

Vue.use(VueRouter);

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
